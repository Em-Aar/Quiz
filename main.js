import showBanner from "node-banner";
import result from "./result.js";
import { q1, q2 } from "./questions.js";
let banner = () => {
    showBanner('\n QUIZ', '');
}; //Immediately invoked Function Expresion. .. IIFE
banner();
let answer1 = await q1();
let score = await result(answer1);
let answer2 = await q2();
score = await result(answer2);
console.log(score);
import myName from "./test.js";
console.log(myName);
