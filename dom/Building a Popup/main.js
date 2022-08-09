const button = document.querySelector('button')

const popup = document.querySelector('.popup-wrapper')

button.addEventListener('click',()=>{
    popup.style.display="block"
})

const close = document.querySelector('.close')
close.addEventListener('click',()=>{
    popup.style.display="none";
})

// popup.addEventListener('click', e =>{
//     if(e.target.classList.contains('popup','')){
//         popup.style.display="block"
//         console.log(e.target.classList)
//     }
//     else{
//         popup.style.display="none"
//         console.log(e.target.classList)
//     }
// })

popup.addEventListener('click',()=>{
    popup.style.display="none"
})