import Auth from "../../utils/auth/Auth.js";
import logOut from "../../utils/auth/logOut.js";
import postCustomer from '../../utils/customerController/postCustomer.js'
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
        fin: form.fin.value,
        number: `${form.number.value}`
    }

    console.log(data);
    let res = await postCustomer(data)
    console.log(res);
    if (res) {
        window.location.href = '/admin/customer'
    } else {
        alert("Can not added")
    }
})