const monthNumber = prompt("Enter a number between 1 and 12:");

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

if (monthNumber < 1 || monthNumber > 12) {
    console.log("Invalid input. Please enter a number between 1 and 12.");
  } else {
    console.log(`${months[monthNumber - 1]}`);
  }

// const num = 3;
// getMonth(num);
