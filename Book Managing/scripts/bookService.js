document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const bookId = urlParams.get("id");

    const books = [
        { 
            id: 1, 
            title: "The Great Gatsby", 
            author: "F. Scott Fitzgerald", 
            category: "fiction", 
            description: "A classic novel set in the 1920s.", 
            imageUrl: "https://covers.openlibrary.org/b/id/8225264-L.jpg",
            bookUrl: "https://en.wikipedia.org/wiki/The_Great_Gatsby"
        },
        { 
            id: 2, 
            title: "To Kill a Mockingbird", 
            author: "Harper Lee", 
            category: "fiction", 
            description: "A novel about racial injustice.", 
            imageUrl: "https://covers.openlibrary.org/b/id/8224656-L.jpg", 
            bookUrl: "https://en.wikipedia.org/wiki/To_Kill_a_Mockingbird"
        },
        { 
            id: 3, 
            title: "Sapiens", 
            author: "Yuval Noah Harari", 
            category: "non-fiction", 
            description: "A history of humankind.", 
            imageUrl: "https://covers.openlibrary.org/b/id/10544884-L.jpg", 
            bookUrl: "https://en.wikipedia.org/wiki/Sapiens:_A_Brief_History_of_Humankind"
        },
        { 
            id: 4, 
            title: "A Brief History of Time", 
            author: "Stephen Hawking", 
            category: "science", 
            description: "A book on cosmology.", 
            imageUrl: "https://covers.openlibrary.org/b/id/10739631-L.jpg", 
            bookUrl: "https://en.wikipedia.org/wiki/A_Brief_History_of_Time"
        }
    ];
    
    const book = books.find(b => b.id == bookId);

    if (book) {
        document.getElementById("book-details").innerHTML = `
            <h1>${book.title}</h1>
            <p>Author: ${book.author}</p>
            <p>Category: ${book.category}</p>
            <p>${book.description}</p>
            <img src="${book.imageUrl}" alt="Book Cover">
        `;
    } else {
        document.getElementById("book-details").innerHTML = "<p>Book not found.</p>";
    }
});
