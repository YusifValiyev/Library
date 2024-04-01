import Auth from "../../utils/auth/Auth.js";
import deleteAuthor from "../../utils/authorController/deleteAuthor.js";
import getAuthor from "../../utils/authorController/getAuthor.js";
import logOut from "../../utils/auth/logOut.js";

await Auth();
const authors = await getAuthor();

let tbody = document.querySelector("tbody")
const search = document.querySelector('.search')
const searchBtn = document.querySelector('.searchBtn')
// const refreshBtn = document.querySelector('.refresh')
const logout = document.querySelector('.logout')

logout.addEventListener('click', () => {
    logOut();
})


let searchAuthors = []

searchBtn.addEventListener('click', () => {
    searchAuthors = authors.filter(x => x.name?.toLowerCase().includes(search.value.toLowerCase()))
    tbody.innerHTML = ''
    if (searchAuthors.length !== 0) {
        searchAuthors.forEach(element => {
            createTable(element)
        })
    }
})

authors.forEach(element => {
    if (element.birthday != undefined) {
        createTable(element);
    }
});
let view = document.querySelectorAll(".btn-primary")
let edit = document.querySelectorAll(".btn-warning")
let deletebtn = document.querySelectorAll(".btn-danger")

deletebtn.forEach(element => {
    element.addEventListener("click", function (e) {
        e.preventDefault()
        authors.forEach(ele => {
            if (element.getAttribute("mydelete") == ele.id) {
                let res = deleteAuthor(ele.id)
                if (res) {
                    element.parentElement.parentElement.parentElement.remove()
                    alert("Author deleted")
                } else {
                    alert("We cant deleted this book")
                }
            }
        })
    })
});

view.forEach(element => {
    element.addEventListener("click", function () {
        authors.forEach(ele => {
            if (element.getAttribute("myview") == ele.id) {
                sessionStorage.setItem("View", JSON.stringify(ele))
            }
        })
    })
});

edit.forEach(element => {
    element.addEventListener("click", function () {
        authors.forEach(ele => {
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
            <td>${element.name}</td>
            <td>${element.surname}</td>
            <td>${element.birthday}</td>
            <td>
                <a href="./authorview.html"><button class="btn btn-primary" myview = "${element.id}">View</button></a>
                <a href="./authoredit.html"><button class="btn btn-warning" myedit = "${element.id}">Edit</button></a>
                <a href="#"><button class="btn btn-danger" mydelete = "${element.id}">Delete
            </td>
        </tr>`
}
// }








