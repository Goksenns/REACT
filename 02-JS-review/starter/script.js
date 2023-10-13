const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: false,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

//Destructuring

/*
const book = getBook(3);
book;

// const title = book.title;
// const author = book.author;

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book;

console.log(author, title, genres);

// const primaryGenre = genres[0];
// const secondaryGenre = genres[1];

// rest operator

const [primaryGenre, secondaryGenre, ...otherGenres] = genres;

console.log(primaryGenre, secondaryGenre, otherGenres);

// spread operator with arrays

const newGenres = [...genres, "epic fantasy"];
newGenres;

// take all the values out of the array and place them here one by one. And so since we are building a new array here we will then get this new array which contains all these individual values and at the end, epic fanstasy now.

// spread operator with objects

const updatedBook = {
  ...book,
  //adding a new property
  moviePublicationDate: "2001-12-19",

  //overwriting an existing property
  // pages: 1210,
};
updatedBook;

// template literals

const summary = `${title}, a ${pages} page long book, was written by ${author} and published in ${
  publicationDate.split("-")[0]
}. The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie.`;
summary;

//ternaries instead of if/else statements

const pagesRange = pages > 1000 ? "over a thousand" : "less than 1000";

pagesRange;
console.log(`The book has ${pagesRange} pages`);

// arrow functions

//function declaration

// function getYear(str) {
//   return str.split("-")[0];
// }

//function expression

const getYear = (str) => str.split("-")[0];

//this one also work the same way but we have to use return
// const getYear = (str) => {
//   return str.split("-")[0];
// };

console.log(getYear(publicationDate));

//short circuting and logical operators : &&, ||, ??

console.log(true && "Some string");
console.log(false && "Some string");
console.log(hasMovieAdaptation && "This book has a movie");

// falsy value: 0, '' , null, undefined
console.log("jonas" && "Some string");
console.log(0 && "Some string");

console.log(true || "Some string");
console.log(false || "some string");

console.log(book.translations.spanish);

const spanishTranslation = book.translations.spanish || "NOT TRANSLATED";
spanishTranslation;

// console.log(book.reviews.librarything.reviewsCount);
// const countWrong = book.reviews.librarything.reviewsCount || "no data";
// countWrong;

//first value is zero, so its a falsy value. the result of this operator will be the second part, which in this case is wrong. Now to solve this javascript has recently added a new logical operator which is called the nullish coalescing operator.

// this nullish coalescing operator will only return the second value when the first value is null or undefined but not it is zero or empty string.

// const count = book.reviews.librarything.reviewsCount ?? "no data";
// count;

// optional chaining

function getTotalReviewCount(book) {
  const goodreads = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
}
// whenever this here is undefined, then javascript will no longer even try to read reviewsCount out of this.

console.log(getTotalReviewCount(book));

*/
function getTotalReviewCount(book) {
  const goodreads = book.reviews?.goodreads?.reviewsCount;
  const librarything = book.reviews?.librarything?.reviewsCount ?? 0;
  return goodreads + librarything;
}

//THE ARRAY MAP METHOD
// the mapp method is basically to create a new array based on the original array with some operation applied to each element of the original array.
const books = getBooks();
books;

const x = [1, 2, 3, 4, 5].map((el) => el * 2);
console.log(x);

const titles = books.map((book) => book.title);
titles;

const essentialData = books.map((book) => ({
  title: book.title,
  author: book.author,
  reviewsCount: getTotalReviewCount(book),
}));
essentialData;

//FİLTER METHOD
// we can use the filter method in order to filter out some elements of the array based on a condition.

const longBooksWithMovie = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation);
longBooksWithMovie;

const adventureBooks = books
  .filter((books) => books.genres.includes("adventure"))
  .map((book) => book.title);
//includes always return either true or false
adventureBooks;

//THE ARRAY REDUCE METHOD
// the goal of reduce is to reduce, basically, the entire array to just one value so to boil it down.

const pagesAllBooks = books.reduce((sum, book) => sum + book.pages, 0);

pagesAllBooks;

//sum is actually accumulator because we keep adding up and up and up onto this temporary value, so to say, in this case, its simply the sum of the pages and so here we call it sum. normally we say acc.

//THE ARRAY SORT METHOD
// we can use this method to sort an array.

const arr = [3, 7, 1, 9, 6];
const sorted = arr.sort((a, b) => a - b);
sorted;
arr;
// when we do a minus b, it will be sorted in an ascending way. when we do b minus a, then descending.

//unlike the map filter and reduce method this is not a functional method. So this is actually a method that mutates, so it changes the original array.

//if we dont want to change the original array we can use slice(). before sorting we take a copy and then we sorted only this copy, but not the arr itself.
const arr1 = [3, 7, 1, 9, 6];
const sorted1 = arr1.slice().sort((a, b) => a - b);
sorted1;
arr1;

const sortedByPages = books.slice().sort((a, b) => b.pages - a.pages);
sortedByPages;
