// Activity 1: Object Creation And Access
const book = {
  title: "rich dad and Poor dad",
  author: "Robert T. Kiyosaki",
  year: "1999", 
}

console.log(book);

console.log(`title of book is: ${book.title}`);

// Activity 2: Object Method
book.bookTitleAndAuthor = function() {
  return `title of book is: ${book.title} and author is: ${book.author}`;
}
console.log(book.bookTitleAndAuthor());

book.updateYearOfBook = function(year) {
  this.year = year;
}
book.updateYearOfBook(2004);
console.log(book);


// Activity 3: Nested Object
book.library = {
  name: "vasundhara library",
  books: [
    {
      title: "rich dad and Poor dad",
      author: "Robert T. Kiyosaki",
      year: "1999",
    },
    {
      title: "Think Different",
      author: "Mohd Kaif",
      year: "2022",
    },
  ]
}

console.log(book);
console.log(`library name is: ${book.library.name} and books title are:\n`);

book.library.books.forEach(element => {
  console.log(`title is: ${element.title}`);
});


// Activity 4: this Keyword
book.bookTitleAndYear = function () {
  return `book title is: ${book.title} and book year is: ${book.year}`
}


// Activity 5: Object Iteration

for (const key in book) {
  console.log(`${ key }: ${ book[key]}`);
}

console.log(`Object keys: ${Object.keys(book)}\nObject values: ${Object.values(book)}`);