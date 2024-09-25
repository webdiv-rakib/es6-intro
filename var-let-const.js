/**
 * 1. var: now reason to use var
 * 2. let: allow it to reassign
 * 3. const: do not allow it to reassign
 */

const money = 25;
const rich = money + 25
console.log(rich);

let count = 0;
count = count + 10;
console.log(count);

const numbers = [5, 7, 8, 9, 11, 15, 17];
numbers[0] = 3;
numbers.push(18, 22, 28);
console.log(numbers);

// object
const student = {
    name: 'Rakib',
    class: '12'
}
student.name = 'Rakibul Hassan';
console.log(student);

let sum = 0
for (let i = 0; i < 10; i++) {
    sum = sum + i;
}
console.log(sum);