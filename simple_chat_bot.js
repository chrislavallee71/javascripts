let bot_name = "Olaf";
let birth_year = new Date().getFullYear();

console.log(`Hello! My name is ${bot_name}.\nI was created in ${birth_year}.`);



*****************************************************************************

const input = require('sync-input');

let bot_name = "Olaf";
let birth_year = new Date().getFullYear();

console.log(`Hello! My name is ${bot_name}.\nI was created in ${birth_year}.`);

let name = input("Please, remind me your name.\n");

console.log(`What a great name you have, ${name}!`);



*****************************************************************************


const input = require('sync-input');

let bot_name = "Olaf";
let birth_year = new Date().getFullYear();

console.log(`Hello! My name is ${bot_name}.\nI was created in ${birth_year}.`);

let name = input("Please, remind me your name.\n");

console.log(`What a great name you have, ${name}!`);

console.log("Let me guess your age.\nEnter remainders of dividing your age by 3, 5, and 7.");

let remainder3 = Number(input());
let remainder5 = Number(input());
let remainder7 = Number(input());

let your_age = (remainder3 * 70 + remainder5 * 21 + remainder7 * 15) % 105;

console.log(`Your age is ${your_age}; that's a good time to start programming!`);



*****************************************************************************


const input = require('sync-input');

console.log("Hello! My name is Aid.");
console.log("I was created in 2020.");
console.log("Please, remind me your name.");

let name = input();

console.log("What a great name you have, " + name + "!");
console.log("Let me guess your age.");
console.log("Enter remainders of dividing your age by 3, 5 and 7.");

let rem3 = Number(input());
let rem5 = Number(input());
let rem7 = Number(input());

let age = (rem3 * 70 + rem5 * 21 + rem7 * 15) % 105;

console.log("Your age is " + age + "; that's a good time to start programming!");
console.log("Now I will prove to you that I can count to any number you want.");

let number = Number(input());
let n = 0;

while (n <= number) {
  console.log(n++ + "!");
}

console.log("Completed, have a nice day!");



*****************************************************************************


const input = require('sync-input');


function greet(bot_name, birth_year) {
	console.log("Hello! My name is " + bot_name + ".");
	console.log("I was created in " + birth_year + ".");
}

function remind_name() {
	console.log("Please, remind me your name.");
	let name = input();
	console.log("What a great name you have, " + name + "!");
}

function guess_age() {
	console.log("Let me guess your age.");
	console.log("Enter remainders of dividing your age by 3, 5 and 7.");

	let rem3 = Number(input());
	let rem5 = Number(input());
	let rem7 = Number(input());

	let age = (rem3 * 70 + rem5 * 21 + rem7 * 15) % 105;

	console.log("Your age is " + age + "; that's a good time to start programming!");
}

function count() {
	console.log("Now I will prove to you that I can count to any number you want.");

	let number = Number(input());
	let current = 0;

	while (current <= number) {
		console.log(current + " !");
		current += 1;
	}
}

function test() {
    console.log("Let's test your programming knowledge.");
    console.log("Why do we use methods?\n" +
              "1. To repeat a statement multiple times.\n" +
              "2. To decompose a program into several small subroutines.\n" +
              "3. To determine the execution time of a program.\n" +
              "4. To interrupt the execution of a program.");
    let answer;
    do {
      answer = Number(input());
      if (answer === 2) {
        console.log("Congratulations, have a nice day!");
      } else {
        console.log("Please, try again.");
      }
    } while (answer !== 2);
}

greet();
remind_name();
guess_age();
count();
test();