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
    // clear input
    searchInput.value = "";
    // search reddit
    searchReddit(searchTerm, searchLimit, sortBy).then((results)=>{
        let output = '<div class="card-columns">';
        // loop through posts
        results.forEach((post)=>{
            output += `
      <div class="card">
        <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${post.title}</h5>
          <p class="card-text">{post.selftext}</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      `;
        });
        output += "</div>";
        document.getElementById("results").innerHTML = output;
    });
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
// Search Reddit
function searchReddit(searchTerm, searchLimit, sortBy) {
    return fetch(`http://www.reddit.com/search.json?q=${searchTerm}&sort=${sortBy}&limit=${searchLimit}`).then((res)=>res.json()).then((data)=>data.data.children.map((data)=>data.data)).catch((err)=>console.log(err));
} // async function searchReddit(searchTerm, searchLimit, sortBy) {
 //   try {
 //     const res = await fetch(
 //       `http://www.reddit.com/search.json?q=${searchTerm}&sort=${sortBy}&limit=${searchLimit}`
 //     );
 //     const data = await res.json();
 //     return data.data.children.map((data_1) => data_1.data);
 //   } catch (err) {
 //     return console.log(err);
 //   }
 // }

//# sourceMappingURL=index.579125c3.js.map
