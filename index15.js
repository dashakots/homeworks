
// Задача 1 

const arr = [45,2,6,8,9,15,-8,-14,51,18, 30, -5];

const resultAverage1 = arr.filter((el) => el % 2 === 0).reduce((sum, el) => sum + el) / arr.filter((el) => el % 2 === 0).length
console.log(`Среднее арифметическое четных элементов = ${resultAverage1}`);

const resultAverage2 = arr.filter((el) => el % 3===0).reduce((sum, el) => sum + el)
console.log(`Сумма элементов кратных трем = ${resultAverage2}`);

const arr2 = arr.filter((el) => el > 0)
console.log(`Новый массив без отрицательных чисел : ${arr2}`);




// задача 2 

function nearToAver(arr)  {
    const average = arr.reduce((a, b) => a + b) / arr.length; 
    console.log(`среднее арифметическое элементов -  ${average}`); 
    return arr.reduce((closest, num) => {
        if (Math.abs(num - average) < Math.abs(closest - average)) {
            return num;
        } else {
            return closest;
        }
    });
};
console.log(`наиболее близкий к среднему арифметическому элемент массива - ${nearToAver([5, 20, 12, 16, 25])}`);


// Задача 3 

function sumBetween (arr) {
    const firstZeroIndex = arr.indexOf(0);
    const lastZeroIndex = arr.lastIndexOf(0);

    let sum = 0;
    for (let i = firstZeroIndex + 1; i < lastZeroIndex; i++) {
        sum += arr[i];
    }
    return sum;
};
console.log(sumBetween([1, 2,0, 3, 4, 5, 6, 7, 8,0,15,36,25,14,25,36,]));


// Задача 4 

function newArr (arr) {
    let k = 5;
    for (let i = 0; i <= k; i++) {
       arr.unshift(Math.round( Math.random() * 100));
    }
    return arr;
}

console.log(newArr([1, 2, 3, 4, 5, 6, 7, 8]));


// Задача 5 

function maxCount(arr) {
    let maxCount = 0;
    let currentCount = 1;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            currentCount++;
        } else {
            if (currentCount > maxCount) {
                maxCount = currentCount;
            }
            currentCount = 1;
        }
    }
    return maxCount
}
    console.log(maxCount([1, 2, 3, 4,4,4,4,4,4,4,4,4, 5, 6, 7, 8,8,9]));