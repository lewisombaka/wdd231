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

// option for nodes rather than elements

// transversing downwards
console.log(ull.childNodes);

ull.childNodes[1].style.backgroundColor = 'blue';

// Event Listeners
// element.addEventListener("click",function);

const buttonTwo = document.querySelector('#two');
buttonTwo.addEventListener('click',() =>{
    alert ('Good Boy');
});

// mouseHover
const buttonThree = document.querySelector('#three');
buttonThree.addEventListener('mouseover',()=>{
    buttonThree.style.color = 'red';
});

buttonThree.addEventListener('mouseout',()=>{
    buttonThree.style.color = '' // reset of color
});

// reveal more

const revealBtn = document.querySelector('.reveal');
const hiddenText = document.querySelector('.remove');
revealBtn.addEventListener('click',()=>{
    if (hiddenText.style.display === 'none'){
        hiddenText.style.display = 'block';
        revealBtn.textContent = 'Hide';
    }
    else {
        hiddenText.style.display = 'none';
        revealBtn.textContent = 'Reveal';
    }
});

const hamburger = document.querySelector('.ham');
const nav = document.querySelector('.nav');

hamburger.addEventListener('click',()=>{
    if (nav.style.display === 'none'){
        nav.style.display = 'block';
        hamburger.textContent = 'x';
    }
    else{
        nav.style.display = 'none';
        hamburger.textContent = '__';
    }
});

// Event Propagation
// capturing, target, bubbling

// Event delegation
// allows users to append a single event listener to a parent element that adds it all of its present and future descendants that match a selector

// const football = document.querySelector('#Football');football.addEventListener('click',()=>{
//     football.style.color = football.style.color === 'red' ? 'black' : 'red';
//     console.log('Football is clicked');
// });

const sports = document.querySelector('#sports')

sports.addEventListener('click',function(e){
    console.log(e.target.getAttribute('id')+' is clicked');
    // e.target.style.color = e.target.style.color === 'red' ? 'black' : 'red';
    const target = e.target;
    target.style.color = target.style.color === 'red' ? 'black' : 'red';
});



const addSport = document.querySelector('#addSport');
addSport.addEventListener('click',()=>{
    const sport = prompt('Enter Sport');
    if (sport === null){

    }else
    {
    const sportItem = document.createElement('li');
    sportItem.textContent = sport;
    sports.appendChild(sportItem);
    }
});

