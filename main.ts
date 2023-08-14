// Quiz --- inquirer, chalk, node-banner
import inquirer from "inquirer";
import chalk from "chalk";
import showBanner from "node-banner";
import result from "./result.js";
import { q1,q2 } from "./questions.js";

 let banner = () => {
    showBanner('\n QUIZ', '');
}; //Immediately invoked Function Expresion. .. IIFE
banner ();


let answer1 = await q1();
let score = await result(answer1);


let answer2 = await q2();
score = await result(answer2);


console.log(score);

//The following part of the code is not the part of our Quiz App. We've just showing the interoperability of 
//ESM and CJS Modules. Here we are importing CJS module in ES Module. using .cts/.cjs file extenstion.
/* import myName from "./test.cjs";   
console.log(myName); */

