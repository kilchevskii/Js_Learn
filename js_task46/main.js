// Даны две строки, которые содержат только буквы от a - z. 
// Ваша задача написать функцию, которая возвращает новую отсортированную (по порядку) строку,
//  которая содержит буквы двух строк, повторяющихся только один раз.

// Например:

// longest("xyaabbbccccdefww", "xxxxyyyyabklmopq") --> "abcdefklmopqxy"



let longest = (a, b) => {
  return a.concat(b).split('').filter((item,index,array) => array.indexOf(item) === index).sort().join('')
}

console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"));
