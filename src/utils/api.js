import axios from "axios";

const api = {};

api.login = token => axios.post("/api/account/login", { token });

api.resumeSession = sessionKey => {
    return axios.post("/api/account/login", { sessionKey });
};

api.logout = () => axios.get("/api/account/logout");

api.setUserInfo = ({ age, height, weight, longestDistance, bestMileTime }) =>
    axios.post("/api/user/info", {
        age,
        weight,
        height,
        longestDistance,
        bestMileTime,
    });

api.getPlan = ({ currentWeekly, goalDistance, weeks }) =>
    axios.put(`/api/user/plan`, { currentWeekly, goalDistance, weeks });

export default api;
