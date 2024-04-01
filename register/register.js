import Register from "../utils/register"

const form = document.querySelector('form')

form.addEventListener('submit', async function (e) {
    e.preventDefault()
    let sendedData = {
        firstName: form.firstname.value,
        lastName: form.lastname.value,
        email: form.email.value,
        password: form.password.value
    }
    await Register(sendedData)
})