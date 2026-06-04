const {DataTypes} = require("sequelize");
const sequelize = require("../config/database");
const Department = sequelize.define("Department",{
    deptId:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDVA,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    description:{
        type:DataTypes.STRING
    }
},
{
        tableName:"departments",
        paranoid:true
    }
);

module.exports = Department