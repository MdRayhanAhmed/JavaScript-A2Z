//1.

const promise = new Promise((resolve, reject) => {
    isNameExist = true;
    if (isNameExist) {
        resolve("User name exist")
    } else {
        reject("error")
    }
})
promise.then(result => console.log(result)).catch(() => { console.log('error!'); });


//-----------------------------------------------------
//2


//----------------------------------------------------
//3



