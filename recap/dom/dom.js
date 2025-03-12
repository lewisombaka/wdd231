// DOM Manipulation

// GetElementByID()

// const title = document.getElementById('main-heading');
// console.log(title);

// GetElementByClassName()

// const listItem = document.getElementsByClassName('list-items');
// console.log(listItem);

// getElementByTagName();

// const div = document.getElementsByTagName('div');
// console.log(div);

// querySelector()

// const container = document.querySelector('div');
// console.log(container);

// querySelectorAll()

// const container2 = document.querySelectorAll('div');
// console.log(container2);

// styling

const title = document.querySelector('#main-heading');
console.log(title);
title.style.color = 'red'; // inline style works only on single element

const list = document.querySelectorAll('.list-items');


for (let i = 0; i < list.length; i++){
    list[i].style.color = 'gray'; // inline style to select all using a for loop
}

// creating element

const ul = document.querySelector('ul');
const li = document.createElement('li');

ul.append(li);
li.textContent = "I am"; // textContent
li.innerText = "Lewis"; // textContent

// Modifying Attribute

li.setAttribute('class','list-items'); // set attribute to inherit style

li.removeAttribute('class'); // remove styling

const title2 = document.querySelector('#main-heading');

li.classList.add('list-items');
li.classList.remove('list-items');

// Remove an element
li.remove();

// DOM tree
// DOM Hierachy (parent node, child node, siblings)

// parent node transversal
let ull = document.querySelector('ul');
console.log(ull.parentNode.parentNode); //
console.log(ull.parentElement.parentElement); //

// optin for nodes rather than elements

// transversing downwards
console.log(ull.childNodes);

ull.childNodes[1].style.backgroundColor = 'blue';

// Event Listeners