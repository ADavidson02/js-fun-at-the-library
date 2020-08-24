function createLibrary(name, shelves) {
  var library = {
    name: name,
    shelves: { fiction: [],  nonFiction: [], fantasy: [],
      }
    }
  return library;
}

function addBook(library, book) {
  library.shelves[book.genre].push(book);
}

// 
// function checkoutBook(library, book) {
//   library.shelves.fiction.pop();
//   var goodBye = `You have now checked out ${book} from the ${[library.name]}`;
//   return goodBye;
// }


function checkoutBook(library, book) {
  var goodBye = `You have now checked out ${book} from the ${[library.name]}`;
  for (var i = 0; i < library.shelves.fantasy.length; i++) {
    if (book === library.shelves.fantasy[i].title) {
      library.shelves.fantasy.shift();
      return goodBye;
    }
  }
  for (var i = 0; i < library.shelves.fiction.length; i++) {
  if (book === library.shelves.fiction[i].title) {
    library.shelves.fiction.shift();
    return goodBye;
    }
  }
  for ( var i = 0; i < library.shelves.nonFiction.length; i++) {
  if (book === library.shelves.nonFiction[i].title) {
    library.shelves.nonFiction.shift();
    return goodBye;
      }
    }
  return `Sorry, there are currently no copies of ${book} available at the ${library.name}`
}


module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  checkoutBook: checkoutBook
};