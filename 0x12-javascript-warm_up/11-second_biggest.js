#!/usr/bin/node
'use strict';
let secBig = 0;
const args = process.argv.slice(2, process.argv.length);
if (args.length > 1) {
  args.sort((a, b) => a - b);
  secBig = args[args.length - 2];
}
console.log(secBig);
