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
// let signupBtns = document.querySelectorAll('.btn');
// for(let i = 0; i < signupBtns.length; i++) {
//     signupBtns[i].addEventListener('mouseover', event => {
//         event.target[i].setAttribute('transform', 'scale(1.15)');
//     });
// };

// signupBtn.addEventListener('mouseover', event => {
//     event.target.setAttribute('transform', 'scale(1.15)');
// });

//                  4
// let body = document.querySelector('body');
// body.addEventListener('load', event => {
//     event.target.setAttribute
// })
//                  5
let busImg = document.querySelector('.intro img')
busImg.addEventListener('load', event => {
    event.target.style.border = "1px dashed red";
});
//                  6
