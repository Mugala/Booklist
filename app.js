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

  // Insert cols
  row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href = '#' class = 'delete'>X</a></td>
  `;

  list.appendChild(row);
  }

  //Show alert
  UI.prototype.showAlert = function(message, className){
      //create a div
      const div = document.createElement('div');
      //Add classes
      div.className = `alert ${className}`;
      // Add text
      div.appendChild(document.createTextNode(message));
      //get parent
      const container = document.querySelector('.container');
      //get form
      const form = document.querySelector('#book-form');
      // insert alert
      container.insertBefore(div,form);

      // TimeOut after 3 sec
      setTimeout(function(){
        document.querySelector('.alert').remove();
      }, 3000);
  }

  //Clear fields
  UI.prototype.clearFields = function(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
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

  // Validate
  if(title === ''|| author === '' ||isbn === ''){

    // Error alert
    ui.showAlert('Please fill in all fields','error');

    }else{

      // add book to list
      ui.addBookToList(book);

      // Show success
      ui.showAlert('Book Added!', 'success');

      //Clear fields
      ui.clearFields();
    }

    e.preventDefault();
});

