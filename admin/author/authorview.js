import Auth from "../../utils/auth/Auth.js";
import getAuthorByID from "../../utils/authorController/getAuthorByID.js";
import logOut from "../../utils/auth/logOut.js";

await Auth()

const logout = document.querySelector('.logout')

logout.addEventListener('click', () => {
    logOut();
})
let author = JSON.parse(sessionStorage.getItem("View"))

const authorData = await getAuthorByID(author.id)
let name = document.querySelector(".name")
let surname = document.querySelector(".surname")
let birthday = document.querySelector(".birthday")


name.innerText = `Name: ${authorData.name}`
surname.innerText = `Surname: ${authorData.surname}`
birthday.innerText = `Birthday: ${authorData.birthday}`


