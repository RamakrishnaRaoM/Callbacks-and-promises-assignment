const books=[
  {
    title:"Rich dad poor dad",
    author:"Robert Kiyosaki",
    year:1925,
  },
  {
    title:"2 states",
    author:"chetan bhagat",
    year:1960,
  },
  {
    title:"who are you",
    author:"george orwell",
    year:1949
  }
];
function logTiles(tiles){
  titles.sort();
  console.log(titles.join(", "));
}

function extractTitles(books,callback){
  const titles=books.map((book)=> book.title);
  callback(titles);
}
extractTitles(books,logTitles);