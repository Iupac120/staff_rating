const notificationService =require("../services/notificationService")

const {Notification,} = require("../models");

exports.sendEmail =async (req,res,next) => {
try {
const {email,subject,message,} = req.body;

await notificationService.sendEmail(
email,
subject,
message
);

res.status(200).json({
success: true,
message:
"Email sent successfully",
});

} catch (error) {
next(error);
}
};

exports.getMyNotifications =
async (
req,
res,
next
) => {
try {

const notifications =
await Notification.findAll(
{
where: {
userId:
req.user.id,
},
order: [
[
"createdAt",
"DESC",
],
],
}
);

res.status(200).json({
success: true,
data: notifications,
});

} catch (error) {
next(error);
}
}