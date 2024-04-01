import Auth from "../../utils/Auth.js";
import logOut from "../../utils/logOut.js";
import postAuthor from "../../utils/postAuthor.js";
await Auth()

const form = document.querySelector('form');
const logout = document.querySelector('.logout')

logout.addEventListener('click', () => {
    logOut();
})
form.addEventListener('submit', async (e) => {
    e.preventDefault()
    let data = {
        name: form.name.value,
        surname: form.surname.value,
        birthday: form.birthday.value
    }

    console.log(data);
    let res = await postAuthor(data)
    console.log(res);
    if (res) {
        window.location.href = '/admin/author'
    } else {
        alert("Can not added")
    }
})