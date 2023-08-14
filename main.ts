// Quiz --- inquirer, chalk, node-banner
import inquirer from "inquirer";
import chalk from "chalk";
import showBanner from "node-banner";
import result from "./result.js";
import { q1,q2 } from "./questions.js";


//The issue of showbanner function resolves by adding promise. As per the suggestion of one of our participant.
 async function banner () {
    await new Promise ((res) => {
        showBanner ('\n QUIZ')
        setTimeout(res,2000);
    });
}

await banner();


let answer1 = await q1();
let score = await result(answer1);


let answer2 = await q2();
score = await result(answer2);


console.log(score);

//The following part of the code is not the part of our Quiz App. We've just showing the interoperability of 
//ESM and CJS Modules. Here we are importing CJS module in ES Module. using .cts/.cjs file extenstion.
/* import myName from "./test.cjs";   
console.log(myName); */

