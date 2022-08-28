require("dotenv").config();

const { addUser } = require("../services/user");
const { destroyUser } = require("../services/user")
const { sendSucessResponse, sendFailureResponse } = require("../utils/response");



const signup = async (req, res) => {

    try {

        const { email, password, firstName, lastname } = req.body
        const { createUser, message, name, statusCode, error } = await addUser({ email, password, firstName, lastname })

        return sendSucessResponse({
            res,
            data: createUser,
            message,
            name,
            statusCode,
            error

        })


    } catch (error) {

        return sendFailureResponse({
            res,
            error,
            statusCode,
            message

        })
    }

}


const deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await destroyUser({ id })
        return res.status(201).send(user)

    } catch (e) {
        return res.send(e)
    }


}


module.exports = {
    signup,
    deleteUser

}


