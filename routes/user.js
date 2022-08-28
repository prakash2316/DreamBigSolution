const authController = require('../controllers/auth');
const { validate, validateUser } = require('../validation/valid');
const authenticate = require('../Middlewares/middlewares.js');


module.exports = (router) => {

    router.post("/create", validateUser, validate, authController.signup);
    router.delete("/delete/:id", authenticate.authenticate, authController.deleteUser);

}
