// Напишите функцию, которая проверит, является ли строка палиндромом.
// (Для того, чтобы решить эту задачу, надо загуглить)


let palindrom = str => {
    str.toLowerCase();
    return str === str.split('').reverse().join('')
}

console.log(palindrom("anna"))

