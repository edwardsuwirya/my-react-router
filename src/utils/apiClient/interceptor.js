import {SERVICE} from "../../constants";

export const authorizationHeaderInterceptor = (localStorage) => (config) => {
    if (config.url !== SERVICE.LOGIN) {
        const value = localStorage.get('token');
        config.headers.Authorization = `Bearer ${value}`;
    }
    return config;
}