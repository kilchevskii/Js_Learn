// Допустим, Вы знакомы с понятием "идеальный квадрат". (Например: 12 * 12 = 144). 
// А как найти следующий по очереди идеальный квадрат?
// Напишите функцию findNextSquare, которая находит следующий целочисленный идеальный квадрат после того, 
// как он передан в качестве параметра. Напомним, что целочисленный идеальный квадрат - это такое целое число n, sqrt (n) которого тоже является целым числом.
// Если параметр сам по себе не является идеальным квадратом, то должно быть возвращено -1. Вы можете предположить, что параметр положительный.

// findNextSquare = (sq) => {

// return
// }
// let findNextSquare = function(sq)  {
//   if (Math.sqrt(sq**sq) % 1 == 0){
//       console.log(`returns ${(sq+1)**2}`)
//   } else {
//       console.log(`returns -1 since ${sq} is not a perfect`);
//   };
// }
// findNextSquare(11)





let findNextSquare = function(sq)  {
  if (Math.sqrt(sq**sq) % 1 == 0){
     return sq = (sq+1)**2;
  } else {
     return sq;
  };
}
  

if (findNextSquare() == true) {
  console.log(`returns ${(findNextSquare.sq+1)**2}`);
} else {
  console.log(`returns -1 since ${findNextSquare.sq} is not a perfect`)
}


findNextSquare(121)
