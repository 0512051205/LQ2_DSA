console.log("\n--- 3. User Input, Conditional, Loop Program ---");

let name = prompt("Enter your name: ");
let address = prompt("Enter your address: ");
let ageInput = parseInt(prompt("Enter your age: "));
let role = prompt("Enter your class role (Officer, Student, Teacher): ");
let course = prompt("Enter your course (BSCS, BSM, BAEL): ");

let iterations = Math.floor(ageInput / 4);

switch (course) {
  case "BSCS":
    if (role === "Officer") {
      for (let i = 0; i < iterations; i++) {
        console.log("BSCS Officer: " + name);
      }
    } else if (role === "Student") {
      for (let i = 0; i < iterations; i++) {
        console.log("BSCS Student: " + name);
      }
    } else if (role === "Teacher") {
      for (let i = 0; i < iterations; i++) {
        console.log("BSCS Teacher: " + name);
      }
    } else {
      console.log("BSCS Unknown Role");
    }
    break;

  case "BSM":
    if (role === "Officer") {
      for (let i = 0; i < iterations; i++) {
        console.log("BSM Officer: " + name);
      }
    } else if (role === "Student") {
      for (let i = 0; i < iterations; i++) {
        console.log("BSM Student: " + name);
      }
    } else if (role === "Teacher") {
      for (let i = 0; i < iterations; i++) {
        console.log("BSM Teacher: " + name);
      }
    } else {
      console.log("BSM Unknown Role");
    }
    break;

  case "BAEL":
    if (role === "Officer") {
      for (let i = 0; i < iterations; i++) {
        console.log("BAEL Officer: " + name);
      }
    } else if (role === "Student") {
      for (let i = 0; i < iterations; i++) {
        console.log("BAEL Student: " + name);
      }
    } else if (role === "Teacher") {
      for (let i = 0; i < iterations; i++) {
        console.log("BAEL Teacher: " + name);
      }
    } else {
      console.log("BAEL Unknown Role");
    }
    break;

  default:
    console.log("Course not recognized.");
}
