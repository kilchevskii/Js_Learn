// Напишите функцию `copyArr(arr)`, которая копирует массив, не изменяя оригинал.

// `let vegetables = ['Капуста', 'Репа', 'Редиска'];`

// `function arrayClone(arr) {}`
let vegetables = ['Капуста', 'Репа', 'Редиска'];
let clone = []

let arrayClone = arr => {
  return clone = arr.slice()
  };

console.log((arrayClone(vegetables)));
console.log(vegetables)
