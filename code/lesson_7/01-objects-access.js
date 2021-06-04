// JSON objects
// Javascript Object Notation

// Objects can have other objects as properties

let book = {
    pages: 200,
    year: 2022,
    author: {
        firstName: "Paul",
        lastName: "Anton"
    },
    format: "A4"
}

console.log(book.author.firstName)

let book1 = {
    pages: 200,
    year: 2022,
    authors:
        [
            {
                firstName: "Paul",
                lastName: "Anton"
            },
            {
                firstName: "Jannek",
                lastName: "JJ"
            }

        ],
    format: "A4",
    title: "Javascript. WHY?"
}

console.log(book1.authors[1].firstName)