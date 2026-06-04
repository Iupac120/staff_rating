const {DataTypes} = require("sequelize");
const sequelize = require("../config/database.js");
const Employee = sequelize.define("Employee",{
    EmployeeId:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDVA,
        primaryKey:true
    },
    employeeCode:{
        type:DataTypes.STRING,
        unique: true
    },
    firstName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    lastName:{
        type:DataTypes.STRING,
        allowNull:false
    },
    phoneNumer:DataTypes.STRING,
    gender:{
        type:DataTypes.ENUM(
            "MALE",
            "FEMALE"
        )
    },
    designation:DataTypes.STRING,
    employmentDate:DataTypes.DATEONLY,
    status:{
        type:DataTypes.ENUM(
            "ACTIVE",
            "RETIRED",
            "TERMINATED",
            "SUSPENDED"
        ),
        defaultValue:"ACTIVE"
    }
},
{
        tableName:"employees",
        paranoid:true
    }
)

module.exports = Employee