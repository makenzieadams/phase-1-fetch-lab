function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json())
    .then((books) => {
      getNthBook(5, books);
      getNthCharacter(1031, books);
      getNumberOfPages(books);
      renderBooks(books);
    });
}

function renderBooks(books) {
  const main = document.querySelector("main");
  books.forEach((book) => {
    const h2 = document.createElement("h2");
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  fetchBooks();
});

function getNthBook(number, books) {
  console.log(`The 5th Book: ${books[number - 1].name}`);
}

function getNthCharacter(number, books) {
  let characterToPick = number;
  let character;

  for (let i = 0; i < books.length; i++) {
    const currentCharacters = books[i].characters.length;

    if (currentCharacters >= characterToPick - 1) {
      character = books[i].characters[characterToPick - 1];
      break;
    }

    characterToPick -= currentCharacters;
  }

  console.log(`The ${number} character is ${character}.`);
}

function getNumberOfPages(books) {
  let total = 0;

  for (let i = 0; i < books.length; i++) {
    total += books[i].numberOfPages;
  }

  console.log(`The number of pages total is ${total}`);
}
