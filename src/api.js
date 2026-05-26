
import axios from "axios";

const api = axios.create({
baseURL: "https://chat-production-c642.up.railway.app",
withCredentials: true,
});

export default api;