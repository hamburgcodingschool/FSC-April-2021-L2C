

let book1 = {
    pages: 200,
    year: 2022,
    authors:
        [
            {
                firstName: "Paul",
                lastName: "A"
            },
            {
                firstName: "Jannek",
                lastName: "J"
            },
            {
                firstName: "Teresa",
                lastName: "H"
            }
        ],
    format: "A4",
    title: "Javascript. WHY?",
    numberPages: 200,
    germanLanguage: true
}

console.log(book1.authors[1].firstName)

// E0: try it with your own book object
// 0.1 add 2 properties to the book object: one number (e.g. numberPages) and one boolean (e.g. germanLanguage)
// 0.2 add one author to the list of authors
// 0.3 iterate through the list of the books' authors and print their Firstnames

book1.authors.length


// 0.4 print how many authors this book has

// create a second book object, book2

// 0.5 write a function getPageCount(book) that takes a book as a parameter and returns the number of pages;