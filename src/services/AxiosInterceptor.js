import axios from 'axios';
import checkIfUserLogged from "./JwtToken";

export default function setupAxiosInterceptors() {
    axios.interceptors.request.use(
        config => {
            if (checkIfUserLogged()) {
                config.headers.Authorization = `Bearer ${localStorage.getItem('user')}`;
            }
            return config;
        },
        error => Promise.reject(error)
    );
}



