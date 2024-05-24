const courseInfo = {
  id: 1,
  name: "Introduction to JavaScript",
};

const assignmentGroup = {
  id: 1,
  name: "Week 1 Assignments",
  course_id: 1,
  assignments: [
    {
      id: 1,
      name: "Assignment 1",
      points_possible: 10,
      due_at: "2023-03-15T23:59:59Z",
    },
  ],
};

const learnerSubmissions = [
  {
    learner_id: 1,
    assignment_id: 1,
    submitted_at: "2023-03-16T12:34:56Z",
    submission: {
      score: 8,
    },
  },
];

function getLearnerData(courseInfo, assignmentGroup, learnerSubmissions) {
  // Validate data
  if (assignmentGroup.course_id !== courseInfo.id) {
    throw new Error(
      "Invalid input: AssignmentGroup does not belong to the course."
    );
  }

  // Process submissions
  const processedSubmissions = processSubmissions(
    learnerSubmissions,
    assignmentGroup.assignments
  );

  // Calculate weighted average
  const weightedAverage = calculateWeightedAverage(
    processedSubmissions,
    assignmentGroup
  );

  // Format result
  return formatResult(weightedAverage, courseInfo);
}

function processSubmissions(submissions, assignments) {
  // Process submissions to calculate scores
  return submissions.map((submission) => {
    const assignment = assignments.find(
      (a) => a.id === submission.assignment_id
    );
    if (!assignment) {
      throw new Error("Invalid submission: Assignment not found.");
    }
    const latePenalty = isLate(submission.submitted_at, assignment.due_at)
      ? 0.9
      : 1.0;
    const score =
      (submission.submission.score / assignment.points_possible) * latePenalty;
    return { assignment_id: assignment.id, score };
  });
}

function isLate(submittedAt, dueAt) {
  return new Date(submittedAt) > new Date(dueAt);
}

function calculateWeightedAverage(processedSubmissions, assignmentGroup) {
  const totalPointsPossible = assignmentGroup.assignments.reduce(
    (total, assignment) => total + assignment.points_possible,
    0
  );

  const weightedSum = processedSubmissions.reduce((acc, submission) => {
    const assignment = assignmentGroup.assignments.find(
      (a) => a.id === submission.assignment_id
    );
    return (
      acc +
      (submission.score * assignment.points_possible) / totalPointsPossible
    );
  }, 0);

  return weightedSum;
}

function formatResult(weightedAverage, courseInfo) {
  return {
    course_id: courseInfo.id,
    course_name: courseInfo.name,
    weighted_average: parseFloat(weightedAverage.toFixed(2)),
  };
}

// Usage
const result = getLearnerData(courseInfo, assignmentGroup, learnerSubmissions);
console.log(result);
