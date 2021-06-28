/*
    ASSIGNMENT RULES
    - All the answers must be written in JavaScript
    - The solution must be pushed to the repository and be available for the tutors by the end of the day
    - You can ask for help, reach the Teaching Assistants if needed
    - You can google / use StackOverflow BUT we suggest you to use just the material provided
    - You can test your code in a separate file or de-commenting the single exercises in this one.
      You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
    - Complete as many exercise that you can
    - Publish them into your own GitHub account and upload repository link on Eduflow before 16.30 (Berlin Time) 
*/

//JS Basics

/* Ex.A
   Create a variable called "test" and assign a string to it.
*/

const test = "string";
console.log(test);

/* Ex.B
    Create a variable called "sum" and assign to it the result of the sum between 10 and 20.
*/

const sum = (15);
console.log(sum);

/* Ex.C 
    Create a variable called "random" and assign to it a random number between 0 and 20 (it should be randomly created at each execution).
*/

const random = Math.floor(Math.random() * 20)
console.log(random);

/* Ex.D
    Create a variable called "me" and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.
*/

var me = {name:"Brandon", surname:"Burnett", age:22}
    delete me.age;
    me.splice(-1,1);
    console.log(me);

/* Ex.E
    Programmatically remove the age property from the previously create object.
*/


/* Ex.F 
   Programmatically add to the object me an array called "skills", containing the programming languages you know right now.
*/

var skills = ["JavaScript", "C++", "Python"];


/* Ex.G 
   Programmatically remove the last skill from the "skills" array inside the "me" object.
   done on line 42
*/

// JS Functions
/* Ex.1
    Write a function called "dice"; it should randomize an integer number between 1 and 6.
*/

function dice(myMin, myMax) {
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
  }
  
  var myRandom = dice(1, 6);
  
  console.log(myRandom);

/* Ex.2 
    Write a function called "whoIsBigger" which receives 2 numbers as parameters and returns the biggest one.
*/

function whoIsBigger(numOne, numTwo) {
    if (numOne > numTwo) {
        console.log("The first number is the largest.")
    }
    else {
        console.log("The second number is the largest")
    }
    return
}
whoIsBigger(5, 10); 



/* Ex.3
    Write a function called "splitMe" which receives a string as a parameter and returns an array with every word in that string.
    Ex. splitMe("I love coding") => returns ["I", "Love", "Coding"]
*/

function splitMe(text){
    let x = text.replace(/[^A-Za-z0-9]+/g, " ");
    let newArr = x.trim().split(" ");
    return newArr;
}

console.log(splitMe("I love coding"));


/* Ex.4
    Write a function called "deleteOne" which receives a string and a boolean as parameters. If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.
*/

function deleteOne(str, trueFalse) {
    if (trueFalse === false) {
        return str.substring(1, str.length);
    } else if (trueFalse === true) {
        return str.substring(0, str.length - 1);
    };
}

console.log(deleteOne("MyString", true));

/* Ex.5
   Write a function called "onlyLetters" which receives a string as a parameter and returns it removing all the digits.
   Ex.: onlyLetters("I have 4 dogs")  => returns "I have  dogs"
*/

function onlyLetters(str) {
    var withNoNumbers = str.replace(/[0-9]/g, '');
    return withNoNumbers
}

console.log(onlyLetters("124124 String without numbers 129417"));

/* Ex.6 
   Write a function called "isThisAnEmail" which receives a string as a parameter and returns true if the string is a valid email address.
*/

function isThisAnEmail(str) {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(str))
     {
       return (true)
     }
       console.log("You have entered an invalid email address!")
       return (false)
   }

   console.log(isThisAnEmail("pm1@outlook.com"));
   console.log(isThisAnEmail("pm1@.outlook.com"));  

/* Ex.7
   Write a function called "whatDayIsIt" that should return the current day of the week.
*/
function whatDayIsIt(str) {
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var d = Date("25th July 2020");
var dayName = days[d.getDay()];
}
console.log(dayName);
