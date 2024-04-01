import Auth from "../../utils/Auth.js";
import getBookByID from "../../utils/getBookByID.js";
import logOut from "../../utils/logOut.js";

await Auth()

const logout = document.querySelector('.logout')

logout.addEventListener('click', () => {
    logOut();
})
let details = JSON.parse(sessionStorage.getItem("View"))

const book = await getBookByID(details.id)
let title = document.querySelector(".title")
let genre = document.querySelector(".genre")
let count = document.querySelector(".count")
let price = document.querySelector(".price")

title.innerText = `Title: ${book.title}`
genre.innerText = `Genre: ${book.genre}`
count.innerText = `Count: ${book.count}`
price.innerText = `Price: ${book.price}`


