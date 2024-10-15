// Problem 06 - Conditional Statements: If-Else

function getGrade(score) {
    let grade;
    // Write your code here
    if (score > 25 && score <= 30) {
        grade = "A";
    }
    if (score > 20 && score <= 25) {
        grade = "B";
    }
    if (score > 15 && score <= 20) {
        grade = "C";
    }
    if (score > 10 && score <= 15) {
        grade = "D";
    }
    if (score > 5 && score <= 10) {
        grade = "E";
    }
    if (score > 0 && score <= 5) {
        grade = "F";
    }

    return grade;
}


console.log(getGrade(11))


// Problem 07 - Conditional Statements: Switch

function getLetter(s) {
    let letter;
    // Write your code here
    switch (s[0]) {
        case 'a' || 'e' || 'i' || 'o' || 'u':
            letter = 'A';
            break;
        case 'b' || 'c' || 'd' || 'f' || 'g':
            letter = 'B';
            break;
        case 'h' || 'j' || 'k' || 'l' || 'm':
            letter = 'C';
            break;
        default:
            letter = 'D';
    }

    return letter;
}

console.log(getLetter('adfgt'))

// Problem 08 -  Loops

function vowelsAndConsonants(s) {
    for (let i = 0; i < s.length; i++) {
        if (s[i] == 'a' || s[i] == 'e' || s[i] == 'i' || s[i] == 'o' || s[i] == 'u') {
            console.log(s[i]);
        }
    }
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== 'a' && s[i] !== 'e' && s[i] !== 'i' && s[i] !== 'o' && s[i] !== 'u') {
            console.log(s[i]);
        }
    }
}

vowelsAndConsonants('javascriptloops')