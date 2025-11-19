'use strict';
// Q5 – Hoisting Lab: The Sequence Trap
// Original snippet (predict then run):
// console.log(score);
// announce();
// var score = 50;
// function announce() { console.log("Game started"); }
// let status = "ready";
// startGame();
// function startGame() { console.log(status); }
//
// Explanation:
// - var score is hoisted (declared) but initialized to undefined before the log, so console.log(score) -> undefined.
// - function declarations (announce, startGame) are hoisted fully (definition available).

// Fixed version:
var score = 50;
function announce() { console.log("Game started"); }
console.log(score); // 50
announce();
let status = "ready";
function startGame() { console.log(status); }
startGame();

// Arrow function rewrite to compare hoisting differences
// Note: Arrow functions assigned to const/let are not hoisted in the same way as function declarations.
const announceArrow = () => { console.log("Game started (arrow)"); };
const startGameArrow = () => { console.log(status); };

console.log('\nArrow versions (status still defined):');
announceArrow();
startGameArrow();

// Hoisting memory states:
// - Function declarations: hoisted with their body, available before runtime execution line.
// - var declarations: hoisted as declarations (initialized to undefined) then assigned at runtime.
// - let/const: declarations are hoisted but are in temporal dead zone until initialization; accessing before initialization throws ReferenceError.
