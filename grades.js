// Start with array of random scores in your JavaScript

var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];



// Loop over an array of student grades (values from 50-100) and outputs how many of each grades there are.

// A score of 50-60 is an F
// A score of 61-70 is a D
// A score of 71-80 is a C
// A score of 81-90 is a B
// A score of 91-100 is an A
var gradeA = [];
var gradeB = [];
var gradeC = [];
var gradeD = [];
var gradeF = [];
var maxGrade = 0;
var minGrade = 100;

for (var i = 0; i < scores.length; i++) {
  if (scores[i] > 90) {
    gradeA.push(scores[i]);
  }
    else if (scores[i] < 91 && scores[i] > 80) {
      gradeB.push(scores[i]);
    }
    else if (scores[i] < 81 && scores[i] > 70) {
      gradeC.push(scores[i]);
    }
    else if (scores[i] < 71 && scores[i] > 60) {
      gradeD.push(scores[i]);
    }
    else if (scores[i] < 61 && scores[i] > 49) {
      gradeF.push(scores[i]);
    }
    if (scores[i] > maxGrade) {
      maxGrade = scores[i];
    }
    if (scores[i] < minGrade) {
      minGrade = scores[i];
    }
}

// Use console.log to output the following criteria:

// How many of each grade?

function printGrade(gradeVar, text) {
  console.log(text, gradeVar.length);
}

printGrade(gradeA, "Number of A's: ");
printGrade(gradeB, "Number of B's: ");
printGrade(gradeC, "Number of C's: ");
printGrade(gradeD, "Number of D's: ");
printGrade(gradeF, "Number of F's: ");

// What is the lowest grade?

console.log("The lowest grade is ", minGrade);


// What is the highest grade?

console.log("The highest grade is ", maxGrade);