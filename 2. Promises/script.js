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
const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async task is complete');
        resolve();
    }, 1000)
})
promiseOne.then(function () {
    console.log('Promise consumed');

})

//----------------------------------------------------
//3
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async task 2 is complete')
        resolve()
    }, 1000)
}).then(function () {
    console.log("Async 2 resolved");
})
//----------------------------------------------------
//4
const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ username: "Md Rayhan Ahmed", email: "rayhanahmed641@gmail.com" })
    }, 1000);
})
promiseThree.then(user => {
    console.log(user);

})
//----------------------------------------------------
//5
const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({ username: "rayhan", password: "12345" })

        } else {
            reject("Error: Something went wrong")
        }
    }, 1000);
})
promiseFour.then((user) => {
    console.log(user);
    // console.log(user.username);
    return user.username;
}).then(username => {
    console.log(username);
}).catch(error => {
    console.log(error);

}).finally(() => {
    console.log("The Promise is either resolve or reject");

})

//----------------------------------------------------
//6
const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: "javascript", password: "123" })
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()
