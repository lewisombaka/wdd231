// alert("Hello World");
console.log("I am the main man");

// Strings

const myVariable = "Mathematics";
const myVariable2 = ("Mathematics", "English");
// console.log(myVariable.split(""));
// console.log(myVariable2.split(", "));

// Numbers

const myString = "42.13";
myStringNumber = (Number.parseFloat(myString));
console.log((myStringNumber + 1).toFixed(1));
console.log(myStringNumber.toString());
console.log(typeof(myStringNumber.toString()));
console.log(isNaN(myString));

// Math Methods
console.log(Math.PI);
console.log(Math.trunc(Math.PI));
console.log(Math.floor(Math.PI));
console.log(Math.ceil(Math.PI));
console.log(Math.max(2,3,1,7));
console.log(Math.min(2,3,1,7));
console.log("Random");
console.log(Math.floor(Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

// First Challenge
console.log("Write code that will return random letter from your name");

myName = "Lewis";
reverbedName = myName.split("");
console.log(reverbedName);
random = Math.floor(Math.random() * 5 + 1);
console.log(reverbedName[random]);
console.log(typeof(random)); 
console.log(myName.charAt(Math.floor(Math.random()*5+1)));

const anyName = "Jonathan";
stringLength = anyName.length;
console.log(stringLength);

// if statements
// if (condition){
    //run some code
// }
// else {
    // run some code
// }

let soup = "chicken noodle soup";
let reply;
let customerIsBanned = true;

if (customerIsBanned){
    reply = "No Soup For You";
}
else if (soup) {
    reply = `Here's your order of ${soup}`;
}
else {
    reply = `Sorry, we are out of ${soup}`;
}

console.log(reply);

// switch case rock paper scissor

// ternary operator

console.log("Debug");

let age = 21;
let time = 7;

let greeting = time <= 6 ? "Good Morning" : "Good Afternoon";

console.log(greeting);

let message = age>=18 ? "You are an adult" : "You're a minor";

console.log(message);

console.log("Debug");

let student = true;

let school = student ? "Welcome To School" : "Get Out";
console.log(school);

console.log("I Jah Man Levi");

//

let meat = "Beef";



let response = soup ? "Yes it's beef":"No it's not";
console.log(response);

// user input
// let myBoolean = confirm("OK === True\nCancel === False"); // confirm vs alert
// console.log(myBoolean);
// let myMame = prompt("Please enter your name");
// if (myMame != null){
//     console.log(myMame);
// }
// else {
//     console.log("You didn't enter your name");
// }

// let playGame = confirm("Shall we play Rock, Paper, Scissor Game? ");

// let computer;
// let user;
// let result;

// if (playGame){
    //
    // user = prompt("Choose between Rock, Paper or Scissor");
    // if (user == "Rock"){
    //     computer == "Scissor";
    //     console.log(result);
    // };
// }
// else{
    // alert("Okay, Please Come Back Soon!");
// }

// while loops

let myNumber = 50;

while (myNumber < 50){
    console.log(myNumber);
    myNumber++;
}

// do while

do {
    console.log(myNumber);
}
while(myNumber < 50);

// for loop

for (let i = 0; i < 10; i++){
    console.log(i);
}

// functions

function sum(a,b){
    if (b === undefined){
        return a + a
    }
    return a + b;
};

console.log(sum(22,2));

function getUserName(email){
    return email.slice(0,email.indexOf("@"));
}

console.log(getUserName("lewisochieng99@gmail.com"));


// anonymous / arrow function

const minus = (num1,num2) => {
    return num1 - num2;
}

console.log(minus(2,1));

const toProperCase = (name)=>{
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

console.log(toProperCase("dAvE"));

console.log("lewis".slice(1));

// scope
