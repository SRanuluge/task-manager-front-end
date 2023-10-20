import axios from "axios";

// const baseURL = process.env.REACT_PUBLIC_API_BASE_URL;
const baseURL = "http://localhost:3000/";
if (!baseURL) {
  console.warn(`REACT_PUBLIC_API_BASE_URL has not defined!`);
}

const API = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// const setAuthHeader = (token) => {
//   API.defaults.headers.common.Authorization = `Bearer ${token}`;
// };

const apiBuilder = {
  API,
  // setAuthHeader,
};
export default apiBuilder;
