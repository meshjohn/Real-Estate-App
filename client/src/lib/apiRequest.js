import axios from "axios";

const apiRequest = axios.create({
    baseURL: "https://automatic-rotary-phone-pvqjjjj7pxq2r46p-8800.app.github.dev/api",
    withCredentials: true,
});

export default apiRequest;