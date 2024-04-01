import Auth from "../../utils/Auth.js";
import logOut from "../../utils/logOut.js";
import postBook from "../../utils/postBook.js";
await Auth()

const form = document.querySelector('form');
const logout = document.querySelector('.logout')

logout.addEventListener('click', () => {
    logOut();
})

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    let data = {
        title: form.title.value,
        count: form.count.valueAsNumber,
        price: Number(form.price.value),
        genre: form.genre.value,
    }
    let res = await postBook(data)
    console.log(res);
    if (res) {
        window.location.href = '/admin/books'
    } else {
        alert("Can not added")
    }
})