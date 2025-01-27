// Задача 1 
// 1 вариант 
const arr = [5, 2, 45, 5, 9, 2, 1, 1, 10, 9, 2];
const arr2 = [];
for (let i = 0; i < arr.length; i++) {
    if (!arr2.includes(arr[i])){
    arr2.push(arr[i]);
    }
}
console.log(arr2);
// 2 вариант
const arr3 = [...new Set(arr)];
console.log(arr3);
 

// Задача 2 

let a = 7;
let result = 1;

for (let i = 1; i <= a; i++) {
    result = result * i;
}
console.log(result);

// Задача 3

let year = 2018;

if (year % 4 == 0 && (year % 100 !== 0 || year % 400 == 0)) {
    console.log('Год является високосным')
} else {
    console.log('Год является невисокосным');
}

// Задача 4


let arr4 = [5, 2, 45, 5, 9, 2, 1, 1, 10, 9, 2];
let count = {};

for (let elem of arr4) {
    if (count[elem] === undefined) {
    count[elem] = 1;
    } else {
    count[elem]++;
    }
}
console.log(count);

// Задача 5

const bag = {
    color: "brown",
    size: "small",
    price: 100, 
    material: "leather",
    };
console.log(Object.keys(bag)); //показывает массив со свойствами и их количество 
console.log(Object.keys(bag).length); //показывает просто количество свойств


// Задача 6 (не работает , ерунду какую-то видно написала)

const obj = [
    {name: "Dasha", age: 29}, 
    {name: "Masha", age: 25}, 
    {name: "Roman", age: 35}, 
    {name: "Ivan", age: 15}, 
    {name: "Dina", age: 23}, 
    {name: "Nick", age: 45}, 
    {name: "Kira", age: 18}];

let newObj = [];

for (let i = 0; i < obj.length; i++) {
    if (obj[i].age > 30) {
    newObj.push(obj[i]);
}
}
console.log(newObj);


// Задача 7

const array = [];

for (let i = 0; i < 10; i++) {
    let randomNum = Math.floor(Math.random() * 101)
    array.push(randomNum);
}

console.log(array);






