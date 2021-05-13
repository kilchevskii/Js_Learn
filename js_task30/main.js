// Напишите функцию unique_letters(str), которая возвращает строку, оставив в ней только уникальные символы, т.е. встречающиеся в строке один раз.

// function unique_letters(str) {};

// unique_letters('anaconda')

let unique_letters = (str) => {
return str.split('').filter((item, index, array) => {return array.indexOf(item) === index;})}

console.log(unique_letters('anaconda'));
