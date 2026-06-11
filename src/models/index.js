const AnnualAppraisal = require("./AnnualAppraisal")
const Attendance = require("./Attendance")
const Department = require("./Department")
const Employee = require("./Employee")
const Evaluation = require("./Evaluation")
const KPI = require("./KPI")
const KPITarget = require("./KPITarget")
const Notification = require("./Notification")
const PeerReview = require("./PeerReview")
const PerformanceScore = require("./PerformanceScore")
const Task = require("./Task")
const Training = require("./Training")
const User = require("./User")
const WorkReport = require("./WorkReport")

//department
Department.hasMany(Employee);
Employee.belongsTo(Department)
Department.hasMany(KPI)
KPI.belongsTo(Department)
//user-employee
User.hasOne(Employee)
Employee.belongsTo(User)


//kpi target
Employee.hasMany(KPITarget)
KPITarget.belongsTo(Employee)

KPI.hasMany(KPITarget)
KPITarget.belongsTo(KPI)

//task
Employee.hasMany(Task)
Task.belongsTo(Employee)

//Attendance
Employee.hasMany(Attendance)
Attendance.belongsTo(Employee)

//Work report
Employee.hasMany(WorkReport)
WorkReport.belongsTo(Employee)

//Evaluation
Employee.hasMany(Evaluation)
Evaluation.belongsTo(Employee)
User.hasMany(Evaluation,{
    as:"evaluationsGiven",
    foreignKey:"evaluatorId"
})
Evaluation.belongsTo(User,{
    as:"evaluator",
    foreignKey:"evaluatorId"
})

//peer review
Employee.hasMany(PeerReview)
PeerReview.belongsTo(Employee)

User.hasMany(PeerReview,{
    foreignKey:"reviewId"
})
PeerReview.belongsTo(User,{
    foreignKey:"reviewId"
})


//Training
Employee.hasMany(Training)
Training.belongsTo(Employee)

//monthly performance
Employee.hasMany(PerformanceScore)
PerformanceScore.belongsTo(Employee)

//Appraisal 
Employee.hasMany(AnnualAppraisal)
AnnualAppraisal.belongsTo(Employee)

//Notification
User.hasMany(Notification)
Notification.belongsTo(User)

module.exports = {
    AnnualAppraisal,
    Attendance,
    Department,
    Employee,
    Evaluation,
    KPI,
    KPITarget,
    Notification,
    PeerReview,
    PerformanceScore,
    Task,
    Training,
    User,
    WorkReport
}