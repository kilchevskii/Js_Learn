// Банкоматы допускают 4 или 6-значные ПИН-коды, а ПИН-коды не могут содержать ничего, кроме 4 цифр или 6 цифр.

const { title } = require("node:process");

// Если функции передана правильная строка PIN, верните true, иначе верните false.

// Например:

// correctPin('5567') --> true
// correctPin('5432567') --> false

let correctPin = (str) => (str == Number(str) && (str.length <= 6 && str.length >= 4)) 
    
console.log(correctPin("666666"));



