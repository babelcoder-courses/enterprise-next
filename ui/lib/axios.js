import axios from "axios";

const customInstance = axios.create({
  baseURL: process.env.API_URL,
});

export default customInstance;
