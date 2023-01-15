const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function getMonth(num) {
  if (num < 1 || num > 12) {
    console.log("Invalid input. Please enter a number between 1 and 12.");
  } else {
    console.log(`${months[num - 1]}`);
  }
}

const num = 3;
getMonth(num);
