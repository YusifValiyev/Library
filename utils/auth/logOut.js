function logOut() {
    sessionStorage.removeItem('user')
    window.location.reload()
}

export default logOut;