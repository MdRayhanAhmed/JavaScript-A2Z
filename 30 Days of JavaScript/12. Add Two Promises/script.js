/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {

    // Wait for both promises to resolve and retrieve their values
    const [value1, value2] = await Promise.all([promise1, promise2]);

    // Return a new promise that resolves with the sum of the values
    return value1 + value2;
};

/**
* TypeScript
 * async function addTwoPromises(promise1: Promise<number>, promise2: Promise<number>):       *  Promise<number> {
* let result: number = 0;
* result += (await promise1).valueOf();
* result += (await promise2).valueOf();
  return result;
};

 */