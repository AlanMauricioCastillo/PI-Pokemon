const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Pokemon",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      Nombre: {
        type: DataTypes.STRING, // results[index].name === nombre
        allowNull: false,
        unique: true,
        set(value) {
          this.setDataValue(`Nombre`, value.toLowerCase());
        },
      },
      Vida: {
        type: DataTypes.INTEGER, // stats[0].base_stats === numero de puntos de vida
      },
      Fuerza: {
        type: DataTypes.INTEGER, //// stats[1].base_stats === numero de fuerza o ataque
      },
      Imagen: {
        type: DataTypes.STRING,
      },
      Defensa: {
        type: DataTypes.INTEGER, //// stats[2].base_stats === numero de defensa
      },
      Velocidad: {
        type: DataTypes.INTEGER, //// stats[5].base_stats === numero de velocidad
      },
      Altura: {
        type: DataTypes.INTEGER, //// height === altura
      },
      Peso: {
        type: DataTypes.INTEGER, //// weight === peso
      },
    },
    {
      timestamps: false,
      createdAt: false,
    }
  );
};
