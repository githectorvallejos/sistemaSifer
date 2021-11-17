import axios from "axios";

let API_URL = process.env.REACT_APP_HOST
  ? process.env.REACT_APP_HOST
  : `http://localhost`;
let API_PORT = process.env.REACT_APP_PORT ? process.env.REACT_APP_PORT : `8000`;

let baseURL = "";
// let baseURL = process.env.REACT_APP_HOST ? process.env.REACT_APP_HOST : ${API_URL}:${API_PORT}

const usuario = JSON.parse(localStorage.getItem("session"));

const token = usuario?.user_token;

if (process.env.NODE_ENV === "development") {
  //baseURL = `${API_URL}:${API_PORT}`;
  baseURL = ``;
} else baseURL = process.env.REACT_APP_HOST;

export default axios.create({
  baseURL,
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});
