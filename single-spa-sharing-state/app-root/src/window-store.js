
window.macro = {};

window.macro.state = {
    state: 'default string value',
    isAuthenticated: false,
    logout() {
        window.macro.isAuthenticated = false;
        window.macro.state.state = "User logged out";
        console.log("STORE LOGOUT EVENT ------ ");
        window.dispatchEvent(new CustomEvent('logoutEvent'));
    },
    login() {
        window.macro.isAuthenticated = true;
        window.macro.state.state = "User logged in";
        console.log("STORE LOGIN EVENT ++++++ ");
        window.dispatchEvent(new CustomEvent('loginEvent'));
    }
}