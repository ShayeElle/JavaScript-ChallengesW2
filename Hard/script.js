const tomHeight = 9;
const tomMass = 8;
const jerryHeight = 10;
const jerryMass = 45;

// BMI Calculations
const tomBMI = (tomMass / (tomHeight * tomHeight)) * 703;
const jerryBMI = (jerryMass / (jerryHeight * jerryHeight)) * 703;

// Boolean variable
const isTomBMIHigher = tomBMI > jerryBMI;

console.log(`Is Tom's BMI higher than Jerry's? ${isTomBMIHigher}`);

