module.exports = {
    send: (statusCode = 200, res, message, data, error = null) => {
        let response = {
            message,
            data,
            error
        }

        return res.status(statusCode).json(response);
    }
}