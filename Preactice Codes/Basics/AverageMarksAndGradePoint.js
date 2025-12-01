let bangla = 75;
let english = 85;
let math = 90;
let science = 80;
let social = 70;

let averageMarks = (bangla + english + math + science + social) / 5;
console.log("Average Marks: " + averageMarks);

if (averageMarks >= 80) {
    console.log("Grade: A+");
} else if (averageMarks >= 70) {
    console.log("Grade: A");
} else if (averageMarks >= 60) {
    console.log("Grade: A-");
} else if (averageMarks >= 50) {
    console.log("Grade: B");
} else if (averageMarks >= 40) {
    console.log("Grade: C");
} else if (averageMarks >= 33) {
    console.log("Grade: D");
} else {
    console.log("Grade: Fail");
}