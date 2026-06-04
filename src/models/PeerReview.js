const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const PeerReview = sequelize.define(
  "PeerReview",
  {
    pReviewId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },

    teamwork: DataTypes.INTEGER,

    collaboration: DataTypes.INTEGER,

    communication: DataTypes.INTEGER,

    comments: DataTypes.TEXT
  },
  {
    tableName: "peer_reviews"
  }
);

module.exports = PeerReview