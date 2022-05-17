import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/",
});
// https://horadorango-capstone-g5.herokuapp.com/
export default api;
