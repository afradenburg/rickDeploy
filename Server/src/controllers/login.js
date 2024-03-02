const { User } = require("../db");

async function login  (req, res)  {
  const { correo, password } = req.query;
  const userFound =await User.findOne({
    where: {
      correo: correo
    }
  });
  
  console.log(userFound);
  if (userFound.password === password) return res.status(200).json({ access: true });

  return res.status(404).json({ access: false });
};

module.exports = {
  login,
};
