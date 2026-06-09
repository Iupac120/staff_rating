const {
  Attendance,
  Task,
  Evaluation,
  Training,
  WorkReport,
  PerformanceScore,
} = require("../models");

exports.calculateMonthlyScore =
  async (
    employeeId,
    month,
    year
  ) => {
    const attendance =
      await Attendance.count({
        where: {
          employeeId,
        },
      });

    const completedTasks =
      await Task.count({
        where: {
          employeeId,
          status:
            "COMPLETED",
        },
      });

    const reports =
      await WorkReport.count({
        where: {
          employeeId,
        },
      });

    const evaluations =
      await Evaluation.findAll({
        where: {
          employeeId,
        },
      });

    const avgEvaluation =
      evaluations.length
        ? evaluations.reduce(
            (
              total,
              item
            ) =>
              total +
              item.teamwork +
              item.communication +
              item.problemSolving,
            0
          ) /
          evaluations.length
        : 0;

    const attendanceScore =
      Math.min(
        attendance,
        22
      ) * 4.5;

    const taskScore =
      completedTasks * 5;

    const reportScore =
      reports * 5;

    const evaluationScore =
      avgEvaluation;

    const trainingScore = 10;

    const totalScore =
      attendanceScore *
        0.15 +
      taskScore * 0.3 +
      reportScore * 0.2 +
      evaluationScore *
        0.2 +
      trainingScore *
        0.15;

    return PerformanceScore.create(
      {
        employeeId,
        month,
        year,
        attendanceScore,
        taskScore,
        reportScore,
        evaluationScore,
        trainingScore,
        totalScore,
      }
    );
  };