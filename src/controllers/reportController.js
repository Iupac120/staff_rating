const reportService = require(
  "../services/reportServices"
);

exports.downloadPDF =
  async (
    req,
    res,
    next
  ) => {
    try {
      await reportService.generatePDF(
        req.params.employeeId,
        res
      );
    } catch (error) {
      next(error);
    }
  };

exports.downloadExcel =
  async (
    req,
    res,
    next
  ) => {
    try {
      const workbook =
        await reportService.generateExcel();

      res.setHeader(
        "Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      );

      res.setHeader(
        "Content-Disposition",
        "attachment; filename=performance.xlsx"
      )

      await workbook.xlsx.write(
        res
      );

      res.end();
    } catch (error) {
      next(error);
    }
  }