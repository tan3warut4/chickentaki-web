import axios from "axios";

const axiosClient = axios.create({
    baseURL: "https://7ecc-171-6-135-167.ngrok-free.app/",
    timeout: 10000,
    headers: {
        "ngrok-skip-browser-warning": "69420",
    },
})


export default axiosClient;