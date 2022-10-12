let fruits ={
    0:"Apple",
    1:"Mango",
    2:"Grape",
    3:"Date",
    length:4,
    append(){
        [].push.call(this,...arguments)
    },
    remove(){
        [].pop.call(this)
    }
}

fruits.append("Dragon Fruit")
console.log(fruits)
fruits.append("Kiwi","Melon")
console.log(fruits)
fruits.remove()
console.log(fruits)
