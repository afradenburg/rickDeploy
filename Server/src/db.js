require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DATABASE_URL = ""
} = process.env;
const sequelize = new Sequelize(DATABASE_URL, {
  logging: false
});

try {
  sequelize.authenticate();
  console.log('Conexión a la base de datos establecida correctamente');
} catch (error) {
  console.error('Error al conectar a la base de datos:', error);
}

const basename = path.basename(__filename);
const modelDefiners = [];
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

try {
  modelDefiners.forEach(model => model(sequelize));
  console.log("Modelos creados correctamente");
} catch (error) {
  console.error('Error al crear los modelos:', error);
}

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);
const { User, Favorite } = sequelize.models;

try {
  User.belongsToMany(Favorite, { through: 'FavoriteUser' });
  Favorite.belongsToMany(User, { through: 'FavoriteUser' });
  console.log("Relaciones establecidas correctamente");
} catch (error) {
  console.error('Error al establecer las relaciones:', error);
}

module.exports = {
  ...sequelize.models,
  conn: sequelize
};