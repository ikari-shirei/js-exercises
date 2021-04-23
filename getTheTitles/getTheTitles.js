const getTheTitles = function (name) {
  let arr = [];
  for (const property of name) {
    arr.push(property.title);
  }
  return arr;
};

module.exports = getTheTitles;

const books = [
  {
    title: 'Book',
    author: 'Name',
  },
  {
    title: 'Book2',
    author: 'Name2',
  },
];

console.log(getTheTitles(books));
