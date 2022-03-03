import axios from "axios";

//Configuración básica por defecto de Axios
export default axios.create({
    baseURL: 'https://api.chucknorris.io',
    responseType: "json",
    timeout: 8000
})