import Auth from "../../utils/auth/Auth.js";
import deleteBook from "../../utils/bookController/deleteBook.js";
import getBooks from "../../utils/bookController/getBooks.js";
import logOut from "../../utils/auth/logOut.js";

await Auth();
const books = await getBooks();

let tbody = document.querySelector("tbody")
const search = document.querySelector('.search')
const searchBtn = document.querySelector('.searchBtn')
const genre = document.querySelector('select')
const logout = document.querySelector('.logout')

logout.addEventListener('click', () => {
    logOut();
})


let searchBooks = []

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

books.forEach(element => {
    if (element.title != undefined) {
        createTable(element);
    }
});
let view = document.querySelectorAll(".btn-primary")
let edit = document.querySelectorAll(".btn-warning")
let deletebtn = document.querySelectorAll(".btn-danger")

deletebtn.forEach(element => {
    element.addEventListener("click", function (e) {
        e.preventDefault()
        books.forEach(ele => {
            if (element.getAttribute("mydelete") == ele.id) {
                let res = deleteBook(ele.id)
                if (res) {
                    element.parentElement.parentElement.parentElement.remove()
                    alert("Book deleted")
                } else {
                    alert("We cant deleted this book")
                }
            }
        })
    })
});

view.forEach(element => {
    element.addEventListener("click", function () {
        books.forEach(ele => {
            if (element.getAttribute("myview") == ele.id) {
                sessionStorage.setItem("View", JSON.stringify(ele))
            }
        })
    })
});

edit.forEach(element => {
    element.addEventListener("click", function () {
        books.forEach(ele => {
            if (element.getAttribute("myedit") == ele.id) {
                sessionStorage.setItem("Edit", JSON.stringify(ele))
            }
        })
    })
})
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
                <a href="./bookedit.html"><button class="btn btn-warning" myedit = "${element.id}">Edit</button></a>
                <a href="#"><button class="btn btn-danger" mydelete = "${element.id}">Delete
            </td>
        </tr>`
}
// }








