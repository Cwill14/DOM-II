// Your code goes here
//                  1
let nav = document.querySelector('.nav');
nav.addEventListener('dblclick', event => {
    event.target.style.color = "blue";
});
//                  2
nav.addEventListener('click', event => {
    event.preventDefault();
    event.target.style.color = "#212529";
})
//                  3 (not working)
let signupBtns = document.querySelectorAll('.btn');
for(let i = 0; i < signupBtns.length; i++) {
    signupBtns[i].addEventListener('mouseover', event => {
        event.target.style.transform = "scale(1.15)";
    });
};




// signupBtns.addEventListener('mouseover', event => {
//     event.target.style('transform', 'scale(1.15)');
// });

//                  4
// let body = document.querySelector('body');
// body.addEventListener('load', event => {
//     event.target.setAttribute
// })
//                  5
let botBoatImg = document.querySelector('.content-destination img')
botBoatImg.addEventListener('load', event => {
    event.target.style.border = "1px dashed red";
});
//                  6
let footerP = document.querySelector('.footer p');
footerP.addEventListener('mouseenter', event => {
    event.target.style.fontSize = '2rem';
});
footerP.addEventListener('mouseleave', event => {
    event.target.style.fontSize = '1.6rem';
});
//                  7
let body = document.querySelector('body')
body.addEventListener('keydown', event => {
    event.target.style.backgroundColor = "purple";
});
//                  8
let logoH1 = document.querySelector('h1');
logoH1.addEventListener('contextmenu', event => {
    body.style.backgroundColor = "white";
});
//                  9
let busImg = document.querySelector('.intro img');
busImg.addEventListener('dragstart', event => {
    alert("Beep Beep!!");
});
//                  10
let homeLink = document.getElementById('home-link');
let scaryImg = document.getElementById('scary-img');
let boo = document.getElementById('boo');
homeLink.addEventListener('click', event => {
    alert("are you sure?");
    scaryImg.style.display = "block";
    boo.style.display = "fixed";
});
scaryImg.addEventListener('dblclick', event => {
    scaryImg.style.display = "none";
    boo.style.display = "none";
});
let advTextContent = document.querySelector('inverse-content .text-content');
advTextContent.addEventListener('click', event => {
    event.target.style.backgroundColor = "yellow";
});
let advAwaits = document.querySelector('.inverse-content .text-content h2');
advAwaits.addEventListener('click', event => {
    event.target.style.backgroundColor = "orange";
    event.stopPropagation();
});