let counter = 0; // track karta hai kitne call kiye hai ab tak
const getData = () =>{
    console.log(counter++," : Fetching data ...");
};

const debounce = (callBack,delay) =>{
    let timer;
    return function (){
        clearTimeout(timer) // clear timeout agar user 300 ms ke beech me type karta hai pehle wale setTimeout ke baad.
        timer = setTimeout(() => {
            callBack();
        }, delay);

    }
}

const betterFunction = debounce(getData,300) // debounce ko call karta hai, callback is getData, delay to make API call is 300ms
