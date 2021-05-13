// Напишите функцию isUpperCase(str, character), которая определяет,
//  в каком регистре написан символ строки в указанной позиции. 
//  Если он написан в верхнем регистре - возвращать true, если в нижнем – false.

// function isUpperCase(str, character) {};

// isUpperCase('tasks JavaScript', 6); // true
let isUpperCase =(str, index) => {
   return str.charAt(index).toUpperCase() === str.charAt(index);
};
console.log(isUpperCase('tasks javaScript', 6))

