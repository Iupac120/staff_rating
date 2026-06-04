const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Training = sequelize.define(
  "Training",
  {
    TrainId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },

    title: DataTypes.STRING,

    provider: DataTypes.STRING,

    completionDate: DataTypes.DATEONLY,

    certificateUrl: DataTypes.STRING
  },
  {
    tableName: "trainings"
  }
);

module.exports = Training