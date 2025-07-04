console.log("\n--- 2. Registration and Login System ---");

let registeredUsername = prompt("Register your Username: ");
let registeredPassword = prompt("Register your passcode: ");
let confirmPassword = prompt("Re-enter your passcode: ");

if (registeredPassword === confirmPassword) {
  alert("Congratulations, you have successfully registered!");

  let loginUsername = prompt("Username: ");

  if (loginUsername === registeredUsername) {
    let loginPassword = prompt("Password: ");

    if (loginPassword === registeredPassword) {
      alert("Welcome to DSA, " + loginUsername);
    } else {
      alert("Incorrect Password, Re-run the code!");
    }
  } else {
    alert("Incorrect Username, Re-run the code!");
  }
} else {
  alert("Password does not Match, Re-run the code!");
}
