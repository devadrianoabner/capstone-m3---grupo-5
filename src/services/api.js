import axios from "axios";

const api = axios.create({
  baseURL: "https://horadorango-capstone-g5.herokuapp.com",
});

export default api;
