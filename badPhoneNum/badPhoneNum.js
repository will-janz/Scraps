/**
 * Invalid Phone Number
 *
 * A probably inefficient script to determine how many phone numbers 
 * would be invalidated if a certain combination of numbers was disallowed,
 * say, for example, a number like 555-911-5555 would be invalid because it contains "911".
 *
 * Ignores specific phone number standards but starts with no leading 0's
 *
 * Script will go on forever until killed
 * Usage: node /path/to/here/badPhoneNum.js
 */

var largePhones = { "base": 1000000000, "max": 9999999999 };
var smallPhomes = { "base": 10000, "max": 99999 };
var invalidator = 911;

console.log("Checking 10 digit numbers...");
console.log("Starting number: " + largePhones.base + ", max number: " + largePhones.max);

// Grunt variables
var cur10Num = largePhones.base;
var invalid10Num = 0;

// Updates on what's going on
// This uhh... Is infinite. For now.
var update10Loop = setInterval(function() {
  
  process.stdout.write(
    "Invalid numbers: " + invalid10Num + 
    ", current number: " + cur10Num + 
    ", (" + Math.round(((cur10Num - largePhones.base) / (largePhones.max - largePhones.base)) * 100) + "%)" + "\r");
}, 1000);

// Does all the hard work
var check10Loop = setInterval(function() {
  
  if(cur10Num.toString().indexOf("911") > -1) {
    invalid10Num++;
  }
  
  cur10Num++;
  
  // Stop self when max point is reached
  if(cur10Num > largePhones.max) {
    clearInterval(check10Loop);
  }
}, 1);

/*
 * While JS is a bit of a clusterfuck, both of those loops
 * will run at the same time and share outside variables.
 * It's a neat way of showing how the asynchronous processing 
 * in Node works, IMO.
 */

// Possibility:
// A more thoughtful method of determining occurrences
// I have no idea how to word it.
// 1000000000 -> 1000000911 -> +1
// 1000000000 -> 1000009110 -> +10
// 1000000000 -> 1000091100 -> +100
// And so on. 
