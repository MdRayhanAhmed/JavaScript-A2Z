
function memoize(fn) {
    const cache = {}; // This object will store cached results

    return function () {
        // Step 1: Create a unique key from arguments
        let key = '';
        for (const arg of arguments) {
            key += ',' + arg; // Convert each argument to a string and append it to the key
            // console.log(key)
        }

        // Step 2: Check if result is already cached
        if (key in cache) {
            return cache[key]; // Return the cached result if it exists
        }

        // Step 3: Compute the result, cache it, and return it
        const functionOutput = fn(...arguments); // Call the original function with all arguments
        cache[key] = functionOutput; // Store the result in the cache
        return functionOutput; // Return the result
    };
}


function add(a, b) {
    console.log("Computing...");
    return a + b;
}

const memoizedAdd = memoize(add);

console.log(memoizedAdd(1, 2)); // Computes and outputs: "Computing...", 3
console.log(memoizedAdd(1, 2)); // Returns cached result: 3 (without "Computing...")
console.log(memoizedAdd(2, 3)); // Computes and outputs: "Computing...", 5
console.log(memoizedAdd(2, 3)); // Returns cached result: 5 (without "Computing...")