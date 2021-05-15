// Найдите недостающую букву.

// Напишите функцию, которая принимает в качестве параметра массив букв, 
// расположенных по алфавиту и возвращает массив с недостающей буквой. 
// Длина входного массива не меньше 2 и он содержит буквы только одного регистра.

// Например:

// findMissingLetter(['a','b','c','d','f']) -> 'e'



let findMissingLetter = arr => {
    let ch0 = arr.join('').charCodeAt(0), ch;
    arr.every(function(v, i){
      ch = String.fromCharCode(ch0 + i);
      return ch === v;
    });
    return ch === arr[arr.length-1] ? undefined : ch;
  }

console.log(findMissingLetter(['a','b','c','d','f']))
  
