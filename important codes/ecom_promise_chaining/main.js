const kart = ["shoes", "bag", "deo", "cricket bat"]

const validateKart = (kart) => kart.length > 0 ? true : false;

const proceedToPayment = (id) => {
    const details = {
        balance: 100,
        bill:400,
        Id:id
    };
    return new Promise((resolvePay,rejectPay) => {
        details.balance > details.bill ? resolvePay(details) : rejectPay(new Error("You dont have enough balance to procees :("))
    })
}

const updateWallet = (detailObj) => {
    detailObj.balance = detailObj.balance - detailObj.bill;
    return (detailObj)
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
}).then((detailObj) => {
    console.log(`Your Order:${detailObj.Id} of Rs.${detailObj.bill} has been payed successfully!`)
    return updateWallet(detailObj)
}).then((detailObj) => {
    console.log(`Your Current Balance is ${detailObj.balance}`)
}).catch((err) => {
    console.log(err.message)
})