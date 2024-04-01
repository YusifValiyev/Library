async function Auth() {
    let user = JSON.parse(sessionStorage.getItem('user'))

    if (user == 'user') {
        console.log(window.location.pathname);
        if (window.location.pathname.includes('admin')) {
            window.location.href = '/'
        }
    }
    else if (user == 'admin') {
    }
    else if (user == null) {
        window.location.href = '/login'
    }
}

export default Auth;