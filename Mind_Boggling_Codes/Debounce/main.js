let counter = 0; 
const getData = () =>{
    console.log(counter++," : Fetching data ...");
};

const debounce = (callBack,delay) =>{
    let timer;
    return function (){
        clearTimeout(timer)
        timer = setTimeout(() => {
            callBack();
        }, delay);

    }
}

const betterFunction = debounce(getData,300) 
