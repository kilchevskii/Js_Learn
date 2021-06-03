// Изограмма - это слово, в котором нет повторяющихся букв, последовательных или непоследовательных. 
// Реализуйте функцию, которая определяет, является ли строка, содержащая только буквы, изограммой. 
// Предположим, что пустая строка является изограммой. Игнорировать регистр букв.
// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case

function isIsogram (str) {
  let newStr = str.toLowerCase().split('').filter((item, index, array) => array.indexOf(item) === index).join('')
  let ravno = newStr === str.toLowerCase();
  return ravno
}
console.log(isIsogram(''));