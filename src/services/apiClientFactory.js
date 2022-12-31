import UnauthorizedError from "../utils/errors/unauthorizedError";
import BadRequestError from "../utils/errors/badRequestError";
import NotFoundError from "../utils/errors/NotFoundError";

const apiClientFactory = (client) => {

    const handleError = (responseStatus) => {
        switch (responseStatus.status) {
            case 400:
                throw new BadRequestError();
            case 401:
                throw new UnauthorizedError();
            case 404:
                throw new NotFoundError();
            default:
                throw new Error(responseStatus);
        }
    }
    const doPost = async ({url = '', data = null}) => {
        try {
            const response = await client.post(url, data,);
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
    const doGet = async ({url = ''}) => {
        try {
            const response = await client.get(url);
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
