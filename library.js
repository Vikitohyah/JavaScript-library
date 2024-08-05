// Step 1; Create an empty array named library to store book objects
let library = [];

// Step 2; // Add book objects to the library array using the push method
library.push(
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", yearPublished: 1925, available: true },
    { title: "To Kill a Mockingbird", author: "Harper Lee", yearPublished: 1960, available: true },
    { title: "1984", author: "George Orwell", yearPublished: 1949, available: false },
    { title: "Pride and Prejudice", author: "Jane Austen", yearPublished: 1813, available: true }
);

// Step 3; Update the availability of "1984" to true
library.forEach(book => {
    if (book.title === "1984") {
        book.available = true;
    }
});

// Step 4; Remove "Pride and Prejudice" from the library array using the splice
for (let i = 0; i < library.length; i++) {
    if (library[i].title === "Pride and Prejudice") {
        library.splice(i, 1);
        break;
    }
}




// Step 5; Check if "The Great Gatsby" is in the library using a method that indirectly checks for inclusion
let hasGreatGatsby = library.some(book => book.title === "The Great Gatsby");
console.log(hasGreatGatsby); // true

// Step 6; Borrow the first available book (remove it from the array after updating its status to false)
for (let i = 0; i < library.length; i++) {
    if (library[i].available) {
        library[i].available = false;
        let borrowedBook = library.shift();
        console.log(borrowedBook);
        break;
    }
}

// Step 7; Add a new book to the start of the library array using the unshift method
library.unshift({ title: "The Catcher in the Rye", author: "J.D. Salinger", yearPublished: 1951, available: true });

// Step 8; Get a list of all book titles and combine them into a single string, with each title separated by a comma
let bookTitles = library.map(book => book.title).join(", ");
console.log(bookTitles);

// Step 9; Create a new array called newArrivals containing only the last two books in the library array using the slice method
let newArrivals = library.slice(-2);
console.log(newArrivals);

// Final Output
console.log(library);