import os, requests, pymongo,json, sys
from dotenv import load_dotenv
load_dotenv()
client = pymongo.MongoClient(os.getenv("MONGO_BOOKS_URI"))
db = client["aibooks_db"]
collection = db["aibooks_collection"]


def get_isbn_13(book):
    """Extract ISBN-13 from a book dictionary."""
    for identifier in book.get("industryIdentifiers", []):  # Default to empty list if missing
        if identifier.get("type") == "ISBN_13":
            return identifier.get("identifier")
    return "No ISBN_13 available"


def save_books_to_txt(file_path="./ts/booklist_temp.ts"):
    """Retrieve books from MongoDB and save them to a .txt file in the given format."""
    books = collection.find()
    
    booklist = []
    for book in books:
        book_entry = {
            "id":   book.get("bid", "Unknown ID"),
            "title": book.get("title", "Unknown Title"),
            "cover": book.get("imageLinks", {}).get("smallThumbnail", "No cover available"),
            "publisher": book.get("publisher", "Unknown publisher"),
            "author": book.get("authors", ["Unknown Author"])[0],
            "summary": book.get("description", "No summary available")[:1000],
            "previewLink": book.get("previewLink", "No preview link"),
            "isbn_13": get_isbn_13(book)
        }
        booklist.append(book_entry)

    # Write the list to a .js file in the required format
    with open(file_path, "w", encoding="utf-8") as f:
        f.write("export const booklist = ")
        json.dump(booklist, f, indent=4, ensure_ascii=False)

    print(f"Book list saved to {file_path}")

if __name__ == "__main__":
    save_books_to_txt()

