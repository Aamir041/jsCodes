const green = document.querySelector('p')
green.setAttribute('style','color:green;')

// changing the attrribute on p tag here sttribute used is stye

const head1 = document.querySelector('h1')
head1.setAttribute('style','color:blue;')
head1.setAttribute('class','addedByJS')
console.log(head1.getAttribute('class')) // getAttribute is to get value of attribute passed as argument in it 

// in ablove example even though there was no style or class attribute in HTML file it was added by DOM in JS  