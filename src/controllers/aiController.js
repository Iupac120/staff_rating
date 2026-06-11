const aiService =
require(
"../services/aiservices"
);

exports.analyzePerformance =
async (
req,
res,
next
) => {
try {

const result =
await aiService.analyzePerformance(
req.body
);

res.status(200).json({
success: true,
data: result,
});

} catch (error) {
next(error);
}
};

exports.generateAppraisal =
async (
req,
res,
next
) => {
try {

const result =
await aiService.generateAppraisal(
req.body
);

res.status(200).json({
success: true,
data: result,
});

} catch (error) {
next(error);
}
}

exports.recommendTraining =
async (
req,
res,
next
) => {
try {

const result =
await aiService.recommendTraining(
req.body
)

res.status(200).json({
success: true,
data: result,
})

} catch (error) {
next(error);
}
}