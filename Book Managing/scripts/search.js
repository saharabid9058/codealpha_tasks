document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get("query") ? urlParams.get("query").toLowerCase() : "";

const books = [
    { 
        id: 1, 
        title: "The Great Gatsby", 
        author: "F. Scott Fitzgerald", 
        category: "fiction", 
        description: "A classic novel set in the 1920s.", 
        imageUrl: "https://covers.openlibrary.org/b/id/8225264-L.jpg" 
    },
    { 
        id: 2, 
        title: "To Kill a Mockingbird", 
        author: "Harper Lee", 
        category: "fiction", 
        description: "A novel about racial injustice.", 
        imageUrl: "https://covers.openlibrary.org/b/id/8224656-L.jpg" 
    },
    { 
        id: 3, 
        title: "Sapiens", 
        author: "Yuval Noah Harari", 
        category: "non-fiction", 
        description: "A history of humankind.", 
        imageUrl: "https://covers.openlibrary.org/b/id/10544884-L.jpg" 
    },
    { 
        id: 4, 
        title: "A Brief History of Time", 
        author: "Stephen Hawking", 
        category: "science", 
        description: "A book on cosmology.", 
        imageUrl: "https://covers.openlibrary.org/b/id/10739631-L.jpg" 
    }
];
    const searchResultsDiv = document.getElementById("searchResults");
    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(query) || book.author.toLowerCase().includes(query)
    );

    if (filteredBooks.length > 0) {
        filteredBooks.forEach(book => {
            const div = document.createElement("div");
            div.classList.add("book-card");
            div.innerHTML = `
                <img src="${book.imageUrl}" alt="Book Cover">
                <h3>${book.title}</h3>
                <p>Author: ${book.author}</p>
                <p>Category: ${book.category}</p>
                <p>${book.description}</p>
                <button onclick="window.location.href='book-details.html?id=${book.id}'">📖 View Details</button>
            `;
            searchResultsDiv.appendChild(div);
        });
    } else {
        searchResultsDiv.innerHTML = "<p>No books found matching your search.</p>";
    }
});
