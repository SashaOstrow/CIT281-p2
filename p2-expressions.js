/*
    CIT 281 Project 2
    Name: Sasha Ostrow
*/

// Returns a random number between min (inclusive) and max (exclusive)
const getRandomInteger = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// Returns a single, random, lowercase letter
const getRandomLetter = function () {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    return alphabet[getRandomInteger(0, alphabet.length)];
}

// Returns between minLength and maxLength
const getRandomString = function (minLength, maxLength) {
    let result = "";
    const length = getRandomInteger(minLength, maxLength);
    for (let i = 0; i < length; i++) {
        result += getRandomLetter();
    }
    return result;
}


console.log(getRandomString(10, 20));
