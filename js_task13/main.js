// Напишите функцию, которая принимает число n (n> 0) и возвращает обратную последовательность от n до 1.

// Например, если n = 5 на выходе у Вас должно быть 5,4,3,2,1.
// Напишите функцию, которая принимает число n (n> 0) и возвращает обратную последовательность от n до 1.

// Например, если n = 5 на выходе у Вас должно быть 5,4,3,2,1.

 
let prevNumber = (str) => {
  for(let i = 0; i < str; i++) {
   console.log(str - i);
  }
}
prevNumber(5);

