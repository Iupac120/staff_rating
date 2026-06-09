exports.rankEmployees =
async (year) => {

const rankings =
await PerformanceScore.findAll(
{
where:{ year },

order:[
["totalScore","DESC"]
]
}
);

return rankings;
};