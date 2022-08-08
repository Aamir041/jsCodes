const button = document.querySelector('button')

const ul = document.querySelector('ul')

button.addEventListener('click',()=>{
    // const li = document.querySelector('li') this is mistake
    const li = document.createElement('li') 
    li.textContent = "Something New"
    ul.append(li) // add at end of list
    // ul.prepend(li) // add at start of list
})

// Array.from(ul.children).forEach(lis =>{
//     lis.addEventListener('click',()=>{
//         lis.classList.add('remove')
//     })
// })

const allLi = document.querySelectorAll('li')
allLi.forEach(li=>{
    li.addEventListener('click',()=>{
        li.style.textDecoration="line-through"
    })
})