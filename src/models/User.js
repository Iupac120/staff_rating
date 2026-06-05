const {DataTypes} = require("sequelize");
const sequelize = require("../config/database.js");
const User = sequelize.define("User",{
    userId:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        primaryKey:true
    },
    fullName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    resetPasswordToken:{
        type:DataTypes.STRING
    },
    resetPasswordExpires:{
        type:DataTypes.DATE
    },
    role:{
        type:DataTypes.ENUM(
            "SUPER_ADMIN",
            "HR_MANAGER",
            "MANAGER",
            "EMPLOYEE"
        ),
        defaultValue:"EMPLOYEE"
    },
    status:{
        type:DataTypes.ENUM(
            "ACTIVE",
            "INACTIVE"
        ),
        defaultValue:"ACTIVE"
    }
},
    {
        tableName:"users",
        paranoid:true
    }
);

module.exports = User