// Напишите функцию removeDuplicates(arr), которая возвращает массив, в котором удалены повторяющиеся элементы из массива arr.

// let arr = ["php", "php", "css", "css", "script", "script", "html", "html", "java" ];

// function removeDuplicates(arr) {}

// removeDuplicates(arr);
let arr = ["php", "php", "css", "css", "script", "script", "html", "html", "java" ];

let removeDuplicates = arr => {
  return arr.filter((item, index, array) => {return array.indexOf(item) === index;})}

console.log((removeDuplicates(arr)));
