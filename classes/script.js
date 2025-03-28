// function

function Product(name,price){
    this.name = name;
    this.price = price;

    this.displayProduct = function(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: ${this.price}`);
    }

    this.calcualteTotal = function(salesTax){
        return this.price + (this.price * salesTax)
    }
}

const salesTax = 0.05;

const Product1 = new Product("Shirt",19.99);
const Product2 = new Product("Pants",22.50);
const Product3 = new Product("Underwear",100.00);

Product1.displayProduct();

class Item{
    constructor (name,price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: ${this.price}`);
    }
}

const item1 = new Item("Cup",23.99);

item1.displayProduct();

//DOM & Event Listeners
// setters and getters
// web storage API
// JSON

//  Web Storage API
// Not Part of the DOM

const myObject = {
    name : "Lewis",
    logName: function(){
        console.log(this.name);
    }
}

const myArray = ["Eat", "Sleep", "Code"];

localStorage.setItem("mySessionsStore",JSON.stringify(myObject));

const mySessionData = JSON.parse(localStorage.getItem("mySessionsStore"));

console.log(mySessionData);

// localStorage.removeItem / localStorage.clear(); - to remove data in the local session

// Modules
// instead of using defer, use type="module"

import playGuitar from "./guitars.js";
import { shredding, plucking } from "./guitars.js";
console.log(playGuitar());
console.log(shredding());
console.log(plucking());