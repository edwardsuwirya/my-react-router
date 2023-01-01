import axios from "axios";
import apiClientFactory from "../../utils/apiClient/apiClientFactory";
import {serviceFactory} from "../../services";
import {authorizationHeaderInterceptor} from "../../utils/apiClient/interceptor";

export const apiConfig = (localStorage) => {
    const clientInstance = axios.create({
        baseURL: process.env.REACT_APP_BASE_URL,
    });

    clientInstance.interceptors.request.use(authorizationHeaderInterceptor(localStorage), null);

    const apiClient = apiClientFactory(clientInstance);
    return serviceFactory(apiClient);
}