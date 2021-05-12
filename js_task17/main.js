// Напишите функцию, которая принимает строковый параметр и меняет буквы
// в словах в обратном порядке. Все пробелы в строке должны быть сохранены.

// Например:

// This is an example! -> sihT si na !elpmaxe


let reversive = (str) => {
    return str.split(' ').reverse().join(' ')
}

String.prototype.reverseStr = function(){
    return [...this].reverse().join("")
 }

console.log(reversive("This is an example!").reverseStr())

