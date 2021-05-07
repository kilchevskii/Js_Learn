// В этом небольшом задании вам дана строка чисел, разделенных пробелами,
//  и Вы должны вернуть самое большое и самое маленькое число.

// Например:
// list("4 5 29 54 4 0 -123 666 -64 1 -3 6 -6") ----> "666 -123"

let list = (str) => {
  str = str.split(' ');
  let numMax = str[0];
  let numMin = str[0];
  for (i = 1; i < str.length; i++) {
    if (str[i] > numMax) {
      numMax = str[i];
    } if (str[i] < numMin) {
      numMin = str[i];
    }
  } 
  
 return numMin +' '+ numMax;
} 

console.log(list("4 5 29 54 4 0 -123 666 -64 1 -3 6 -6"));

