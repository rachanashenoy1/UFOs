// Create a variable called "fullName" that holds a string
var fullName = "Homer Simpson";
// Create a variable called "country" that holds a string
var country = "United States";
// Create a variable called "age" that holds an integer
var age = 25;
// Create a variable called "hourlyWage" that holds an integer
var hourlyWage = 15;
// Calculate the "dailyWage" for the user
var dailyWage = hourlyWage * 8;
// Create a variable that holds a number as a string
var weeklyHours = "40";
// Create a variable called 'weeklyWage' that converts a string into an integer
var weeklyWage = hourlyWage * parseInt(weeklyHours);
// Create a variable called "satisfied" that holds a boolean
var satisfied = true;
// Print out "Hello <name>!"
console.log('Hello ${fullName}');
// Print out what country the user entered
console.log(country);
// Print out the user's age
console.log(age);
// Print out the daily wage that was calculated
console.log(dailyWage);
// Print out the weekly wage that was calculated
console.log(weeklyWage);
// Using an IF statement to print out whether the users were satisfied
if (satisfied === true) {
    console.log("User is satisfied");
    }
    else {
        console.log("User is not satisfied with pay");
    }