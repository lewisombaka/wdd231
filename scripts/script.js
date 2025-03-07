const footer1 = document.getElementById('footer1');
const newParagraph = document.createElement('p');
const img = document.createElement('img');


img.src = "images/ke.png";
img.alt = "flag";
img.width = 30;
newParagraph.textContent = "©2025 💻 Lewis Ochieng' Ombaka 💻 Kenya ";
newParagraph.append(img);
footer1.append(newParagraph)


// hamburger menu
const hamburgerBtn = document.getElementById('hamburger-btn');
const navLinks = document.getElementById('nav-links');
hamburgerBtn.addEventListener('click', ()=>{
    navLinks.classList.toggle('active');
});