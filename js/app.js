    const errorDiv = document.getElementById("error");
    const totalResult = document.getElementById('totalResult')

    const searchBook = () => {
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value;

        ////<---emty string error handling--->/////
        searchText.textContent ='';
        errorDiv.textContent = '';
    if (searchText === "") {
        errorDiv.innerHTML = "<h5 class='text-center p-3 text-danger'><b>Search field cannot be find</b></h5>"
        return;
      }
     //---clear data---////
     searchField.value = '';

     const url = `https://openlibrary.org/search.json?q=${searchText}`
     fetch(url)
     .then(res => res.json())
     .then (data => displaySearchResult(data))
}
    //<---eorror handling--->//
const resultNumber = num =>{
    totalResult.textContent = '';
    if( num === 0){
        errorDiv.innerHTML = 
        "<h5 class='text-center p-3 bg-danger w-50 mx-auto'><b>Result Found Error</b></h5>";
      }
      else{
        totalResult.innerHTML =` 
        <h4 class='text-center p-3 m-3 bg-info'>${num} result Found</h4>
        `;
      }
}
    //<--- search your result show ---->//

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
                 <h5 class="card-title">Book Name: ${book.title}</h5>
                 <h6>Author Name: ${book.author_name}</h6>
                 <p>publisher: ${book.publisher[0]}</p>
                 <p>First Publish: ${book.first_publish_year}</p>
            </div>
       </div>
        `;
        searchResult.appendChild(div);   
    }); 
}