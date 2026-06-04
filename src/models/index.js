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
Employee.belongTo(Department)
Department.hasMany(KPI)
KPI.belongTo(Department)
//user-employee
User.hasOne(Employee)
Employee.belongTo(User)
Employee.belongTo(Employee,{
    as:supervisor,
    foreignKey:supervisorId
})
Employee.hasMany(Employee,{
    as:subordinates,
    foreignKey:supervisorId
})

//kpi target
Employee.hasMany(KPITarget)
KPITarget.belongTo(Employee)

KPI.hasMany(KPITarget)
KPITarget.belongTo(KPI)

//task
Employee.hasMany(Task)
Task.belongTo(Employee)

//Attendance
Employee.hasMany(Attendance)
Attendance.belongTo(Employee)

//Work report
Employee.hasMany(WorkReport)
WorkReport.belongTo(Employee)

//Evaluation
Employee.hasMany(Evaluation)
Evaluation.belongTo(Employee)
User.hasMany(Evaluation,{
    foreignKey:evaluatorId
})
Evaluation.belongTo(User,{
    foreignKey:EvaluateId
})

//peer review
Employee.hasMany(PeerReview)
PeerReview.belongTo(Employee)

User.hasMany(PeerReview,{
    foreignKey:reviewId
})
PeerReview.belongTo(User,{
    foreignKey:reviewId
})


//Training
Employee.hasMany(Training)
Training.belongTo(Employee)

//monthly performance
Employee.hasMany(PerformanceScore)
PerformanceScore.belongTo(Employee)

//Appraisal 
Employee.hasMany(AnnualAppraisal)
AnnualAppraisal.belongTo(Employee)

//Notification
User.hasMany(Notification)
Notification.belongTo(User)

module.exports = {
    annual_appraisals,
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