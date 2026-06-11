const {DataTypes} = require("sequelize");
const sequelize = require("../config/database.js");
const KPITarget = sequelize.define("KPITarget",{
    KPITargetId:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDVA,
        primaryKey:true
    },
    targetValue:{
        type:DataTypes.FLOAT,
        allowNull:false
    },
    achievedValue:{
        type:DataTypes.FLOAT,
        allowNull:false
    },
    year:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
},
{
        tableName:"kpiTargets"
    }
)

module.exports = KPITarget