import axios from "axios";
import token from "./token.js";

const request = axios.create({
  baseURL: "http://localhost:3000",
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

// request.interceptors.request.use(
//   function (config) {
//     let token =
//       window.localStorage.getItem("miniGarden") &&
//       JSON.parse(window.localStorage.getItem("miniGarden"))?.token?.slice(1, -1);
//     config.headers = { authorization: token ? `Bearer ${token}` : null };
//     return config;
//   },
//   function (error) {
//     return Promise.reject(error);
//   }
// );
// // Add a RESPONSE interceptor
// request.interceptors.response.use(
//   function (response) {
//     return response.data;
//   },
//   function (error) {
//     return Promise.reject(error.response);
//   }
// );

export default request;
