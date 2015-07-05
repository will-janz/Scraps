/**
 * badPhoneNum - Brute
 *
 * Script will go on forever until killed
 * Usage: node /path/to/here/BPNBrute.js
 */

// Test data
var largePhones = { "base": 1000000000, "max": 1009110000 };
var invalidator = 911;

// Pretty stuff
console.log("Checking 10 digit numbers...");
console.log("Starting number: " + largePhones.base + ", max number: " + largePhones.max);

// Grunt variables
var curNum = largePhones.base;
var invalidNum = 0;
var invalidNumbers = "";

// Independent update loop to prevent stdout from getting flooded
var updateLoop = setInterval(function() {
  
  process.stdout.write(
    "Invalid numbers: " + invalidNum + 
    ", current number: " + curNum + 
    ", (" + Math.round(((curNum - largePhones.base) / (largePhones.max - largePhones.base)) * 100) + "%)");
  
  if(checkLoop) {
    process.stdout.write("\r");
  } else {
    process.stdout.write("\n");
    clearInterval(updateLoop);
  }
}, 1000);

// Does all the hard work
// Chunks the workload into 1,000,000 checks,
// occasionally unblocking the updateLoop for updates
var chunkEnd = 0;
var checkLoop = setInterval(function() {
  
  chunkEnd = curNum + 1000000;
  
  for(; curNum < chunkEnd; curNum++) {
    if(curNum.toString().indexOf("911") > -1) {
      invalidNum++;
      invalidNumbers += curNum.toString() + ", ";
    }
    
    if(curNum >= largePhones.max) {
      clearInterval(checkLoop);
      checkLoop = false;
      console.log(invalidNumbers);
      break;
    }
  }
}, 10);

// Each setInterval is running in an async fashion,
// however they are not running in parallel