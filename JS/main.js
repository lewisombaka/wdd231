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
// var, let and const
// global scope

var x = 1;
let y = 2;
// const z = 3;

// local scope

{
    let y = 4;
}
// let z;
function myFunction(){
    console.log(y);
}

// console.log(z);
myFunction()

// avoid using global scopes
// avoid using var, stick with const or let

// Arrays
const myArray = [];
// add element to an array
myArray[0] = "Lewis";
myArray[1] = 1999;
myArray[2] = "BYU-I";

console.log(myArray);
console.log(myArray.length); // length
console.log(myArray[myArray.length-1]); // last item

// add items
myArray.push("School");
console.log(myArray);

// remove items
myArray.pop();
console.log(myArray);

// last item

const lastItem = myArray.pop();
console.log(lastItem);

// add item to the beginning of an array
myArray.unshift(25);
console.log(myArray);

// remove from the first of the array

myArray.shift();
console.log(myArray);

// delete in a specific index

myArray.splice(1,1); // specify the start and the end
myArray.splice(1,1,42); // specify the start and the end the replace

// reverse
myArray.reverse();

// join
myArray.join();
console.log(myArray);

// concat - joins two existing arrays

const newArray = myArray.concat(myArray);

// multidimensional arrays

const equipShelfA = ["Baseball", "Football", "Volleyball"];
const equipShelfB = ["Basketball", "Golf Balls", "Tennis Balls"];

const clothesShelfA = ["Tank Tops", "T-Shirts", "Jerseys"];
const clothesShelfB = ["Sweat Tops", "Sweat Pants", "Hoodies"];

console.log(equipShelfA[1]);
console.log(clothesShelfA[0]);

const equipDept = [equipShelfA, equipShelfB];
const clothesDept = [clothesShelfA, clothesShelfB];

console.log(equipDept[0][1]);
console.log(clothesDept[1][0]);

const sportsStore = [equipDept,clothesDept];
console.log(sportsStore[0][0][1]);

console.log("-- -- Using For Loop -- --");

for (let i = 0; i < 2; i++){
    for (let j = 0; j < 2; j++){
        for (let k = 0; k < 3; k++){
            console.log(sportsStore[i][j][k]);
        }
    }
}

console.log("-- -- Using For Loop -- --");

sportsStore.forEach(row => console.log(row.join(" ")));

// objects

const myObj = {name:"Dave"};
console.log(myObj.name);

const anotherObj = {
    alive:true,
    answer:42,
    hobbies:["Eat", "Sleep", "Code"],
    beverage:{
        morning:"Coffee",
        night:"Iced Tea"
    },
    action: function(){
        return `Time for ${this.beverage.morning}`;
    }
}

console.log(anotherObj.beverage.morning); // acces items using .notation
console.log(anotherObj["answer"]); // acces items using bracket
console.log(anotherObj.action());

const vehicle = {
    wheels:4,
    engine:function(){
        return "Vroooom"
    }
}

// Object Inheritance
const truck = Object.create(vehicle);
console.log(truck);
truck.doors = 2;
console.log(truck.engine()); // Inheritance

const car = Object.create(vehicle);
car.doors = 4;
car.engine = function(){
    return "Whooosh"
};

console.log(car.engine());

const tesla = Object.create(car);
console.log(car.wheels);
console.log(tesla.engine());
tesla.engine = function (){
    return `Shhhhhh`;
};
console.log(tesla.engine());

// Key Value Pairs in curly braces

const band = {
    vocals:"Robert Plant",
    guitar:"Jimmy Page",
    bass:"John Paul Jones",
    drums:"John Bonham"
}

console.log(Object.keys(band));
console.log(Object.values(band));

// for in looop

for (let i in band){
    console.log(band[i]); // accesing keys
    console.log(`${i} : ${band[i]}`); // accesing values and keys
};

// deleting properties in objects
delete band.drums;

// checking if a value exists
console.log(band.hasOwnProperty('drums')); // gives a boolean

// destructuring objects
const {guitar:one} = band;
const {bass:two, vocals:three} = band;
console.log(one);
console.log(two);
console.log(three);

function sings ({vocals}){return `${vocals} Sings so Well`};

console.log(sings(band));

// Classes

class pizza {
    constructor (pizzaType){
        this.type = pizzaType;
        this.size = "Medium";
        this.crust = "original";
    }
    bake(){
        console.log(`Baking a ${this.size} ${this.crust} ${this.type} crust pizza`);
    }
};

const myPizza = new pizza("pepperoni");
myPizza.bake();