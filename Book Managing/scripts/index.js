document.addEventListener("DOMContentLoaded", () => {
    const categoryButtons = document.querySelectorAll(".category-btn");
    const searchButton = document.getElementById("searchButton");
    const searchBar = document.getElementById("searchBar");
    categoryButtons.forEach(button => {
        button.addEventListener("click", function () {
            const category = this.getAttribute("data-category");
            window.location.href = `categories.html?category=${encodeURIComponent(category)}`;
        });
    });
    searchButton.addEventListener("click", function () {
        const query = searchBar.value.trim().toLowerCase();

        if (query) {
            window.location.href = `search-results.html?q=${encodeURIComponent(query)}`;
        } else {
            alert("Please enter a search query.");
        }
    });
    searchBar.addEventListener("keypress", function (e) {
        if (e.key === "Enter") {
            searchButton.click();
        }
    });
});
