import authService from "./authService";

export const serviceFactory = () => {
    return {
        authService: authService(),
    }
}