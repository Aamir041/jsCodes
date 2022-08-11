const forms = document.querySelector('form')

forms.addEventListener('submit',e => {
    e.preventDefault() // this method prevents from restarting the page after pressing submitting button
    console.log(forms.username.value)  // print the value of input feild
    // forms.username.value means that get value from "form" element where there is id or name asuch as username and to user value entered in that feild user value function 
})