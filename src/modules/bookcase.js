import { displayListOfBooks } from "./listOfBooks.js";

const addToBookcaseButtons = document.getElementsByClassName("addbtn");
for (var i = 0; i < addToBookcaseButtons.length; i++) {
  const button = addToBookcaseButtons[i];
  button.addEventListener("click", addToBookcaseClicked);
  console.log("clicked");
}

export function addToBookcaseClicked(event) {
  const button = event.target;
  const bookDivItem = button.parentElement.parentElement;
  const title = bookDivItem.getElementsByClassName("h2")[0].innerText;
  const author = bookDivItem.getElementsByClassName("author")[0].innerText;
  const price = bookDivItem.getElementsByClassName("price")[0].innerText;
  const imageSrc = bookDivItem.getElementsByClassName("img")[0].src;
}

export default addToBookcaseClicked;
