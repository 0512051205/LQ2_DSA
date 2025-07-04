console.log("\n--- 1.1 Conditional Statement to Ternary ---");
let age = 20;
let genAverage = 85;

(age >= 18 && genAverage >= 83)
  ? console.log("You may enter College, under BSCS Program")
  : console.log("Both conditions may have not met and not allowed to enroll");

let subject = "DSA";
let grade = 85;

(subject === "DSA" && grade >= 80)
  ? console.log("You may enroll Application Development")
  : (subject === "Math101" && grade <= 80)
    ? console.log("You may enroll Calculus")
    : console.log("You have to enroll DSA and pass to enroll AD and Math101 and pass to enroll Calculus");

console.log("\n--- 1.2 Ternary to Regular Conditional ---");

if (age >= 18) {
  console.log("You may now Register as a Voter for Elections 2025");
} else {
  console.log("You are too young register as a voter for Elections 2025");
}

if (genAverage >= 85) {
  console.log("You may enroll in all Course Programs");
} else if (genAverage < 85 && genAverage > 82) {
  console.log("You may enroll in any Course Program except in CTE, SCJE, CHS");
} else {
  console.log("You may enroll in any Course Program except CTE, SCJE, CHS, CCS");
}

console.log("\n--- 1.3 For Loop to While Loop ---");
let fname = "Jose Cruz";
let i = 0;

while (i < fname.length) {
  let c = 2 + i;
  let nLengthCounterTwo = fname.length - c;
  console.log(fname);
  console.log("Iterations Name was Printed: " + i);
  i++;
}
