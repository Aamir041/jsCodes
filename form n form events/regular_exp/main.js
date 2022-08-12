const forms = document.querySelector('form')
forms.addEventListener('submit',e=>{
    e.preventDefault()
    // console.log(forms.username.value)
})

const str1 = ["aamirs","@aamirs%","@amir","a@mir","aamir$"]

/* Regular expression should start with "/" and end with a "/" */

/* In below  variable callled pattern we are checking for string to be of atlest length 6 and should consist of lower case letters only */

const pattern1 = /[a-z]{6,}/

for(let i =0; i<str1.length; i++){
    console.log(`${i} ${str1[i]} is ${pattern1.test(str1[i])}`)
}
console.log("  ")
/* 
"@aamirs%"" is true but "@amir" is false cause /[a-z]{6,}/ check that if that if a input string consist
of 6 or more lower case letter or not and "@amir" contains only 4 lower case letters and  "@aamirs%" of
6 lower case letters symbols does not matter and is not considered as a valid input text for this test 
*/

// test for lower case letter to be at start

const pattern2 = /^[a-z]{5,}/
const str2 = ["ghost","bl@aaxddck", "@amir","twister$","terter$tert$","@m@"]

for(let i =0; i<str2.length; i++){
    console.log(`${i} ${str2[i]} is ${pattern2.test(str2[i])}`)
}

/*

"bl@aaxddck" is rejected string but "terter$tert$" is accepted despite symbol being in middle of
string that because in "bl@aaxddck" before $ there are only 2 lower case letter and after $ that  
there are more 5 lower case letter and the our pattern tests from begining and if there is any flase condition in between it report false but for "terter$tert$" it is truue

*/

console.log("")

// test for lower case letter to be at end

const pattern3 = /[a-z]{3,}$/
const str3 = ["ghost","bl@ck","c@root" ,"@amir","twister$","@m@"]

for(let i =0; i<str3.length; i++){
    console.log(`${i} ${str3[i]} is ${pattern3.test(str3[i])}`)
}
