const jwt = require('jsonwebtoken')
const authenticate = (req, res, next) => {

    const token = req.headers.Authorization
    if (token == null) return res.sendStatus(401)
    const decode = jwt.verify(token, process.env.JWT_SIGNIN_KEY, (err, user) => {
        if (err) return res.send(403)
        req.user = user
        next();
    })


}
module.exports = {
    authenticate
}