// Напишите функцию capitalizeFirstLetter(str), которая преобразовывает первый символ строки в верхний регистр.

// Например:

// let str="пример строки";

// function capitalizeFirstLetter(str) {};

let str = "пример строки"

let capitalizeFirstLetter = str => {
   return str.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ')
}

console.log(capitalizeFirstLetter(str))