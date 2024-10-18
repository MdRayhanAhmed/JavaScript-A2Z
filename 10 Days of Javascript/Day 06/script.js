// Problem 18 - Day 6: Bitwise Operators

function getMaxLessThanK(n, k) {
    let max = 0;
    for (let a = 1; a <= n; a++)
        for (let b = a + 1; b <= n; b++) {
            let x = a & b;
            if (max < x && x < k)
                max = x;
        }
    return max;
}


// Problem 19 - Day 6: JavaScript Dates

// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
    let dayName = new Date(dateString);
    return dayName.toLocaleString("en-US", { weekday: 'long' });
}