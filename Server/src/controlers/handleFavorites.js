let myFavorites = [];

const postFav = (req, res) => {
  const character = req.body;
  const characterRepetido = myFavorites.find((fav) => fav.id === character.id);
  if (!characterRepetido) {
    myFavorites.push(character);
    return res.json(myFavorites);
  }
  return res.status(404).send("personaje repetido");
};

const deleteFav = (req, res) => {
  const { id } = req.params;
  myFavorites = myFavorites.filter((data) => data.id !== Number(id));
  return res.json(myFavorites);
};

module.exports = {
  postFav,
  deleteFav,
};
