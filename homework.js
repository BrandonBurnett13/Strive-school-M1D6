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

var me = {name:"Paul", surname:"Murray", age:30}
    delete me.age;
    
    console.log(me);

/* Ex.E
    Programmatically remove the age property from the previously create object.
*/


/* Ex.F 
   Programmatically add to the object me an array called "skills", containing the programming languages you know right now.
*/

var skills = ["BeginnerJavaScript", "HTML", "CSS"];


/* Ex.G 
   Programmatically remove the last skill from the "skills" array inside the "me" object.
*/