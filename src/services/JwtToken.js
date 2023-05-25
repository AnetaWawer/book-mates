export default function checkIfUserLogged() {
    const token = localStorage.getItem('user');
    return !!token;
}