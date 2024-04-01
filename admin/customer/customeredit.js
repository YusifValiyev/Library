import Auth from "../../utils/auth/Auth.js";
import getCustomerByID from "../../utils/customerController/getCustomerByID.js";
import logOut from "../../utils/auth/logOut.js";
import updateCustomer from "../../utils/customerController/updateCustomer.js";
await Auth()

let edit = JSON.parse(sessionStorage.getItem("Edit"))
const editData = await getCustomerByID(edit.id)

const form = document.querySelector('form')
let name = document.querySelector(".name")
let surname = document.querySelector(".surname")
let number = document.querySelector(".number")
let fin = document.querySelector(".fin")
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
    number: form.number.value,
    fin: form.fin.value,
}
function getDatas() {
    form.namee.value = editData.name;
    form.surname.value = editData.surname;
    form.number.value = editData.number;
    form.fin.value = editData.fin;
}
form.addEventListener('input', function () {
    updateDatas()
})

function updateDatas() {
    form.namee.value = name.value;
    form.surname.value = surname.value;
    form.number.value = number.value;
    form.fin.value = fin.value;

    data = {
        id: editData.id,
        name: form.namee.value,
        surname: form.surname.value,
        number: form.number.value,
        fin: form.fin.value,
    }
    console.log(data);

}

editbtn.addEventListener("click", async function (e) {
    e.preventDefault()
    let res = await updateCustomer(editData.id, data)
    if (res) {
        window.location.href = '/admin/customer'
    } else {
        alert("Can not update")
    }

})
