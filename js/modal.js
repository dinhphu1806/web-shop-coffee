// const btns = document.querySelectorAll('#js-btn')
// const modal = document.querySelector('.js-modal')
// const modalClose = document.querySelector('.js-modal-close')
// const modalContainer = document.querySelector('.js-modal-container')

// function showBook(){
//     modal.classList.add('open')
// }
// function hideBook(){
//     modal.classList.remove('open')
// }

// for(const btn of btns){
//     modal.addEventListener('click', showBook)
// }
//     modalClose.addEventListener('click', hideBook)

//     modal.addEventListener('click', hideBook)

// // click ra ngoài đóng
// modalContainer.addEventListener('click', function(event){
//     event.stopPropagation()
// })
// const open = document.getElementById('js-btn');
// const jsModal = document.getElementById('js-modal');
// const close = document.getElementById('js-modal-close');

// open.addEventListener('click', () => {
//     jsModal.classList.add('show');
// });
//  close.addEventListener('click', () => {
//     jsModal.classList.remove('show');
//  })
const btns = document.querySelectorAll('#js-btn-message');
const modal = document.querySelector('.js-modal');
const modalClose = document.querySelector('.js-modal-close');
const modalContainer = document.querySelector('.js-modal-container');

function showMessage(){
    modal.classList.add('open');
}
function hideMessage(){
    modal.classList.remove('open');
}

for(const btn of btns){
    btn.addEventListener('click', showMessage)
}

modalClose.addEventListener('click', hideMessage)

modal.addEventListener('click', hideMessage)

modalContainer.addEventListener('click', function(event){
    event.stopPropagation()
})
