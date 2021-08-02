#!/usr/bin/node
/*
script that prints x times “C is fun”
*/
const x = process.argv[2];
if (isNaN(x)) {
  console.log('Missing number of occurrences');
} else {
  for (let n = 0; n < x; n++) {
    console.log('C is fun');
  }
}
