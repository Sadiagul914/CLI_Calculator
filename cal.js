import inquirer from "inquirer";
let calc = await inquirer.prompt([
    {
        name: "FirstNumber", message: "Enter First Number", type: "number",
    }
]);
let calc1 = await inquirer.prompt([
    {
        name: "secondNumber", message: "Enter second Number", type: "number",
    }
]);
let calc3 = await inquirer.prompt([
    {
        name: "operator", message: "Enter operator", type: "list", choices: ["addition", "subtraction", "division", "multiplication", "power"],
    },
]);
function add(x, y) {
    return x + y;
}
function subtract(x, y) {
    return x - y;
}
function div(x, y) {
    return x / y;
}
function mult(x, y) {
    return x * y;
}
function pow(x, y) {
    return x ^ y;
}
if (calc3.operator === "addition")
    console.log("addition", add(calc.FirstNumber, calc1.secondNumber));
else if (calc3.operator === "subtraction")
    console.log("subtraction", subtract(calc.FirstNumber, calc1.secondNumber));
else if (calc3.operator === "division")
    console.log("division", div(calc.FirstNumber, calc1.secondNumber));
else if (calc3.operator === "multiplication")
    console.log("multiplcation", mult(calc.FirstNumber, calc1.secondNumber));
else if (calc3.operator === "power")
    console.log("power", pow(calc.FirstNumber, calc1.secondNumber));
else
    console.log("you have entered wrong operation");
