import axios from "axios";

const customInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export default customInstance;
