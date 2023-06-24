import axios from "axios";
import {API_BASE_URL_CLIENST} from "../configs/AppConfig";

const instance = axios.create({
    baseURL: API_BASE_URL_CLIENST,
    withCredentials: true,

})

const ClientsService = {}

ClientsService.getClients = ()=>instance.get('/users')

export default ClientsService;