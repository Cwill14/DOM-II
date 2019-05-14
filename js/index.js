// Your code goes here
//                  1
let nav = document.querySelector('.nav');
nav.addEventListener('dblclick', event => {
    event.target.style.color = "blue";
});
//                  2
nav.addEventListener('click', event => {
    event.target.style.color = "#212529";
})
//                  3 (not working)
let signupBtn = document.querySelector('.btn');
signupBtn.addEventListener('mouseover', event => {
    event.target.setAttribute('transform', 'scale(1.15)');
});
//                  4
