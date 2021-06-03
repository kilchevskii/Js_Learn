// Вам будет дано слово. Ваша задача - вернуть средний символ слова.
// Если длина слова нечетная, вернуть средний символ.
// Если длина слова четная, вернуть 2 средних символа.

// GetMiddle("test") should return "es"
// GetMiddle("testing") should return "t"
// GetMiddle("middle") should return "dd"
// GetMiddle("A") should return "A"

function getMiddle (str) {
  if (str.length % 2 == 0) {
    return str.split('').slice((str.length/2) - 1, (str.length/2) + 1).join('')
  }
    return str.split('').slice((str.length/2), (str.length/2) + 1).join('')
}
console.log(getMiddle('testing'));