const difference = (x, y) => x - y;
const multiply = (first, second, third) => first * second * third;

// single parameter or one parameter
const getAge = (person) => person.age;
const student = { name: 'rakib', age: '25' };
const age = getAge(student);
console.log(age);

const getThird = numbers => numbers[2];
const third = getThird([2, 5, 7]);
console.log(third);

const doubleIt = (num) => num * 2;
const double = doubleIt(5);
console.log(double);

// no parameter
const getPI = () => Math.PI
console.log(getPI());

// large arrow function
const doMath = (x, y, z) => {
    const sum = x + y + z;
    const multi = x * y * z;
    const result = sum + multi;
    return result;
}
const all = doMath(5, 3, 2);
console.log(all);