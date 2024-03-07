const postUserController = require('../controllers/postUserController')
async function postUser(req, res) {
    try {
        const user  = await postUserController(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).send("este correo ya esta registrado");
    }
}
module.exports = postUser