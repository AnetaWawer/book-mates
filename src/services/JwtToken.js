import jwtDecode from "jwt-decode";

export default function checkIfUserLogged() {
    const token = localStorage.getItem('user');
    if (token) {
        const decoded = jwtDecode(token);
        if (decoded.exp < Date.now() / 1000) {
            console.log("Token expired");
            localStorage.removeItem('user');
            return false;
        } else {
            return true;
        }
    } else {
        return false;
    }
}