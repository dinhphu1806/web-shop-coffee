// $(document).ready(function(){
//     $(window).scroll(function(){
//         if ($(this).scrollTop()){
//             $('#back-to-home').fadeIn();
//         }else {
//             $('back-to-home').fadeOut();
//         }
//     });
// });
// cách 1:
const backToTop = document.querySelector(".btn-home");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
        backToTop.classList.add('show');
    }else {
        backToTop.classList.remove('show');
    }
})
// cách 2:
// window.addEventListener('scroll', function() {
//     var backToTop = document.querySelector('.btn-home');

//     backToTop.classList.toggle('show', window.scrollY > 500)
    
// })