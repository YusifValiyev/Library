import updateBook from "../../utils/bookController/updateBook.js";
import Auth from "../../utils/auth/Auth.js";
import getBookByID from "../../utils/bookController/getBookByID.js";
import logOut from "../../utils/auth/logOut.js";
await Auth()

let edit = JSON.parse(sessionStorage.getItem("Edit"))
const editData = await getBookByID(edit.id)

const form = document.querySelector('form')
let title = document.querySelector(".title")
let count = document.querySelector(".count")
let price = document.querySelector(".price")
let genre = document.querySelector(".genre")
let editbtn = document.querySelector(".edit")

const logout = document.querySelector('.logout')

logout.addEventListener('click', () => {
    logOut();
})

getDatas()
let data = {
    id: editData.id,
    title: form.title.value,
    count: form.count.valueAsNumber,
    price: Number(form.price.value),
    genre: form.genre.value
}
function getDatas() {
    form.title.value = editData.title;
    form.count.value = editData.count;
    form.price.value = editData.price;
    form.genre.value = editData.genre;
}
form.addEventListener('input', function () {
    updateDatas()
})

function updateDatas() {
    form.title.value = title.value;
    form.count.value = count.value;
    form.price.value = price.value;
    form.genre.value = genre.value;

    data = {
        id: edit.id,
        title: form.title.value,
        count: form.count.value,
        price: form.price.value,
        genre: form.genre.value
    }
    console.log(data);

}

editbtn.addEventListener("click", async function (e) {
    e.preventDefault()
    let res = await updateBook(editData.id, data)
    if (res) {
        window.location.href = '/admin/books'
    } else {
        alert("Can not update")
    }

})
