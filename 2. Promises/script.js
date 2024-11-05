//1.

const promise = new Promise((resolve, reject) => {
    isNameExist = true;
    if (isNameExist) {
        resolve("User name exist00")
    } else {
        reject("error00")
    }
})
promise.then(result => console.log(result)).catch(() => { console.log('error00!'); });


//-----------------------------------------------------
//2
const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async task is complete01');
        resolve();
    }, 1000)
})
promiseOne.then(function () {
    console.log('Promise consumed01');

})

//----------------------------------------------------
//3
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async task 2 is complete02')
        resolve()
    }, 1000)
}).then(function () {
    console.log("Async 2 resolved02");
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
            reject("Error: Something went wrong04")
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
    console.log("The Promise is either resolve or reject04");

})

//----------------------------------------------------
//6
// const promiseFive = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = true
//         if (!error) {
//             resolve({ username: "javascript", password: "123" })
//         } else {
//             reject('ERROR: JS went wrong')
//         }
//     }, 1000)
// });

// async function consumePromiseFive() {
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromiseFive()



const promiseFiveTest = new Promise((resolve, reject) => {
    let error = false;
    if (!error) {
        resolve({ username: "Rayhan", password: "1234567" })
    }
    else {
        reject("ERRor: Somthing is wrong05")
    }
})

async function consumePromiseFive() {
    try {
        const response = await promiseFiveTest
        console.log(response);
    }
    catch (error) {
        console.log(error);
    }

}
consumePromiseFive()
//------------------------------------------------------
//7.

async function getAllUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers()

// fetch('https://api.github.com/users/hiteshchoudhary')

fetch('https://api.github.com/users/MdRayhanAhmed')
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.