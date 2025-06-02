/*
    CIT 281 Project 2
    Name: Sasha Ostrow
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let result = "";
  
  for (let i = 0; i < getRandomInteger(10, 20);  i++) {
    result += getRandomLetter();
  }
  
  console.log(getRandomString(10,20));

// will return a single, random, lowercase letter
  function getRandomLetter() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    return alphabet[getRandomInteger(0, alphabet.length)];
  }

  function getRandomString(minLenght, maxLength){
    for (let i = 0; i < getRandomLetter(10, 20);  i++) {
        result += getRandomLetter();
      }
      return result;
  }