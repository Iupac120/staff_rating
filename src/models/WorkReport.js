const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const WorkReport = sequelize.define(
  "WorkReport",
  {
    WrId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },

    reportDate: DataTypes.DATEONLY,

    activities: DataTypes.TEXT,

    achievements: DataTypes.TEXT,

    challenges: DataTypes.TEXT,

    hoursWorked: DataTypes.INTEGER
  },
  {
    tableName: "work_reports"
  }
)

module.exports = WorkReport