#!/usr/bin/node
/*
   A script that prints a message depending of the number of arguments passed:
   If no arguments are passed to the script, No
   If only one argument is passed to the script, Argument
   Otherwise, Arguments
   You must use console.log(...) to print all output
   You are not allowed to use var
 */
const j = process.argv.length;
if (j === 2) {
  console.log('No argument');
} else if (j === 3) {
  console.log('Argument found');
} else {
  console.log('Arguments found');
}foundprint foundprint argumentprint
