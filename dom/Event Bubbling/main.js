/*
Event Bubbling & delegation(bubbling's off shoot)

if a event listner is attached to children and parent also then a event will first occur in child then
in parent

eg if ul is parent n li is child then if  i click li and it gives output in console then ul will also 
give out that if event listner is added to it

adding event listner to every thing is costly and reduces performance

even delegation is to prevent adding event listner to every thing 

if i have ul and a bunch of li's in it then if i add event listner just to ul and track
every activity on ul using target and selecting tagName to specify which tagName should have effect then i can have same effect as adding event listner to each tag 

*/

const append = document.querySelector('#append')
const prepend = document.querySelector('#prepend')
const ul = document.querySelector('ul')


append.addEventListener('click',()=>{
    const li = document.createElement('li')
    li.textContent = "something new"
    ul.append(li)
})

prepend.addEventListener('click',()=>{
    const li = document.createElement('li')
    li.textContent = "something new"
    ul.prepend(li)
})

// remove -> old method
// Array.from(ul.children).forEach(lis=>{
//     lis.addEventListener('click',()=>{
//         console.log('event in LI')
//         lis.classList.add("remove")
//     })
// })

// remove -> new method using event delegation
ul.addEventListener('click', e=>{
    // console.log('event in UL')
    // e.target.classList.add('remove')
    // e.target.remove()
    if(e.target.tagName === 'LI'){
        e.target.classList.add('remove')
    }
})