import axios from "axios";

const baseURL = "https://bsg-api.onrender.com/api/users"

export const getUsers = async () => {
    return await axios.get(baseURL);
}