/*
PROBLEMS WITH setAttribute is that it over writes the whole css  
*/

//  so we use style method in dom
const para = document.querySelector('p')
para.style.color = 'crimson'
// console.log(para.style.textAlign)
para.style.textAlign="center"
para.style.fontFamily="Monospace"
para.style.border="solid"
para.style.padding="20px"
para.style.borderRadius="50%"
para.style.