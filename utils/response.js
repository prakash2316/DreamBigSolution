const sendSucessResponse = ({ res, data, statusCode, message }) => {

    const response = {
        data,
        message
    }

    return res.status(statusCode).json(response)
}



const sendFailureResponse = ({ res, errors, statusCode, message }) => {

    const response = {
        data,
        message,
        errors
    }

    return res.status(statusCode).json(response)
}


module.exports = {
    sendFailureResponse,
    sendSucessResponse
}