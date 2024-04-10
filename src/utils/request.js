import axios from "axios";
import token from "./token.js";

const request = axios.create({
  baseURL: import.meta.env.SERVER_URL,
});

request.interceptors.request.use((req) => {
  if (typeof window !== "undefined") {
    req.headers.Authorization = `Bearer ${token.token}`;
  }
  return req;
});

request.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (error) => {
    throw error.response?.data.message || error.toString();
  }
);

export default request;
