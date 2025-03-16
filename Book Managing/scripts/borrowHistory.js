document.addEventListener("DOMContentLoaded", () => {
    let borrowList = document.getElementById("borrowList");
    const borrowedBooks = [
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald", borrowedAt: "2024-03-10" },
        { title: "A Brief History of Time", author: "Stephen Hawking", borrowedAt: "2024-03-12" },
        { title: "Sapiens", author: "Yuval Noah Harari", borrowedAt: "2024-03-15" }
    ];

    borrowedBooks.forEach(book => {
        let div = document.createElement("div");
        div.classList.add("book-card");
        div.innerHTML = `
            <h3>${book.title}</h3>
            <p>${book.author}</p>
            <p>📅 Borrowed on: ${book.borrowedAt}</p>
        `;
        borrowList.appendChild(div);
    });
});
