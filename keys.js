const glass = {
    name: 'glass',
    color: 'golden',
    price: '15',
    isCleaned: true
}
// console.log(glass);
const keys = Object.keys(glass);
// console.log(keys);

const rakib = {
    name: 'Abu Nayim Mohammad Rakib',
    age: '26',
    phone: '01794181719',
    location: 'Tangail',
    islive: true
}
console.log(rakib);
// const information = Object.values(rakib);
// console.log(information);
// [ 'Abu Nayim Mohammad Rakib', '26', '01794181719', 'Tangail' ]
// const pair = Object.entries(rakib);
// console.log(pair);

// we could remove property of an object
// 1.simple way
delete rakib.islive;
// console.log(rakib);
// 2.advance way
const { isCleaned, ...shortGlass } = glass;
// console.log(shortGlass);

// freeze: can not add or remove anything of an object
Object.freeze(glass);
glass.source = 'bangladesh';
console.log(glass);