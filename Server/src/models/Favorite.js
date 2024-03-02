const { DataTypes } = require('sequelize')

module.exports = (sequelize) => {
    sequelize.define('favorite', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        species: {
            type: DataTypes.STRING,
            allowNull: false
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
        },
        origin: {
            type: DataTypes.STRING,
        },
        location: {
            type: DataTypes.STRING,
        }
    })
}