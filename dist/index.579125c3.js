const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
searchForm.addEventListener("submit", (e)=>{
    // get search term
    const searchTerm = searchInput.value;
    // get sort
    const sortBy = document.querySelector('input[name="sortby"]:checked').value;
    // get limit
    const searchLimit = document.getElementById("limit").value;
    // check input
    if (!searchTerm) // show message
    showMessage("Please add a search term", "alert-danger");
    e.preventDefault();
});
// show message
function showMessage(message, className) {
    // create div
    const div = document.createElement("div");
    // add classes
    div.className = `alert ${className}`;
    // add text
    div.appendChild(document.createTextNode(message));
    // get parent element
    const searchContainer = document.getElementById("search-container");
    // get search
    const search = document.getElementById("search");
    // insert message
    searchContainer.insertBefore(div, search);
    // Timeout alert
    setTimeout(()=>document.querySelector(".alert").remove(), 3000);
}

//# sourceMappingURL=index.579125c3.js.map
