import axios from "axios";

const api = {};

api.login = token => axios.post("/api/account/login", { token });

api.resumeSession = sessionKey => {
    return axios.post("/api/account/login", { sessionKey });
};

api.logout = () => axios.get("/api/account/logout");

api.setUserInfo = ({ age, height, weight }) =>
    axios.post("/api/setUserInfo", { age, weight, height });

export default api;
