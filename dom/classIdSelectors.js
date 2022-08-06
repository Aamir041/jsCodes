// getting element by ID
//  this only grabs singal vause id is for singal element
const head2 = document.getElementById('idH2')
console.log(head2)


// getting elemnt by class name, this method is plural
const sel_class = document.getElementsByClassName('one')
// console.log(sel_class)

console.log(typeof sel_class) // checking data type of sel_class, it is an html colletion and we cant not use foreach on this

console.log(sel_class.length)
// sel_class.forEach(element => {
//     console.log(element)
// });
