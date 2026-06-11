const pdfDocument = require("pdfkit")
const excelDoc = require("exceljs")
const {Employee,AnnualAppraisal,PerformanceScore} = require("../models");

class reportService {
    async generatePdf(employeeId,res){
        const employee = await Employee.findByPk(employeeId,{
            include:[AnnualAppraisal]
        })
        const doc = new pdfDocument()

        res.setHeader("Content-Type","application/pdf")
        res.setHeader("Content-Disposition",`attachment;filename:appraisal-${employeeId}.pdf`)
        doc.pipe(res)
        doc.fontSize(20).text(
            "annual performance appraisal",
            {
            align:"center"
            }
        )
        doc.moveDown()
        doc.text(
            `employee:${employee.firstName} ${employee.lastName}`
        )
        doc.text(
            `employee Code:${employee.employeeCode}`
        )
        doc.moveDown()
        employee.AnnualAppraisals.forEach(
            (appraisal) =>{
                doc.text(
                `year:${appraisal.year}`
                )
                doc.text(
                `Final score:${appraisal.finalScore}`
                )
                doc.text(
                `rating:${appraisal.rating}`
                )
                doc.moveDown()
            }
        )
        doc.end()
    }

    async generateExcel(){
    const workbook = new excelDoc.Workbook()
    const sheet =
      workbook.addWorksheet(
        "Performance"
      );

    sheet.columns = [
      {
        header: "Employee",
        key: "employee",
        width: 30,
      },
      {
        header: "Score",
        key: "score",
        width: 15,
      },
      {
        header: "Rating",
        key: "rating",
        width: 20,
      },
    ];

    const scores =
      await PerformanceScore.findAll({
        include: [Employee],
      });

    scores.forEach((score) => {
      sheet.addRow({
        employee: `${score.Employee.firstName} ${score.Employee.lastName}`,
        score: score.totalScore,
        rating: score.rating,
      });
    });

    return workbook;
  }

}
