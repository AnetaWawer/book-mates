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

    let refreshPromise = null;
    const clearPromise = () => refreshPromise = null;

    axios.interceptors.response.use(
        response => response,
        async (error) => {
            const prevRequest = error?.config;
            console.log("PrevRequest: ", prevRequest);
            if (error?.response?.status === 403 && !prevRequest?.sent &&
                !prevRequest.url.endsWith("api/authentication/refresh") &&
                !prevRequest.url.endsWith("api/authentication/login")) {
                prevRequest.sent = true;
                let refreshSuccessful;
                if (!refreshPromise) {
                    console.log("Trying to refresh token");
                    refreshPromise = refresh().finally(clearPromise);
                }
                refreshSuccessful = await refreshPromise;

                if (refreshSuccessful) {
                    prevRequest.headers['Authorization'] = `Bearer ${localStorage.getItem("user")}`;
                    console.log("Resending request with new token");
                    return await axios.request(prevRequest);
                } else {
                    localStorage.removeItem('user');
                    localStorage.removeItem('refresh');
                }
            }
            return Promise.reject(error);
        }
    )
}

const refresh = async () => {
    const refreshToken = localStorage.getItem("refresh");
    if (refreshToken == null) {
        console.log("No refresh token found");
        return false;
    }


    const response = await axios.post("http://localhost:8080/api/authentication/refresh", refreshToken, {
        headers: {'Content-Type': 'text/plain'}
    });

    if (response.data.token) {
        localStorage.setItem("user", response.data.token);
        localStorage.setItem("refresh", response.data.refreshToken);
        console.log("Successfully refreshed token data");
        return true;
    } else {
        console.log("no token in response");
        return false;
    }
}




