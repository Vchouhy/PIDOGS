const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    minheight: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    minweight: {
      type: DataTypes.STRING,
      allowNull: false
    },
    maxheight: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    maxweight: {
      type: DataTypes.STRING,
      allowNull: false
    },
    life_span:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    createdInDataBase: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    // temperament:{
    //   type: DataTypes.STRING,
    //   allowNull: true,
    // }
  });
};


/*
[ ] Raza con las siguientes propiedades:
ID *
Nombre *
Altura *
Peso *
Años de vida

*/