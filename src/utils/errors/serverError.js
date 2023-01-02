class ServerError extends Error {
    constructor(message = 'Internal Server Error') {
        super(message);
        this.message = message
    }
}

export default ServerError;