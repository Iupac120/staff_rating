const {DataTypes} = require('sequelize');
const sequelize = require("../config/database.js");
const KPI = sequelize.define("Kpi",{
    kpiId:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDVA,
        primaryKey:true
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    description:DataTypes.TEXT,
    weight:{
        type:DataTypes.STRING,
        allowNull:false
    }
},
{
        tableName:"kpis"
    }
)

module.exports = KPI