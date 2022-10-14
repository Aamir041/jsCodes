
/* USING OLD CHAINING METHOD*/

/*
fetch('sample.json').then((response) => {
    console.log("Success: ",response)
    return response.json() // IMPORTANT ===> response.json() returns a promise
}).then(data => {
    console.log(data)
}).catch((err) => {
    console.log("Rejected: ",err)
})
*/

/* USING ASYNC AWAIT */

const result = document.querySelector("#result");

const getTodos = async() => {
    try{
        const response = await fetch('sample.json');
        
        // console.log(response.json()) ===> reponse.json() returns a promise
        
        const data = await response.json()

        // console.log(data["quiz"]["maths"])

        return data // this return a promise and not data 
    }
    catch{(err) => {
        console.log(err.message)
    }}
}

getTodos()
    .then(data => console.log(data))
    .catch(err => console.log(err.message))