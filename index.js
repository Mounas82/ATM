import inquirer from "inquirer";
let Qs = await inquirer.prompt([
    {
        name: "UserId",
        type: "string",
        message: "What is your User name?"
    },
    {
        name: "Pin",
        type: "number",
        message: "What is your Pin code",
        when(answers) {
            return answers.UserId;
        },
    },
    {
        name: "Balance",
        type: "number",
        message: "Your current balance",
        when(answers) {
            return answers.Pin;
        },
    },
    {
        name: "AccountType",
        type: "list",
        choices: ["Current", "Saving", "Default"],
        message: "What is your account type",
        when(answers) {
            return answers.Balance;
        }
    },
    {
        name: "Amount",
        type: "number",
        message: "Enter amount to withdraw"
    }
]);
const { Pin, Balance, AccountType, UserId, Amount } = Qs;
let Balance01 = 100000;
if (UserId && Pin && Balance01) {
    console.log(Balance01);
    if (Balance01 > Amount) {
        let CurrentAmount = Balance01 - Amount;
        console.log(`Congratulations your transaction is successfull /n your current balance is ${Balance01}`);
    }
}
console.log(Qs.Pin);
