const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('user', {
        correo: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}