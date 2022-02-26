

const onfulfillment = (result) =>{
    console.log(result);
    console.log("setup the table to eat tacos")
}

const onRejection = (error) =>{
    console.log(error);
    console.log("start cooking pasta");
}

//resolved promise
/*
console.log("haha1")
const promise1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Bring tacos");
    }, 3000);
})
promise1.then(onfulfillment)
console.log("haha2")
*/

//Reject promise

console.log("haha3")
const promise2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject("Not bringing tacos, food truck not there");
    }, 3000);
})
promise2.catch(onRejection)
console.log("haha4")
