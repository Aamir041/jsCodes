const forms = document.querySelector("form")
const result = document.querySelector("#result")
forms.addEventListener("submit", e=>{
    e.preventDefault()
    
    /*
    Username pattern should be that usename should be 6-12 chara in length and should only consis 
    of upper case and lower case letters and no symbols
    */

    // validation
    const username = forms.username.value
    const usernamePattern = /^[a-zA-z]{6,12}$/
    if(usernamePattern.test(username)){
        result.textContent = "Valid Username"
    } 
    else{
        result.textContent="Invalid Username"
    }
})