const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const PerformanceScore = sequelize.define(
  "PerformanceScore",
  {
    PscoreId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },

    month: DataTypes.INTEGER,

    year: DataTypes.INTEGER,

    attendanceScore: DataTypes.FLOAT,

    taskScore: DataTypes.FLOAT,

    reportScore: DataTypes.FLOAT,

    evaluationScore: DataTypes.FLOAT,

    trainingScore: DataTypes.FLOAT,

    totalScore: DataTypes.FLOAT,

    rating: DataTypes.STRING
  },
  {
    tableName: "performance_scores"
  }
);

module.exports = PerformanceScore