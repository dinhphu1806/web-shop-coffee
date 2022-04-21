// js bar
let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active'); 
    cartItem.classList.remove('active');
    searchForm.classList.remove('active');
}
// js cartItem
let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}
//js search-form
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active'); // bat seacrh-form
    navbar.classList.remove('active');// tat bnavbar
    cartItem.classList.remove('active'); // tat cartItem
}
searchForm.addEventListener('click', function(event) {
    event.stopPropagation();
})
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

