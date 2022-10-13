/* create a promise with 4 api calls
1-> createOrder
2-> proceedToPayment
3-> showOrderSummary
4-> updateWallet -> :( kidhar implement karu isko
*/

const kart = ["shoes", "bag", "deo", "cricket bat"]

let balance = 1000;
let bill = 400;
let afterPayment = balance - bill;

const validateKart = (kart) => kart.length > 0 ? true : false;

const proceedToPayment = (id) => {


    return new Promise((resolvePay,rejectPay) => {
        balance > bill ? resolvePay(id) : rejectPay(new Error("You dont have enough balance to procees:("))
    })
}

const showOrderSummary = (id) => {
    return new Promise((resolve) => {
        resolve(`Your Order:${id} of Rs.${bill} has been payed successfully!`,afterPayment)
    })
}

//  Producing Code
const createOrder = (kart) => {
    return new Promise((resolve, reject) => {
        validateKart(kart) ? resolve(createId()) : reject(new Error("kart size is invalid, pls add items init :)"))
    })
}

const createId = () => {
    return "ODID4585"
}


createOrder(kart).then((id) => {
    console.log(`Order created with Order ID: ${id}`)
    return id
}).then((id) =>{
    console.log("Proceeding to payment")
    return proceedToPayment(id)
}).then((id) => {
    return showOrderSummary(id);
}).then((msg) => {
    console.log(msg)
    console.log(`Wallet Balance is : ${afterPayment}`)
}).catch((err) => {
    console.log(err.message)
})

