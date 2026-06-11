const {DataTypes} = require("sequelize");
const sequelize = require("../config/database")
const Task = sequelize.define("Task",{
    taskId:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        primaryKey:true
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    description:DataTypes.TEXT,
    priority:{
        type:DataTypes.ENUM(
            "LOW",
            "MEDIUM",
            "HIGH"
        ),
        defaultValue:"MEDIUM"
    },
    status:{
        type:DataTypes.ENUM(
            "IN_PROGRESS",
            "COMPLETED",
            "PENDING"
        ),
        defaultValue:"PENDING"
    },
    dueDate:DataTypes.DATE,
    completedDate:DataTypes.DATE,
},
{
        tableName:"tasks"
    }
)

module.exports = Task