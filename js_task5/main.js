// Банкоматы допускают 4 или 6-значные ПИН-коды, а ПИН-коды не могут содержать ничего, кроме 4 цифр или 6 цифр.

// Если функции передана правильная строка PIN, верните true, иначе верните false.

// Например:

// correctPin('5567') --> true
// correctPin('5432567') --> false

let correctPin = (str) => {
    if (str.length > 6 || str.length < 4) {
    return false
    } else if (str == Number(str)) {
      return true
    } else {
      return false
    }
  }
console.log(correctPin("1111111"));
