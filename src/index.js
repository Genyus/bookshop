import { books } from "./modules/books.js";
import displayListOfBooks from "./modules/listOfBooks.js";
import { addButtonHandlers } from "./modules/bookcase.js";

displayListOfBooks(books);
addButtonHandlers();
