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