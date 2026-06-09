exports.calculateQuarterlyScore =
async (
employeeId,
year,
quarter
) => {

const scores =
await PerformanceScore.findAll(
{
where:{
employeeId,
year
}
}
);

const average =
scores.reduce(
(a,b)=>
a+b.totalScore,
0
) / scores.length;

return average;
};