class NotImplementedError extends Error {
    constructor(message = "") {
        super(message);
        this.message = message + " has not been implemented yet"
    }
}

export default NotImplementedError;