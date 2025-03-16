const hardcodedBooks = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", category: "Fiction", imageUrl: "https://covers.openlibrary.org/b/id/8225264-L.jpg" },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", category: "Fiction", imageUrl: "https://via.placeholder.com/150" },
    { title: "Sapiens: A Brief History of Humankind", author: "Yuval Noah Harari", category: "Non-Fiction", imageUrl: "https://via.placeholder.com/150" },
    { title: "Becoming", author: "Michelle Obama", category: "Non-Fiction", imageUrl: "https://via.placeholder.com/150" }
];
function saveBooksToLocalStorage() {
    localStorage.setItem("books", JSON.stringify(hardcodedBooks));
}

function getBooksFromLocalStorage() {
    const books = localStorage.getItem("books");
    return books ? JSON.parse(books) : [];
}
document.getElementById("addBookForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const category = document.getElementById("category").value;
    const imageUrl = document.getElementById("imageUrl").value;

    if (title && author && category && imageUrl) {
        const newBook = { title, author, category, imageUrl };
        const books = getBooksFromLocalStorage();
        books.push(newBook);
        localStorage.setItem("books", JSON.stringify(books));
        document.getElementById("addBookForm").reset();

        alert("Book added successfully!");
    } else {
        alert("All fields are required!");
    }
});
saveBooksToLocalStorage();
