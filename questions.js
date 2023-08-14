import inquirer from "inquirer";
export async function q1() {
    const ans1 = await inquirer.prompt([
        {
            name: "question1",
            type: "list",
            message: "\n Q1: When Pakistan came into being: \n",
            choices: ["14 Aug 1947", "15 Aug 1947", "23 March 1947"]
        }
    ]);
    return (ans1.question1 == "14 Aug 1947");
}
;
export async function q2() {
    const ans2 = await inquirer.prompt([
        {
            name: "question2",
            type: "list",
            message: "\n Q2: Who was first PM of Pakista: \n",
            choices: ["Rehan", "Musa", "Liaqat Ali Khan"]
        }
    ]);
    return (ans2.question2 == "Liaqat Ali Khan");
}
;
