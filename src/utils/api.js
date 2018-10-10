import axios from "axios";

const api = {};

api.login = token => axios.post("/api/account/login", { token });

api.resumeSession = sessionKey => {
    return axios.post("/api/account/login", { sessionKey });
};

api.logout = () => axios.get("/api/account/logout");

export default api;
