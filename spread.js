// if its not an array we get get highest by this method
const max = Math.max(6, 15, 23, 55, 1, 3, 5);
// console.log(max);

// but if number declare inside an array we must use this method
// step1: get out all the numbers inside of an array
// step2: then ... three dot before declared variable
const numbers = [2, 1, 6, 4, 7, 85, 5, 9, 25, 55, 35];
const arrayMax = Math.max(...numbers);
// console.log(...numbers);
// console.log(arrayMax);

// use spread operator to copy
const friends = [2, 5, 55, 7, 9]
const bondhu = friends;
const dosto = [...friends];
console.log(dosto);
friends.push(100);
console.log(dosto);
console.log(friends);

const bigNumber = [...friends, 250];
console.log(bigNumber);
