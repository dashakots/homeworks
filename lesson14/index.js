// Задача 1 

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return "составное число";
        }
    }
    return n > 1 , 'простое число';
}

console.log("1", isPrime(1));
console.log("7", isPrime(7));
console.log("9", isPrime(9));


// Задача 2 

function isPalindrome(str) {
     str = str.toLowerCase().replaceAll(" ","");
    return str === str.split('').reverse().join('');
}

console.log(isPalindrome("Анна"));
console.log(isPalindrome("А роза упала на лапу Азора"));
console.log(isPalindrome("стол"));

// Задача 3 

function uniqueValues(arr) {
    let count = {};
    let UniqArr = [];
    
    for (let elem of arr) {
        if (count[elem] === undefined) {
        count[elem] = 1;
        } else {
        count[elem]++;
        }
        UniqArr = Object.keys(count).filter(key => count[key] === 1); 
    }
     return UniqArr
}
console.log(uniqueValues([5, 2, 45, 5, 9, 2, 1, 1, 10, 9, 2]));

// Задача 4 

function sumRange(start, end) {
    let result = 0;

    for (let i = start; start <= end; start++) {
        result = result + start ;
    }
   return result
}
console.log(sumRange(5,10));
console.log(sumRange(1,4));


// Задача 5 

// Задача 6 

function arrL(n) {
    const Array = [];
    let sum = 0; 
    for (let i = 0; i <= n; i++) {
    let randomNum = Math.floor(Math.random() * 101)
    Array.push(randomNum);
    sum += randomNum;
}
    console.log(Array);

    let maxElement = Math.max(...Array);
    let minElement = Math.min(...Array);
       
    let Aver = sum / Array.length ;

    console.log(`минимальное значение - ${minElement}, максимальное значение - ${maxElement}, сумма всех элементов - ${sum}, 
        среднее арифметическое - ${Aver}`);
    return Array;
}


console.log(arrL(5));


// Задача 7 

function arrLen(n) {
    const Arr5 = [0, 1];
    for (let i = 2; i < n; i++) {
    Arr5[i] = Arr5[i-1] + Arr5[i-2]
    
    }
    return Arr5.slice(0,n);
}
console.log(arrLen(15));







