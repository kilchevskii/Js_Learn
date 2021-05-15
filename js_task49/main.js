// Найдите недостающую букву.

// Напишите функцию, которая принимает в качестве параметра массив букв, 
// расположенных по алфавиту и возвращает массив с недостающей буквой. 
// Длина входного массива не меньше 2 и он содержит буквы только одного регистра.

// Например:

// findMissingLetter(['a','b','c','d','f']) -> 'e'


function findMissingLetter(arr){
  let num = 97;
  for(let letter of arr){
      if(letter.charCodeAt(0) !== num) return String.fromCharCode(num);
      num++;
  }
  return String.fromCharCode(num)  
}
console.log(findMissingLetter(['a','b','c','d','f']))