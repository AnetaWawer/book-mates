import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
    login(username, password) {
        return axios
            .post("localhost:8080/api/authentication/login", {
                username,
                password
            })
            .then(response => {
                if (response.data.accessToken) {
                    localStorage.setItem("user", JSON.stringify(response.data));
                }
                return response.data;
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
                navigate("/account");
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
}

export default new AuthService();
