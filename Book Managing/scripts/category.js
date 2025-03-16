document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get("category");
const books = {
    "fiction": [
        { 
            id: 1, 
            title: "The Great Gatsby", 
            author: "F. Scott Fitzgerald", 
            description: "A classic novel set in the 1920s.", 
            imageUrl: "https://covers.openlibrary.org/b/id/8225264-L.jpg" 
        },
        { 
            id: 2, 
            title: "To Kill a Mockingbird", 
            author: "Harper Lee", 
            description: "A novel about racial injustice.", 
            imageUrl: "https://covers.openlibrary.org/b/id/8224656-L.jpg" 
        }
    ],
    "non-fiction": [
        { 
            id: 3, 
            title: "Sapiens", 
            author: "Yuval Noah Harari", 
            description: "A history of humankind.", 
            imageUrl: "https://covers.openlibrary.org/b/id/10544884-L.jpg" 
        },
        { 
            id: 4, 
            title: "Educated", 
            author: "Tara Westover", 
            description: "A memoir about growing up in a strict family.", 
            imageUrl: "https://covers.openlibrary.org/b/id/8228412-L.jpg" 
        }
    ],
    "science": [
        { 
            id: 5, 
            title: "A Brief History of Time", 
            author: "Stephen Hawking", 
            description: "A book on cosmology.", 
            imageUrl: "https://covers.openlibrary.org/b/id/10739631-L.jpg" 
        },
        { 
            id: 6, 
            title: "Cosmos", 
            author: "Carl Sagan", 
            description: "A scientific exploration of the universe.", 
            imageUrl: "https://covers.openlibrary.org/b/id/8212185-L.jpg" 
        }
    ]
};
    if (category) {
        document.getElementById("categoryTitle").textContent = category.charAt(0).toUpperCase() + category.slice(1); 
        document.getElementById("categoryName").textContent = category.charAt(0).toUpperCase() + category.slice(1) + " Books"; 
    }

    const bookList = document.getElementById("bookList");

    if (books[category]) {
        bookList.innerHTML = "";
        books[category].forEach(book => {
            let div = document.createElement("div");
            div.classList.add("book-card");
            div.innerHTML = `
                <img src="${book.imageUrl}" alt="Book Cover">
                <h3>${book.title}</h3>
                <p>${book.author}</p>
                <p>${book.description}</p>
                <button onclick="location.href='book-details.html?id=${book.id}'">📖 View Details</button>
            `;
            bookList.appendChild(div);
        });
    } else {
        bookList.innerHTML = "<p>No books found in this category.</p>";
    }
});
