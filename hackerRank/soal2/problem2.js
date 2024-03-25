function gradingStudents(grades) {
  for (let i = 0; i < grades.length; i++) {
    const grade = grades[i];

    if (grade < 38) {
      continue;
    }

    const nextMultipleOf5 = Math.ceil(grade / 5) * 5;

    if (nextMultipleOf5 - grade < 3) {
      grades[i] = nextMultipleOf5;
    }
  }
  return grades;
}

const grades = [73, 67, 38, 33];

console.log(gradingStudents(grades));
