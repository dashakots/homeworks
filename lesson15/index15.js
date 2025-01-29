
// Задача 1 

const arr = [45,2,6,8,9,15,-8,-14,51,18, 30, -5];

const resultAverage1 = arr.filter((el) => el % 2 === 0).reduce((sum, el) => sum + el) / arr.filter((el) => el % 2 === 0).length
console.log(`Среднее арифметическое четных элементов = ${resultAverage1}`);

const resultAverage2 = arr.filter((el) => el % 3===0).reduce((sum, el) => sum + el)
console.log(`Сумма элементов кратных трем = ${resultAverage2}`);

const arr2 = arr.filter((el) => el > 0)
console.log(`Новый массив без отрицательных чисел : ${arr2}`);




// задача 2 

const nearestToAverage = function(arr)  {
    const average = arr.reduce((a, b) => a + b) / arr.length; // среднее арифметическое элементов
    return arr.reduce((closest, num) => {
        return Math.abs(num - average) < Math.abs(closest - average) ? num : closest;
    });
};
console.log(nearestToAverage([5, 20, 12, 16, 25]));


// Задача 3 




// Задача 4 




// Задача 5 

