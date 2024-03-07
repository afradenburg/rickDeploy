const { User } = require("../db")

async function postUserController(user){
    try {
        const { correo, password } = user
        const existUser = await User.findOne({
            where: {
                correo: correo
            }
        })
        if(existUser){
         throw new Error('El correo ya esta registrado')   
        }
        const newUser = await  User.create({
            correo: correo,
            password: password
        })
        return newUser
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports= postUserController;