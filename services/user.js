
const db = require('../models');
const { users: User, roles, user_roles } = db
const jwt = require('jsonwebtoken');


const addUser = async ({ email, password, firstName, lastname }) => {
    const user = await User.findOne({ where: { email } });

    if (user) {
        //   return res.status(500).send("user already exists")
        const error = new Error('User already exists')
        error.statusCode = 400
        throw error.message
    }

    const createUser = await User.create({
        email, password, firstName, lastname, lastloginAt: Date.now()
    })

    const fetchedRole = await roles.findOne({
        where: {
            name: 'admin'
        }
    })

    console.log(createUser.dataValues.id)
    console.log(fetchedRole.dataValues.id)
    await user_roles.create({
        user_id: parseInt(createUser.dataValues.id),
        role_id: parseInt(fetchedRole.dataValues.id)
    })
    return {
        name: "user",
        statusCode: 200,
        message: "signup successfully",
        createUser,
        error: []
    }
}
const destroyUser = async ({ id }) => {
    const user = await User.destroy({
        where: {
            id
        }
        ,
        //include:[user_roles]
        include: [{
            model: user_roles,
            attributes: { exclude: ['user_id', 'role_id'] },

            include: [roles]
        }]
    });
    return user
}
module.exports = {
    addUser,
    destroyUser
}