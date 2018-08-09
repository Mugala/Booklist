// Book constructor
function Book (title,author,isbn){
  this.title = title;
  this.author = author;
  this.isbn = isbn;  
}

// UI constructor

function UI(){}


// Add book to list
UI.prototype.addBookToList = function(book){
  const list = document.getElementById('book-list');
  // Create tr element
  const row = document.createElement('tr');

  console.log(row);

}
// Event Listeners
document.getElementById('book-form').addEventListener('submit', function(e){

  // get form values
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value;

  //Instantiating a book
  const book = new Book(title,author,isbn);


  //Instantiate UI object

  const ui = new UI();


   // add book to list
  ui.addBookToList(book);
  e.preventDefault();
});

