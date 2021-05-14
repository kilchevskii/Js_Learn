// Дан массив слов, необходимо определить, составлены ли все слова из одних и тех же символов. 
// Функци/ реализовать как принимающую переменное число аргументов.

// ["кот", "ток", "кто"] - true
// ["кот", "тк", "кТо"] - false

function checkAnagram(arr) {
   if (!arr || arr.length <= 1) return false  
  let first_word = arr[0].split("").sort().join("");
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].split("").sort().join("") != first_word) {
      return false;
    }
  }
  return true;
}


console.log(checkAnagram(["кот", "ток", "кто"]));
