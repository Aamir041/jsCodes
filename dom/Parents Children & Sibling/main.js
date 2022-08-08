const parents = document.querySelector("article")

console.log(parents.children) // .childern gives all the childs in that parent 

//console.log(Array.from(parents.children)) // Array.from() will make a HTMLcollection into array

Array.from(parents.children).forEach(ele =>{
    // console.log(ele)
    ele.classList.add("articlesChild") // added class to every child of article in html
})

// HOW TO FIND PARENT ELEMENT OF A HTML OBJECT
const q1 = document.querySelector('h2')
console.log(`this is parent element`,q1.parentElement)
