var compose = function (functions) {
    return function (x) {
        if (functions.length === 0) return x;
        let input = x;

        for (let i = functions.length - 1; i >= 0; i--) {
            const currFunc = functions[i];

            input = currFunc(input);
        }

        return input;
    };
};


//-------------------------------------------------------
/**
 * @param {Function[]} functions
 * @return {Function}
 */
// Compose function that takes an array of functions
var compose = function (functions) {
    // Return a new function
    return function (x) {
        // Start with the initial value of x
        let result = x;

        // Iterate over the functions array from right to left
        for (let i = functions.length - 1; i >= 0; i--) {
            // Apply each function to the current result
            result = functions[i](result);
        }

        // Return the final result after applying all functions
        return result;
    };
};




/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */