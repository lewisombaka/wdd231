// variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    { 
        quote: "Education is the most powerful weapon which you can use to change the world.", 
        person: "Nelson Mandela" 
    },
    { 
        quote: "A mind without education is like a house without windows.", 
        person: "Cheikh Anta Diop" 
    },
    { 
        quote: "He who learns, teaches.", 
        person: "Ethiopian Proverb" 
    },
    { 
        quote: "If you want to go fast, go alone. If you want to go far, go together.", 
        person: "African Proverb" 
    },
    { 
        quote: "Until the lion learns to write, every story will glorify the hunter.", 
        person: "Jomo Kenyatta" 
    },
    { 
        quote: "Wisdom is like a baobab tree; no one individual can embrace it.", 
        person: "Akan Proverb" 
    },
    { 
        quote: "Knowledge without wisdom is like water in the sand.", 
        person: "Guinean Proverb" 
    },
    { 
        quote: "The beauty of a woman lies in her intelligence.", 
        person: "Chinua Achebe" 
    },
    { 
        quote: "An intelligent enemy is better than a foolish friend.", 
        person: "African Proverb" 
    },
    { 
        quote: "He who does not know one thing knows another.", 
        person: "African Proverb" 
    }
];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
});