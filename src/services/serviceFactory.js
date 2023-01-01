import authService from "./authService";
import courseService from "./courseService";

export const serviceFactory = (apiClient) => {
    return {
        authService: authService(apiClient),
        courseService: courseService(apiClient)
    }
}