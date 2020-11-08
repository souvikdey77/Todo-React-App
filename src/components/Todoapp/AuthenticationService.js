class AuthenticationService {

    registerSuccessfulLogin(username, password) {
        sessionStorage.setItem('authenticateduser', username);
    }

    logout() {
        sessionStorage.removeItem('authenticateduser');
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticateduser');
        if (user === null) return false
        return true
    }
}

export default new AuthenticationService()