import axios from "axios";
import {useNavigate} from "react-router-dom";

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {

    login(data) {
        return axios
            .post("http://localhost:8080/api/authentication/login", {
                email: data.get('email'),
                password: data.get('password')
            })
            .then(response => {
                if (response.data.token) {
                    localStorage.setItem("user", response.data.token);
                } else {
                    console.log("no token in respone");
                }
            })
            .catch((error) => {
                if (error.response) {
                    console.log(error.response);
                    alert("niepoprawne dane logowania");
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log("Error ", error.message());
                }
            });
    }

    logout() {
        localStorage.removeItem("user");
    }

    register(data) {
        return axios
            .post("http://localhost:8080/api/authentication/register", {
                nickname: data.get('username'),
                email: data.get('email'),
                password: data.get('password')
            })
            .then(response => {
                if (response.data.token) {
                    localStorage.setItem("user", response.data.token);
                } else {
                    console.log("no token in respone");
                }
            })
            .catch((error) => {
                if (error.response) {
                    console.log(error.response);
                    alert("nie można zarejestrować konta, niepoprawne dane");
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log("Error ", error.message());
                }
            });
    }

    authHeader() {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user && user.accessToken) {
            return { Authorization: "Bearer " + user.accessToken };
        } else {
            return {};
        }
    }
}

export default new AuthService();
