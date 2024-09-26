// destructuring from object
const actor = {
    name: 'rakib',
    age: '25',
    phone: '01794181719',
    location: 'tangail'
}
// const name = actor.name;
// const age = actor.age;
// const phone = actor.phone;
// const location = actor.location;
const { location, age } = actor;

// console.log(name);
// console.log(age);
// console.log(phone);
console.log(location, age);

// destructuring from an array
const numbers = [15, 45];
const [first, second] = numbers;
const [x, y] = [12, 24];

// 
function doubleThem(a, b) {
    return [a * 2, b * 2];
}
// const [] = doubleThem(6, 9);
const [prothom, ditiyo] = doubleThem(6, 9);
console.log(prothom, ditiyo);