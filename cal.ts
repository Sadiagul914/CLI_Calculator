import inquirer from "inquirer";
let calc = await inquirer.prompt([
    {
        name: "FirstNumber",message :"Enter First Number",type: "number",}
])
let calc1 = await inquirer.prompt([
    {
        name: "secondNumber",message :"Enter second Number",type: "number",}
])
let calc3 = await inquirer.prompt([
    {
        name: "operator",message :"Enter operator",type: "list", choices: ["addition" ,"subtraction","division","multiplication","power"], },
])

 function add ( x : number, y : number): number {  
    return x + y ;
}
function subtract ( x : number, y : number): number {   
    return x - y ;
}
function div ( x : number, y : number): number {  
    return x / y ;
}
function mult ( x : number, y : number): number {
    return x * y ;
}
function pow ( x : number, y : number): number {
    return x ^ y ;
}
if(calc3.operator==="addition")
        console.log("addition of two numbers is ",add(calc.FirstNumber, calc1.secondNumber) );

else if(calc3.operator==="subtraction")
        console.log("subtraction of two numbers is ",subtract(calc.FirstNumber, calc1.secondNumber) );

else if(calc3.operator==="division")
        console.log("division of two numbers is ",div(calc.FirstNumber, calc1.secondNumber) );

else if(calc3.operator==="multiplication")
        console.log("multiplcation of two numbers is ",mult(calc.FirstNumber, calc1.secondNumber) );

else if(calc3.operator==="power")
        console.log("power",pow(calc.FirstNumber, calc1.secondNumber) );

else 
        console.log("you have entered wrong operation" );