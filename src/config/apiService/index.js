import axios from "axios";
import apiClientFactory from "../../services/apiClientFactory";
import {serviceFactory} from "../../services";

export const apiConfig = () => {
    const clientInstance = axios.create({
        baseURL: process.env.REACT_APP_BASE_URL,
    });

    const apiClient = apiClientFactory(clientInstance);
    return serviceFactory(apiClient);
}