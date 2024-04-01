import Auth from "../../utils/auth/Auth.js";
import getAuthorByID from "../../utils/authorController/getAuthorByID.js";
import logOut from "../../utils/auth/logOut.js";
import updateAuthor from "../../utils/authorController/updateAuthor.js";
await Auth()

let edit = JSON.parse(sessionStorage.getItem("Edit"))
const editData = await getAuthorByID(edit.id)

const form = document.querySelector('form')
let name = document.querySelector(".name")
let surname = document.querySelector(".surname")
let birthday = document.querySelector(".birthday")
let editbtn = document.querySelector(".edit")

const logout = document.querySelector('.logout')

logout.addEventListener('click', () => {
    logOut();
})

getDatas()
let data = {
    id: editData.id,
    name: form.namee.value,
    surname: form.surname.value,
    birthday: form.birthday.value,
}
function getDatas() {
    form.namee.value = editData.name;
    form.surname.value = editData.surname;
    form.birthday.value = editData.birthday;
}
form.addEventListener('input', function () {
    updateDatas()
})

function updateDatas() {
    form.namee.value = name.value;
    form.surname.value = surname.value;
    form.birthday.value = birthday.value;

    data = {
        id: editData.id,
        name: form.namee.value,
        surname: form.surname.value,
        birthday: form.birthday.value,
    }
    console.log(data);

}

editbtn.addEventListener("click", async function (e) {
    e.preventDefault()
    let res = await updateAuthor(editData.id, data)
    if (res) {
        window.location.href = '/admin/author'
    } else {
        alert("Can not update")
    }

})
