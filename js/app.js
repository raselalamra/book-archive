const errorDiv = document.getElementById("error");
const totalResult = document.getElementById('totalResult')

const searchBook = () =>{
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value;

    if (searchText === "") {
        errorDiv.innerText = "Search field cannot be find.";
        return;
      }
    // console.log(searchText)

     // clear data
     searchField.value = '';

     const url = `https://openlibrary.org/search.json?q=${searchText}`
     fetch(url)
     .then(res => res.json())
     .then (data => displaySearchResult(data))
}

const resultNumber = num =>{
    if( num === 0){
        errorDiv.innerHTML = 
        "<h5 class='text-center p-3 bg-info'><b>No Result Found</b></h5>";
      }
      else{
        totalResult.innerHTML =` 
        <h4 class='text-center p-3 m-3 bg-info'>${num} result Found</h4>
       
        `;
      }
}

const displaySearchResult = data => {
    const searchResult = document.getElementById('search-result');
    resultNumber(data.numFound)
    searchResult.textContent ='';

    const dataArray = data.docs
    dataArray.forEach(book => {
        console.log(book)
        const div = document.createElement('div')
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
            <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="No Found">
            <div class="card-body">
                 <h5 class="card-title">Books Name: ${book.title}</h5>
                 <h6>Author Name: ${book.author_name}</h6>
                 <p>publisher: ${book.publisher}</p>
                 <p>First Publish: ${book.first_publish_year}</p>
            </div>
       </div>
        `;
        searchResult.appendChild(div);
        
    });
  
}