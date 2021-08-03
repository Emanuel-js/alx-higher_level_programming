#!/usr/bin/node
let no = 0;
exports.logMe = function (item) {
  if (item) {
    console.log(`${no}: ${item}`);
    no++;
  }
};
