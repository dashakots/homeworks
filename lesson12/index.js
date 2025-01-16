
// Задача 1

let str1 = "Hello";
let str2 = "world";

console.log(str1.concat(", ",str2,"!"));

// Задача 2, задача 3

let str3 = "I learn computer science";

console.log(str3.replaceAll(" ", "_"));
console.log(str3.length);

// Задача 4 

let min = 25;

// 0-14
// 15-29
// 30-44
// 45-59

if (min > 0 && min <= 14 ) {
    console.log("число в первой четверти");
} else if (min >=15 && min <= 29 ) {
    console.log("число во второй четверти");
} else if (min >=30 && min <= 44 ) {
    console.log("число в третьей четверти");
} else if (min >=45 && min <= 59) {
    console.log("число в четвертой четверти");
}

// Задача 5 

let days = prompt("Выберите число для вывода дней недели соответствующим языком: 1 - Английский, 2 - Русский, 3 - Польский, 4 - Белорусский, 5 - Итальянский, 6 - Немецкий")

if (days == 1) {
    console.log("Monday	Tuesday	Wednesday	Thursday	Friday	Saturday	Sunday");
} else if (days == 2) {
    console.log("понедельник	вторник	среда	четверг	пятница	суббота	воскресенье");
} else if (days == 3) {
    console.log("poniedziałek	wtorek	środa	czwartek	piątek	sobota	niedziela");
} else if (days == 4) {
    console.log("панядзелак	аўторак	серада	чацвер	пятніца	субота	нядзеля");
} else if (days == 5) {
    console.log("lunedì	martedì	mercoledì	giovedì	venerdì	sabato	domenica");
} else if (days == 6) {
    console.log("Montag	Dienstag	Mittwoch	Donnerstag	Freitag	Samstag/Sonnabend	Sonntag");
}