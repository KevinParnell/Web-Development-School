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

UI = window.prompt("Enter a whole number to test as a prime number:");
TV = parseInt(UI, 10);
DD = TV;
HITS = 0;

while (DD > 0) {
    if (TV % DD == 0) {
        HITS++;
    }
    DD--;
}

document.write("<p>" + UI + " is");
if (TV <= 1 || HITS > 2) document.write(" not");
document.write(" a prime number" + "</p>");