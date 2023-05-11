import axios from 'axios';
import checkIfUserLogged from "./JwtToken";

export default function setupAxiosInterceptors() {
    axios.interceptors.request.use(
        config => {
            if (!config.url.endsWith("api/authentication/refresh") && !config.url.endsWith("api/authentication/login") && checkIfUserLogged()) {
                config.headers.Authorization = `Bearer ${localStorage.getItem('user')}`;
            }
            return config;
        },
        error => Promise.reject(error)
    );
}



