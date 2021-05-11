// Напишите функцию, которая возвращает минимальное и максимальное значение заданного массива.
// Например:

// [1, 5, 8, 10, 35, 100] --> [1, 100]
// [-5, -7, -2, 5] --> [- 7, 5]

// mas = [1, 5, 8, 10, 35, 100, 333, -123, -2, 243]
// let compare = function() { 
//     let min = 0;
//     let max = 0;
// for (i = 0; i < mas.length; i++) {
//     if (mas[i] > max) {
//     max = mas[i];
//     } if (mas[i] < min) {
//     min = mas[i];
//     }  
// }
// return min + ", " + max  
// }

// console.log(compare(mas))

mas = [1, 5, 8, 10, 35, 100, 333, -123, -2, 243]
let compare = function() { 
    let max = mas.sort(function(a, b) { return a - b; }).pop();
    let min = mas.sort().shift();
return min + ", " + max  
}

console.log(compare(mas))