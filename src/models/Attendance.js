const {DataTypes} = require("sequelize")
const sequelize =  require("../config/database")
const Attendance =  sequelize.define("Attendance",{
    attendId:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        primaryKey:true
    },
    attendanceDate:{
        type:DataTypes.DATEONLY,
        allowNull:false
    },
    checkIn:DataTypes.DATE,
    checkout:DataTypes.DATE,
    status:{
        type:DataTypes.ENUM(
            "PRESENT",
            "ABSENT",
            "LEAVE",
            "LATE"
        ),
        defaultValue:"PRESENT"
    }
},
{
    tableName:"attendances"
})

module.exports = Attendance