const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const AnnualAppraisal = sequelize.define(
  "AnnualAppraisal",
  {
    AppraisalId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },

    year: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    finalScore: DataTypes.FLOAT,

    rating: DataTypes.STRING,

    managerComment: DataTypes.TEXT,

    hrComment: DataTypes.TEXT,

    aiComment: DataTypes.TEXT
  },
  {
    tableName: "annual_appraisals"
  }
);

module.exports = AnnualAppraisal