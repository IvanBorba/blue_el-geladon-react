import axios from "axios";

const api = axios.create({ baseURL: "https://elgeladon-api.herokuapp.com" });

export default api;
