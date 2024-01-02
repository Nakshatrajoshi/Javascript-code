// let obj = {
//     harry: 90,
//     shubh: 45,
//     shivika: 56,
//     ritika: 57,
//     shiv: 23,
// }

const PromptSync = require('prompt-sync');



// for (let a in obj){
//     console.log(" Marks of "+ a + " are : " + obj[a])
// }

// for (let b of "Karti"){
//     console.log(b)
// }
const prompt = require('prompt-sync')();

let n = prompt(" Enter the value of n ")
n = Number.parseInt(n)

let i = 0;
while (i <= n) {
    console.log(i)
    i++;
} 

