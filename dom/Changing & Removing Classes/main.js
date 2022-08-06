// const toSuccess = document.querySelector("div")
//  to add classes to element you can use classList.add
// toSuccess.classList.add("success")

//  to remove classes to element you can use classList.remove
// toSuccess.classList.remove("success")

// this is a very bad way to change class 
// toSuccess.setAttribute("class","success")

const paras = document.querySelectorAll("p")
paras.forEach(pees =>{
    if(pees.textContent.includes("error")){ //includes checks if word passed in argument is there or not in string/line
        pees.classList.add("error")
    }
    if(pees.textContent.includes("success")){ //includes checks if word passed in argument is there or not in string/line
        pees.classList.add("success") 
    }
})