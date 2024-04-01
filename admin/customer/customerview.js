import Auth from "../../utils/auth/Auth.js";
import getAuthorByID from "../../utils/authorController/getAuthorByID.js";
import logOut from "../../utils/auth/logOut.js";

await Auth()

const logout = document.querySelector('.logout')

logout.addEventListener('click', () => {
    logOut();
})
let customer = JSON.parse(sessionStorage.getItem("View"))

const customerData = await getAuthorByID(customer.id)
let name = document.querySelector(".name")
let surname = document.querySelector(".surname")
let number = document.querySelector(".number")
let fin = document.querySelector(".fin")

name.innerText = `Name: ${customerData.name}`
surname.innerText = `Surname: ${customerData.surname}`
number.innerText = `Number: ${customerData.number}`
fin.innerText = `Fin: ${customerData.fin}`


