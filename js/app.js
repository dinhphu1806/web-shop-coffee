const menuBtn = document.querySelector('#menu-btn');
const cartBtn = document.querySelector('#cart-btn');
const searchBtn = document.querySelector('#search-btn');

let navbar = document.querySelector('.navbar');

menuBtn.onclick = () =>{
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active'); 
    cartItem.classList.remove('active');
    searchForm.classList.remove('active');
}
// js cartItem
let cartItem = document.querySelector('.cart-items-container');

cartBtn.onclick = () =>{
    navbar.classList.remove('active');
    cartItem.classList.toggle('active');
    searchForm.classList.remove('active');
}
//js search-form
let searchForm = document.querySelector('.search-form');

searchBtn.onclick = () =>{
    navbar.classList.remove('active');// tat bnavbar
    cartItem.classList.remove('active'); // tat cartItem
    searchForm.classList.toggle('active'); // bat seacrh-form
}


// searchForm.addEventListener('click', function(event) {
//     event.stopPropagation();
// })
// $(document).ready(function(){
//     $(`.icon-bar`).clsick(function(){
//         $(`ul`).toggleClass(`show`)
//     });
// });

//bật xong cái kia ko được bật
window.onscroll = () =>{
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
    searchForm.classList.remove('active');
}

