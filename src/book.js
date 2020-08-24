function createTitle(title) {
  modify = `The ${title}`;
  return modify;
}

function buildMainCharacter(name, age, pronouns) {
  var character = {
  name: name,
  age: age,
  pronouns: pronouns,
  }
  return character;
}

function saveReview(review, allReviews) {
  if (allReviews.indexOf(review) === -1) {
    allReviews.push(review);
  }
}

function calculatePageCount(bookTitle) {
  bookPageCount = bookTitle.length * 20;
  return bookPageCount;
}

function writeBook(title, bookCharacter, bookGenre){
  book = {
    title: title,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(title),
    genre: bookGenre,
  }
  return book;
}


function editBook(book) {
  book.pageCount= (book.pageCount * .75);
  return;
}


module.exports = {
  createTitle: createTitle,
  buildMainCharacter: buildMainCharacter,
  saveReview: saveReview,
  calculatePageCount: calculatePageCount,
  writeBook: writeBook,
  editBook: editBook
}
