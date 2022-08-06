//  CHANGING JUST THE TEXT
let paras = document.querySelectorAll('p')
paras.forEach(ele => {
    // console.log(ele.innerText)
    ele.innerText += "---> |Hello I am inserted using innerText|"
    // ele.style="color:red;"
})

// selecting querySelectorAll wii select all tags/class and using foreach will help in applying changes to all 

// CHANGIN HTML OF SELECTED ELEMENT
const a  = document.querySelectorAll(".one")
a.forEach(ele => {
    ele.innerHTML += " <div>&#8220;Hello I am Inserted using innerHTML&#8221;</div>" 
})

// using a objectsInfo in innerHtml
const ppl = {
    usrName: "Aamir",
    email:"aamirsaudagar34@gmail.com",
    addr: "Pune, Maharashtra",
    age: 20,
}

const person = document.querySelector(".persons")
person.innerHTML= ` <hr>
                    <h1>using a object Info in innerHtml</h1>
                    <h3>Hi I am ${ppl.usrName}</h3>
                    <p>My age is ${ppl.age}</p>
                    <p>Mail me on ${ppl.email}</p>
                    <hr>
                `