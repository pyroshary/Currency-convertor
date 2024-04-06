#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
const currencyRates = {
    PKR: 1,
    USD: 120.55,
    DENAR: 80.75,
    INR: 3,
    POUND: 350,
};
let userAnswers = await inquirer.prompt([
    {
        name: "from",
        message: "Enter Your Currency You Want To Exchange",
        type: "list",
        choices: ["PKR", "USD", "DENAR", "INR", "POUND"],
    },
    {
        name: "to",
        message: "Enter Your Currency With Whom You Want To Exchange",
        type: "list",
        choices: ["PKR", "USD", "DENAR", "INR", "POUND"],
    },
    {
        name: "amount",
        message: "Enter your amount",
        type: "number",
    },
]);
let fromAmount = currencyRates[userAnswers.to];
let toAmount = currencyRates[userAnswers.from];
let amount = userAnswers.amount;
let baseAmount = amount / fromAmount; //converted to base currency
let convertedAmount = baseAmount * toAmount;
console.log(chalk.yellow("YOUR CURRENCY CURRENT EXCHANGE VALUE IS:", toAmount));
console.log(chalk.blue("CURRENCY CURRENT VALUE WITH WHOM YOU WANT TO EXCHANGE IS:", fromAmount));
console.log(chalk.greenBright("THIS IS YOUR FINAL AMOUNT AFTER EXCHANGE ", convertedAmount));
