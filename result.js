import chalk from "chalk";
let pointsEarned = 0;
async function result(a) {
    if (a == true) {
        console.log(chalk.green.bold("\n Great! your answer is Correct!"));
        pointsEarned = pointsEarned + 10;
    }
    else {
        console.log(chalk.red.bold("\n Sorry your answer is incorrect! "));
    }
    return pointsEarned;
}
export default result;
