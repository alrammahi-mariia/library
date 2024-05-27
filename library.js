const myLibrary = [];


// function Book(title, author, pages, read){
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
//     }

// function addBookToLibrary(book){
//     myLibrary.push(book);
// }

// const book1 = new Book('Hobbit', 'J.R.R.Tolkien', 345, 'read');
// const book2 = new Book('Big Little Lies', 'L.Moriarty', 456, 'not read yet');
// const book3 = new Book('Nightingale', 'K.Hannah', 434, 'read');

// addBookToLibrary(book1);
// addBookToLibrary(book2);
// addBookToLibrary(book3);

const form = document.querySelector('form');
const container = document.querySelector('.container');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const book = Object.fromEntries(fd);
    myLibrary.push(book);
    console.log(myLibrary);
    
    myLibrary.forEach((item) => {
       
        const bookCard = document.createElement('div')
        bookCard.setAttribute('class','book-card')
        const title = document.createElement('div')
        const author = document.createElement('div')
        const pages = document.createElement('div')
        const read = document.createElement('div')
    
        container.appendChild(bookCard)
        bookCard.appendChild(title)
        bookCard.appendChild(author)
        bookCard.appendChild(pages)
        bookCard.appendChild(read)
        
        title.textContent = item.title
        author.textContent = item.author
        pages.textContent = item.pages
        read.textContent = item.read
     });

})



