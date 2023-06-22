import axios from "axios";

export const apiClient = axios.create({
    baseURL: `${process.env.API_HOST}:${process.env.API_PORT}/api`
})