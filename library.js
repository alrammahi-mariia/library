let myLibrary = [];


function Book (title, author, pages, isRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.toggleRead = function(){
       this.isRead = this.isRead === true ? false : true;
    };
    }

function addBookToLibrary(title, author, pages, isRead){
    let newBook = new Book(title, author, pages, isRead);
    myLibrary.push(newBook);
    displayCards();
}

addBookToLibrary('Hobbit', 'J.R.R.Tolkien', 345, 'read');
addBookToLibrary('Big Little Lies', 'L.Moriarty', 456, 'not read yet');
addBookToLibrary('Nightingale', 'K.Hannah', 434, 'read');

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let title = document.querySelector('input[name=title]').value;
    let author = document.querySelector('input[name=author]').value;
    let pages = document.querySelector('input[name=pages]').value;
    let isRead = document.querySelector('input[name=read]').value;

    addBookToLibrary(title, author, pages, isRead);
    console.log(myLibrary);
    form.reset();
});
   
function displayCards() {
        
        let container = document.querySelector('.container'); 
        container.innerHTML = '';
  
        
        myLibrary.forEach((item, index) => {

        let bookCard = document.createElement('div');
        bookCard.setAttribute('class','book-card');

        let title = document.createElement('div');
        title.textContent = item.title;
        bookCard.appendChild(title);

        let author = document.createElement('div');
        author.textContent = item.author;
        bookCard.appendChild(author);

        let pages = document.createElement('div');
        pages.textContent = item.pages;
        bookCard.appendChild(pages);

        let read = document.createElement('div');
        read.textContent = item.isRead === true ? 'Read' : 'Not read';
        bookCard.appendChild(read);


        let toggleBtn = document.createElement('button');
        toggleBtn.textContent = "Set status";
        toggleBtn.addEventListener('click', () => {
            item.toggleRead();
            displayCards();
        });
        bookCard.appendChild(toggleBtn);


        let deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Remove";
        deleteBtn.addEventListener('click', () => {
            myLibrary.splice(index, 1);
            displayCards();
        });
        bookCard.appendChild(deleteBtn);
        
        container.appendChild(bookCard);
        })
   
    }

// function clearForm(form){
//     const inputs = form.querySelectorAll('input');
//     inputs.forEach(input => input.value = '');
// };