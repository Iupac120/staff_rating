const openai =
require("../config/openai");

class AIService {

async analyzePerformance(
employeeData
) {

const prompt = `Analyze this employee performance:${JSON.stringify(employeeData)}Provide strengths,weaknesses,and recommendations.`;

const response =await openai.chat.completions.create({
model: "gpt-4o-mini",
messages: [{role: "user",content:prompt,},],
}
);
return response.choices[0].message.content;}
async generateAppraisal(employeeData) {
const prompt = `
Generate a professional annual appraisal comment.${JSON.stringify(
employeeData
)}
`;

const response =
await openai.chat.completions.create(
{
model: "gpt-4o-mini",
messages: [
{
role: "user",
content:
prompt,
},
],
}
)
return response.choices[0].message.content}
async recommendTraining(employeeData
) {

const prompt = `Recommend training courses for:
${JSON.stringify(
employeeData
)}
`

const response =
await openai.chat.completions.create(
{
model: "gpt-4o-mini",

messages: [
{
role: "user",
content:
prompt,
},
],
}
);

return response.choices[0]
.message.content;
}
}


aiServices = new AIService()
module.exports = aiServices