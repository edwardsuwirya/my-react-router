import authService from "./authService";

export const serviceFactory = (apiClient) => {
    return {
        authService: authService(apiClient),
    }
}