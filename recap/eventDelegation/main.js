const add = document.querySelector("#makeBox");
const boxes = document.querySelector('.boxes');

add.addEventListener('click',(e)=>{
    const box = document.createElement('div');
    box.classList.add('box');
    boxes.append(box);
})

document.querySelector('.box').forEach(box=>{
    box.addEventListener('click',(e)=>{
        box.classList.toggle('clicked');
    })
})