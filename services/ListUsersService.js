import axios from "axios";

const baseURL = "https://urchin-app-rtfrx.ondigitalocean.app/api/users"

export const getUsers = async () => {
    return await axios.get(baseURL);
}
