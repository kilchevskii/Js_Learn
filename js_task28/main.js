// Напишите функцию removeDuplicate(str), которая возвращает строку, 
// очищенную от слов-дупликатов, т.е. каждое слово должно повторяться не более одного раза.

// let str = "вишня, груша, слива, груша";

// function removeDuplicate(str) {};

// removeDuplicate(str)

let str = "вишня, груша, слива, груша";

let removeDuplicate = (str) => {
return str.split(',').filter((item, index, array) => {return array.indexOf(item) === index;}).join('')}

console.log(removeDuplicate(str))