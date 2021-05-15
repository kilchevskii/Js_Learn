// Напишите функцию, которая принимает число n (n> 0) и возвращает обратную последовательность от n до 1.

// Например, если n = 5 на выходе у Вас должно быть 5,4,3,2,1.
// Напишите функцию, которая принимает число n (n> 0) и возвращает обратную последовательность от n до 1.

// Например, если n = 5 на выходе у Вас должно быть 5,4,3,2,1.

 
let prevNumber = number => {
  let count = '';
  if (number > 0) {
    for (let i = 0; i < number; i++) {
      count = count + ' ' + String(number - i);
    } return count
  } else {
    return ("Некорректное число");
  }}


console.log(prevNumber(10));




// let sum = arr => {
//   let newStr = '';
//   for (i = 0; i < arr.length; i++) {
//     newStr = newStr + ' ' + String(arr[i])
//   } return newStr
// }


// console.log(sum(['я', 'люблю', 'маму']))

