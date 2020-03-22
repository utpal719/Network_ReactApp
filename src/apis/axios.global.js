import Axios from "axios";
import config from "../config";

let axios = Axios.create({
  baseURL: config.API_URL
});

axios.interceptors.request.use(request => {
  let token = localStorage.getItem("ntToken");
  if (token) {
    request.headers["Authorization"] = `Bearer ${token}`;
  }
  return request;
});

export default axios;
