const courseInfo = {
  id: 451,
  name: "Introduction to JavaScript",
};

const assignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50,
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150,
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500,
    },
  ],
};

const learnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47,
    },
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150,
    },
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400,
    },
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39,
    },
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140,
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

  // Process submissions and calculate scores
  const learnerDataMap = new Map();

  learnerSubmissions.forEach((submission) => {
    const assignment = assignmentGroup.assignments.find(
      (a) => a.id === submission.assignment_id
    );
    if (!assignment) {
      throw new Error("Invalid submission: Assignment not found.");
    }

    if (new Date(assignment.due_at) > new Date()) {
      // Exclude assignments not yet due
      return;
    }

    const isLateSubmission =
      new Date(submission.submission.submitted_at) >
      new Date(assignment.due_at);
    const latePenalty = isLateSubmission ? 0.9 : 1.0;
    const scorePercentage =
      (submission.submission.score / assignment.points_possible) *
      100 *
      latePenalty;

    if (!learnerDataMap.has(submission.learner_id)) {
      learnerDataMap.set(submission.learner_id, {
        id: submission.learner_id,
        totalScore: 0,
        totalPossiblePoints: 0,
        assignments: {},
      });
    }

    const learnerData = learnerDataMap.get(submission.learner_id);
    learnerData.assignments[assignment.id] = scorePercentage;
    learnerData.totalScore +=
      submission.submission.score * assignmentGroup.group_weight;
    learnerData.totalPossiblePoints +=
      assignment.points_possible * assignmentGroup.group_weight;
  });

  // Calculate weighted average and format results
  return Array.from(learnerDataMap.values()).map((learner) => {
    const weightedAvg =
      (learner.totalScore / learner.totalPossiblePoints) * 100;
    return {
      id: learner.id,
      avg: parseFloat(weightedAvg.toFixed(2)),
      ...learner.assignments,
    };
  });
}

// Usage
const result = getLearnerData(courseInfo, assignmentGroup, learnerSubmissions);
console.log(result);
