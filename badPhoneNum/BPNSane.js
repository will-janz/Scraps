/**
 * badPhoneNum - Sane
 *
 * Usage: (incomplete)
 */ 


// Test data
var largePhones = { "base": 1000000000, "max": 9999999999 };
var invalidator = 911;

// Pretty stuff
console.log("Checking 10 digit numbers...");
console.log("Starting number: " + largePhones.base + ", max number: " + largePhones.max);

/* (spitting out my thought process here)
 If we start at 9110000000, which is less than 9999999999, every number between 9110000000 and 9120000000 is invalid.
 Or, start at the smallest number within the two limits that contains the invalidator.
 
 Testing to try and find a pattern
 
 Max          Invalid     Difference
              count    
 1000000911 = 1       
 1000009110 = 10          9
 1000091100 = 182         172
 1000911000 = 2722        2540
 1009110000 = 36312       33590
 
 A pattern isn't quite there.
*/