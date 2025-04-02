import os, requests, pymongo, json, sys
from dotenv import load_dotenv
load_dotenv()
client = pymongo.MongoClient(os.getenv("MONGO_BOOKS_URI"))
db = client["aibooks_db"]
collection = db["aibooks_collection"]

def txt2json():
    with open("./txt/source.txt", "r", encoding="utf-8") as file:
        books = [line.strip().replace("\\", "/") for line in file if line.strip()]
    
    with open("./txt/source_json.json", "w", encoding="utf-8") as json_file:
        json.dump(books, json_file, ensure_ascii=False, indent=4)
    print("Books list saved to ./txt/source_json.json")


def fetch_book_metadata(name):
    api_url = "https://www.googleapis.com/books/v1/volumes"
    params = {"q": name}
    
    try:
        response = requests.get(api_url, params=params, timeout=10)
        if response.status_code == 200:
            data = response.json()
            if "items" in data:
                return data["items"][0]["volumeInfo"]
    except Exception as e:
        print(f"Error fetching metadata for {name}: {str(e)}")
    
    return None

def create_book_record(path_title):
    name = path_title[5:]  # Your original name extraction
    catid = path_title[:4]  # Your original name extraction
    
    base_record = {
        "catid": catid,
        "name": name,          # From your path
        "original_path": path_title,
        "source": "manual"
    }
    
    # Try to get additional metadata
    metadata = fetch_book_metadata(name)
    if metadata:
        base_record.update({
            "title": metadata.get("title"),  # Google's title
            "authors": metadata.get("authors", []),
            "publisher": metadata.get("publisher"),
            "publishedDate": metadata.get("publishedDate"),
            "description": metadata.get("description"),
            "industryIdentifiers": metadata.get("industryIdentifiers", []),
            "pageCount": metadata.get("pageCount"),
            "categories": metadata.get("categories", []),
            "imageLinks": metadata.get("imageLinks", {}),
            "language": metadata.get("language"),
            "source": "google_books"
        })
    
    return base_record

def save_to_mongodb(book_data):
    if book_data:
        collection.insert_one(book_data)
        title = book_data.get("title", book_data["name"])
        print(f"Book saved: {title} (BID: {book_data['catid']})")

if __name__ == "__main__":
    _ = txt2json()
    
    with open("./txt/source_json.json", "r", encoding="utf-8") as file:
        book_paths = json.load(file)

    for path_title in book_paths:
        book_data = create_book_record(path_title)
        save_to_mongodb(book_data)

    print("All books processed")