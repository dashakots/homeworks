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
    const arr2 = [];
    for (let i = 0; i < arr.length; i++) {
    if (!arr2.includes(arr[i])){
    arr2.push(arr[i]);
    }
}
return arr2
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


// Задача 5 (см задачу 3)

// Задача 6 

function arrL(n) {
    const Array = [];
    // let sum = 0;
    // let mult = 1;
    // let maxElement = Array[0];
    // let minElement = Array[0];
    for (let i = 0; i <= n; i++) {
    let randomNum = Math.floor(Math.random() * 101)
    Array.push(randomNum);
    // sum += Array[i];
    // mult = sum / n; 
    
    }
    return Array
}

console.log(arrL(5));


// Задача 7 

function arrLen(n) {
    const Arr5 = [];
    Arr5[0] = 1;
    Arr5[1] = 1;
    for (let i = 2; i <= n; i++) {
    Arr5[i] = Arr5[i-1] + Arr5[i-2]
    Arr5.push(Arr5[i]);
    }
    return Arr5
}
console.log(arrLen(8));







