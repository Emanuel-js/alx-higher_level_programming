#!/usr/bin/node
/*
A script that prints a square
*/
'use strict';
const x = process.argv[2];
if (isNaN(x)) {
  console.log('Missing size');
} else {
  for (let n = 0; n < x; n++) {
    console.log('X'.repeat(x));
  }
}
