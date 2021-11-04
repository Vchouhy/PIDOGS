
const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>{
    sequelize.define('temperament', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        id:{
            primaryKey: true,
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
        }
    })
}

/*[ ] Temperamento con las siguientes propiedades:
ID
Nombre*/