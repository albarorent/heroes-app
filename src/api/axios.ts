import axios from "axios";

const TOKEN = "25044455451867388";

const instance = axios.create({
    baseURL: `https://www.superheroapi.com/api.php/${TOKEN}`,
})


export default instance;