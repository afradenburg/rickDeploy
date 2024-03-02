const { login } = require("../controlers/login");
const { getCharById } = require("../controlers/getCharById");
const { postFav, deleteFav } = require("../controlers/handleFavorites");
const { User } = require('../db');
const  postUser  = require("../handlers/postUser")
const router = require("express").Router();

router.get("/character/:id", (req, res) => {
  getCharById(req, res);
});
router.get("/login", (req, res) => {
  login(req, res);
});
router.post("/fav", (req, res) => {
  postFav(req, res);
});
//cualquiera de las dos formas esta bien,
//igualmente recibira los req, res por parametros
router.delete("/fav/:id", (req, res) => {
  deleteFav(req, res);
});

router.get("/user",
 async function getUser(req, res){
  try {
    const userDb = await User.findAll();
    res.send(userDb);
    return userDb
  } catch (error) {
    throw new Error(error.message);

  }
  
  }
)

router.post("/newuser", postUser)

module.exports = router;
