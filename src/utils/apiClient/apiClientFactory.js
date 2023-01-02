import UnauthorizedError from "../errors/unauthorizedError";
import BadRequestError from "../errors/badRequestError";
import NotFoundError from "../errors/NotFoundError";
import ServerError from "../errors/serverError";

const apiClientFactory = (client) => {

    const handleError = (responseStatus) => {
        switch (responseStatus.status) {
            case 400:
                throw new BadRequestError();
            case 401:
                throw new UnauthorizedError();
            case 404:
                throw new NotFoundError();
            case 500:
                throw new ServerError();
            case 504:
                throw new ServerError("Gateway Timeout");
            default:
                throw new ServerError("Unknown error");
        }
    }
    const doPost = async ({url = '', data = null, config = null}) => {
        try {
            const response = await client.post(url, data, config);
            return response.data;
        } catch (e) {
            if (e.response) {
                handleError(e.response);
            } else if (e.request) {
                console.log(e.request)
            } else {
                console.log('Error', e.message);
            }
            throw new Error(e);
        }
    }
    const doGet = async ({url = '', config = null}) => {
        try {
            const response = await client.get(url, config);
            return response.data;
        } catch (e) {
            if (e.response) {
                handleError(e.response);
            } else if (e.request) {
                console.log(e.request)
            } else {
                console.log('Error', e.message);
            }
            throw new Error(e);
        }
    }

    return {
        doPost, doGet
    }
}
export default apiClientFactory;
