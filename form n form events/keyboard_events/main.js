const form = document.querySelector("form")
const usernamePattern = /^[a-zA-z]{6,12}$/
const result = document.querySelector("#result")

form.addEventListener('submit', e=>{
    e.preventDefault()
})

form.username.addEventListener('keyup',k=>{
    let res = usernamePattern.test(k.target.value)
    if(res){
        result.textContent = "valid"
        k.target.style.backgroundColor="#90EE90"
    }
    else{
        result.textContent = "in-valid"
        k.target.style.backgroundColor="#ee9090"
    }
})