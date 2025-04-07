import os
import pymongo
import json
from dotenv import load_dotenv

load_dotenv()
client = pymongo.MongoClient(os.getenv("MONGO_BOOKS_URI"))
db = client["aibooks_db"]
collection = db["aibooks_collection"]

def get_isbn_13(book):
    """Safely extract ISBN-13 with comprehensive fallbacks"""
    if not isinstance(book, dict):
        return ""
    
    try:
        identifiers = book.get("industryIdentifiers", [])
        if not isinstance(identifiers, list):
            return ""
            
        for identifier in identifiers:
            if isinstance(identifier, dict) and identifier.get("type") == "ISBN_13":
                return identifier.get("identifier", "")
        return ""
    except Exception:
        return ""

def safe_get(book, *keys, default=""):
    """Safely navigate nested dictionaries with multiple fallbacks"""
    if not isinstance(book, dict):
        return default
        
    try:
        current = book
        for key in keys:
            if not isinstance(current, dict):
                return default
            current = current.get(key, {})
        return current if current != {} else default
    except Exception:
        return default

def get_first_author(authors):
    """Safely get first author with multiple fallbacks"""
    try:
        if not authors or not isinstance(authors, (list, tuple)):
            return "Unknown Author"
        return str(authors[0]) if authors else "Unknown Author"
    except Exception:
        return "Unknown Author"

def process_book(book):
    """Process individual book document with comprehensive error handling"""
    if not isinstance(book, dict):
        return None
        
    try:
        return {
            "_id": str(book.get("_id")),
            "id": str(book.get("catid", "Unknown ID")),
            "name": str(book.get("name", "Unknown Name")),
            "title": str(book.get("title", book.get("name", "Unknown Title"))),
            "cover": str(safe_get(book, "imageLinks", "smallThumbnail", default="https://raw.githubusercontent.com/aibookshub/aibookshub/main/assets/images/covermissing.png")),
            "publisher": str(book.get("publisher", "Unknown publisher")),
            "author": get_first_author(book.get("authors")),
            "summary": str(safe_get(book, "description", default="No summary available"))[:1000],
            "previewLink": str(book.get("previewLink", "No preview link")),
            "isbn_13": get_isbn_13(book),
            "original_path": str(book.get("original_path", ""))
        }
    except Exception as e:
        print(f"Error details for book {book.get('catid', 'Unknown')}: {str(e)}")
        return None

def save_books_to_txt(file_path="./ts/booklist_temp.ts"):
    """Retrieve books from MongoDB and save them with comprehensive error handling"""
    try:
        books_cursor = collection.find()
        total_count = collection.count_documents({})
    except pymongo.errors.PyMongoError as e:
        print(f"Error accessing MongoDB: {str(e)}")
        return

    booklist = []
    error_count = 0
    
    for book in books_cursor:
        processed_book = process_book(book)
        if processed_book:
            booklist.append(processed_book)
        else:
            error_count += 1
            print(f"Skipped book with ID: {book.get('catid', 'Unknown')}")

    try:
        with open(file_path, "w", encoding="utf-8") as f:
            f.write("export const booklist = ")
            json.dump(booklist, f, indent=4, ensure_ascii=False)
            f.write(";\n")
        
        print(f"\nProcessing complete:")
        print(f"- Total books in database: {total_count}")
        print(f"- Successfully processed: {len(booklist)}")
        print(f"- Skipped due to errors: {error_count}")
        print(f"Saved to {file_path}")
    except IOError as e:
        print(f"Error writing to file: {str(e)}")

if __name__ == "__main__":
    save_books_to_txt()