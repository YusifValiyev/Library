import Auth from "../../utils/auth/Auth.js";
import deleteCustomer from "../../utils/authorController/deleteAuthor.js";
import getCustomer from "../../utils/customerController/getCustomer.js";
import logOut from "../../utils/auth/logOut.js";

await Auth();
const customers = await getCustomer();

let tbody = document.querySelector("tbody")
const search = document.querySelector('.search')
const searchBtn = document.querySelector('.searchBtn')
// const refreshBtn = document.querySelector('.refresh')
// const genre = document.querySelector('select')
const logout = document.querySelector('.logout')

logout.addEventListener('click', () => {
    logOut();
})


let searchCustomers = []

searchBtn.addEventListener('click', () => {
    searchCustomers = customers.filter(x => x.price == search.value)
    tbody.innerHTML = ''
    if (searchCustomers.length !== 0) {
        searchCustomers.forEach(element => {
            createTable(element)
        })
    }
})

// genre.addEventListener('change', (e) => {
//     searchCustomers = customers.filter(x => x.genre == e.target.value)
//     tbody.innerHTML = ''
//     if (searchCustomers.length !== 0) {
//         searchCustomers.forEach(element => {
//             createTable(element)
//         })
//     }
// })

// refreshBtn.addEventListener('click', () => {
//     window.location.reload()
// })
customers.forEach(element => {
    if (element.fin != undefined) {
        createTable(element);
    }
});
let view = document.querySelectorAll(".btn-primary")
let edit = document.querySelectorAll(".btn-warning")
let deletebtn = document.querySelectorAll(".btn-danger")

deletebtn.forEach(element => {
    element.addEventListener("click", function (e) {
        e.preventDefault()
        customers.forEach(ele => {
            if (element.getAttribute("mydelete") == ele.id) {
                let res = deleteCustomer(ele.id)
                if (res) {
                    element.parentElement.parentElement.parentElement.remove()
                    alert("Customer deleted")
                } else {
                    alert("We cant deleted this book")
                }
            }
        })
    })
});

view.forEach(element => {
    element.addEventListener("click", function () {
        customers.forEach(ele => {
            if (element.getAttribute("myview") == ele.id) {
                sessionStorage.setItem("View", JSON.stringify(ele))
            }
        })
    })
});

edit.forEach(element => {
    element.addEventListener("click", function () {
        customers.forEach(ele => {
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
            <td>${element.number}</td>
            <td>${element.fin}</td>
            <td>
                <a href="./customerview.html"><button class="btn btn-primary" myview = "${element.id}">View</button></a>
                <a href="./customeredit.html"><button class="btn btn-warning" myedit = "${element.id}">Edit</button></a>
                <a href="#"><button class="btn btn-danger" mydelete = "${element.id}">Delete
            </td>
        </tr>`
}
// }








