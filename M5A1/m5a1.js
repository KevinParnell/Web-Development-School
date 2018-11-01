/*
Filename: m5a1.js
By: Kevin Parnell
Created: 10/31/2018
Last Edited: 10/31/2018
*/

var UI; // user input of number to test
var TV; // test value acquired from user
var DD; // division denominator
var HITS; // quantity of successful integer divisions

UI = parseInt(prompt("Enter a whole number to test as a prime number:"));
TV = UI;
DD = 2;
HITS = 0;

while (DD < TV) {
    if (TV % DD == 0) {
        HITS = 1;
        break;
    }
    DD = DD + 1;
}
if (HITS == 0) {
    document.write(TV + " is a prime number.");
} else {
    document.write(TV + " is not a prime number.");
}