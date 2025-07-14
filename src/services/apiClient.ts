import axios from "axios";
import {API_BASE_URL, APP_ENV} from "../constants/appConfig.ts";
import { logout } from "./authService";

const referral_api = axios.create({
  baseURL: API_BASE_URL[APP_ENV],
  withCredentials: true,
  headers: {
    Accept: "application/json",
    "content-type": "application/json",
  },
  validateStatus: function () {
    return true;
  },
});

referral_api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("Network/API Error:", error);
    
    if (error.response?.status === 401) logout();

    return Promise.reject(error);
  }
);


export default referral_api;
