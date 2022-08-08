const button = document.querySelector('button')
const dispResult = document.querySelector("div.result")
dispResult.innerHTML = ""
let count = 0
button.addEventListener('click', ()=>{
    dispResult.innerHTML += "<p>Hello World</p>"
})

// how i did it was i took li tag and using Arrray.from() made an array of that html collection
// and for each children of that li add a addEventListner by which if that child is clicked 
// it will have a class and in css i set that class propety as display:none

const lists = document.querySelector("ul")
Array.from(lists.children).forEach(lis => {
    lis.addEventListener('click',e => {
        // lis.classList.add("complete")
        // e.target.classList.add("complete")
        e.target.style.textDecoration = 'line-through'
    })
})
