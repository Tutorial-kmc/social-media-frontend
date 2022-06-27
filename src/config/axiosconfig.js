import axios from "axios";
import { server } from "./keys";

export const axiosInstance = axios.create({
  baseURL: server,
});
