exports.calculateAnnualScore =
async (
employeeId,
year
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

return (
scores.reduce(
(a,b)=>
a+b.totalScore,
0
) / scores.length
);
};