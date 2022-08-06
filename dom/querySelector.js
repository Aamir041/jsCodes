const para = document.querySelector(".one") //to select one query 
console.log(para)

console.log("querySelectorAll")
const paragraph = document.querySelectorAll(".one") //  to select many query with same css selectors use 
// console.log(paragraph[0])
paragraph.forEach(element => {
    console.log(element)
});
/*
when using queryslectorAll

*/