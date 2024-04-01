import getBooks from "../../../utils/getBooks.js";
import Auth from "./utils/auth/Auth.js";
import logOut from "./utils/auth/logOut.js";
await Auth()

const books = await getBooks();
const search = document.querySelector('.search')
const searchBtn = document.querySelector('.searchBtn')
const genre = document.querySelector('select')
let searchBooks = []

const logout = document.querySelector('.logout')

logout.addEventListener('click', () => {
    logOut();
})

searchBtn.addEventListener('click', () => {
    searchBooks = books.filter(x => x.price == search.value)
    tbody.innerHTML = ''
    if (searchBooks.length !== 0) {
        searchBooks.forEach(element => {
            createTable(element)
        })
    }
})

genre.addEventListener('change', (e) => {
    searchBooks = books.filter(x => x.genre == e.target.value)
    tbody.innerHTML = ''
    if (searchBooks.length !== 0) {
        searchBooks.forEach(element => {
            createTable(element)
        })
    }
})

search.addEventListener('input', (e) => {
    searchBooks = books.filter(x => x.companyName.toLowerCase().includes(e.target.value.toLowerCase()))
    console.log(searchBooks);
    tbody.innerHTML = ''
    if (searchBooks.length !== 0) {
        searchBooks.forEach(element => {
            createTable(element)
        })
    }
})
let tbody = document.querySelector("tbody")
books.forEach(element => {
    if (element.title != undefined) {
        createTable(element);
    }
});
let view = document.querySelectorAll(".btn-primary")
view.forEach(element => {
    element.addEventListener("click", function () {
        books.forEach(ele => {
            if (element.getAttribute("myview") == ele.id) {
                sessionStorage.setItem("View", JSON.stringify(ele))
            }
        })
    })
});


function createTable(element) {
    tbody.innerHTML += `
        <tr>
            <th>${element.id}</th>
            <td>${element.title}</td>
            <td>${element.genre}</td>
            <td>${element.count}</td>
            <td>${element.price}</td>
            <td>
                <a href="./bookview.html"><button class="btn btn-primary" myview = "${element.id}">View</button></a>
            </td>
        </tr>`
}



