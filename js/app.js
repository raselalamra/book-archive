const searchBook = () =>{
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value;
    console.log(searchText)
     // clear data
     searchField.value = '';

     const url = `https://openlibrary.org/search.json?q=${searchText}`
     fetch(url)
     .then(res => res.json())
     .then (data => displaySearchResult(data))
}

const displaySearchResult = data => {
    const searchResult = document.getElementById('search-result');
    const dataArray = data.docs
    dataArray.forEach(book => {
        console.log(book)
        const div = document.createElement('div')
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
            <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" class="card-img-top" alt="No Found">
            <div class="card-body">
                 <h5 class="card-title">${book.title}</h5>
                 <h6>Author Name: ${book.author_name}</h6>
                 <p>publisher: ${book.publisher}</p>
                 <p>First Publish: ${book.first_publish_year}</p>
            </div>
       </div>
        `;
        searchResult.appendChild(div);
        const totalResult = document.getElementById('totalResult')
        totalResult.innerHTML = `<p>Resutl Found: ${data.numFound}</p>`
    });
   
}