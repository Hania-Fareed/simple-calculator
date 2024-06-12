#! /usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  {
    message: "welcome to HANIA FAREED's calculator",
    type: "string",
    name: "welcome",
  },
  { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter second number", type: "number", name: "secondNumber" },
  {
    message: "select one of the opperators to perform action",
    type: "list",
    name: "operator",
    choices: ["addition", "subtraction", "multiplication", "division"],
  },
]);

// conditional statements

if (answer.operator === "addition") {
  console.log(answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "subtraction") {
  console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "multiplication") {
  console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operator === "division") {
  console.log(answer.firstNumber / answer.secondNumber);
} else {
  console.log("please select valid opperator");
}
