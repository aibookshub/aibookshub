# (for %F in (*) do @echo %CD%|for /F "tokens=*" %A in ('cd') do @echo %~nxA\%F) > d.txt

import os, requests, pymongo,json, sys
from dotenv import load_dotenv
load_dotenv()
client = pymongo.MongoClient(os.getenv("MONGO_BOOKS_URI"))
db = client["aibooks_db"]
collection = db["aibooks_collection"]


def txt2json():
    # Read the UTF-8 text file and process lines
    with open("./txt/source.txt", "r", encoding="utf-8") as file:
        books = [line.strip().replace("\\", "/") for line in file if line.strip()]  # Remove empty lines and replace backslash


    # Save to a UTF-8 encoded JSON file
    with open("./txt/source_json.json", "w", encoding="utf-8") as json_file:
        json.dump(books, json_file, ensure_ascii=False, indent=4)  # Keep UTF-8 characters

    print("Books list saved to ./txt/source_json.json")

def get_prefix_from_file(filename="./txt/source.txt"):
    """Extract the first 4-digit prefix from the first line of the file."""
    try:
        with open(filename, "r", encoding="utf-8") as file:
            first_line = file.readline().strip()  # Read the first line
            return first_line[:4]  # Extract the first 4 characters (assumed to be digits)
    except FileNotFoundError:
        print("Error: source.txt not found.")
        return "0000"  # Default fallback prefix

def generate_bid():
    """Generate a unique bid starting with a dynamic 4-digit prefix followed by an incrementing 4-digit number."""
    prefix = get_prefix_from_file()
    last_entry = collection.find_one(sort=[("bid", pymongo.DESCENDING)])  # Find the last inserted bid
    
    if last_entry and "bid" in last_entry and last_entry["bid"].startswith(prefix):
        last_number = int(last_entry["bid"][4:])  # Extract the numeric part after the prefix
    else:
        last_number = 0  # Start from 0000 if no matching prefix entry exists

    new_number = last_number + 1
    return f"{prefix}{new_number:04d}"  # Format as 'XXXXYYYY' (4-digit prefix + 4-digit number)


# def generate_bid():
#     """Generate a unique bid starting with '11' followed by an incrementing 4-digit number."""
#     last_entry = collection.find_one(sort=[("bid", pymongo.DESCENDING)])  # Find the last inserted book
#     if last_entry and "bid" in last_entry:
#         last_number = int(last_entry["bid"][2:])  # Extract the numeric part
#     else:
#         last_number = 0  # Start from 0000 if no entry exists
    
#     new_number = last_number + 1
#     return f"11{new_number:04d}"  # Format as '11XXXX'


def fetch_book_metadata(title):
    api_url = "https://www.googleapis.com/books/v1/volumes"
    params = {"q": title}
    
    response = requests.get(api_url, params=params)

    if response.status_code == 200:
        data = response.json()
        if "items" in data:
                book_data = data["items"][0]["volumeInfo"]
                book_data["bid"] = generate_bid()
                return book_data
        else:
            print("No books found for:", title)
            return None
    else:
        print("Error fetching data:", response.status_code)
        return None

def save_to_mongodb(book_data):
    """Save book metadata to MongoDB."""
    if book_data:
        collection.insert_one(book_data)
        print("Book saved to MongoDB:", book_data.get("title"))
    else:
        print("No data to save.")


if __name__ == "__main__":
    _ = txt2json()
    
    with open("./txt/source_json.json", "r", encoding="utf-8") as file:
        book_titles = json.load(file)

    for path_title in book_titles:
        title = path_title[5:]
        print(title)
        metadata = fetch_book_metadata(title)
        save_to_mongodb(metadata)
