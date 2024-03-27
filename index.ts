#! /usr/bin/env node
import inquirer from "inquirer";

const answer = await inquirer.prompt([
    { message: "Enter Your First Number", type: "number", name: "FirstNumber" },
    { message: "Enter Your Second Number", type: "number", name: "SecondNumber" },
    {
        message: "Select one of the operator to perform action",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Divide"],
    },
]);

//conditional statement
if (answer.operator === "Addition") {
    console.log(answer.FirstNumber + answer.SecondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.FirstNumber - answer.SecondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.FirstNumber * answer.SecondNumber);
}
else if (answer.operator === "Divide") {
    console.log(answer.FirstNumber / answer.SecondNumber);
}
else {
    console.log("please select valid operator");
}
