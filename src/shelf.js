function shelfBook(book, shelf) {
  if (book.genre === "sciFi") {
    shelf.unshift(book);
    if (shelf.length > 3) {
      shelf.shift()
    }
  }
}


function unshelfBook(title, shelf){
  var remove = shelf.find(shelf => shelf.title === title);
  var placement = shelf.indexOf(remove);
  shelf.splice(placement, 1);
}


function listTitles(shelf){
  var titles = [];
  for (var i = 0; i < shelf.length; i++) {
    titles.push(shelf[i].title);
    
  }
  return titles.join(", ");  
}

function searchShelf(shelf, title) {
  for (var i = 0; i < shelf.length; i++) {
    if(shelf[i].title === title) {
      return true;
    }
  }
  return false;
}


module.exports = {
  shelfBook: shelfBook,
  unshelfBook: unshelfBook,
  listTitles: listTitles,
  searchShelf: searchShelf
};
