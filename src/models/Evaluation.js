const { DataTypes } = require("sequelize")
const sequelize = require("../config/database")

const Evaluation = sequelize.define(
  "Evaluation",
  {
    EvaluateId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },

    teamwork: DataTypes.INTEGER,
    communication: DataTypes.INTEGER,
    leadership: DataTypes.INTEGER,
    professionalism: DataTypes.INTEGER,
    problemSolving: DataTypes.INTEGER,

    comments: DataTypes.TEXT
  },
  {
    tableName: "evaluations"
  }
);

module.exports = Evaluation