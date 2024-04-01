const form = document.querySelector('form')
const loginBtn = document.querySelector('button')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (form.email.value.length !== 0 && form.password.value.length !== 0) {
        if (form.email.value === 'user@gmail.com' && form.password.value === 'user') {
            sessionStorage.setItem('user', JSON.stringify('user'))
            window.location.href = '/'
        } else if (form.email.value === 'admin@gmail.com' && form.password.value === 'admin') {
            sessionStorage.setItem('user', JSON.stringify('admin'))
            window.location.href = '/admin'
        }
    }
})