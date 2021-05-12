// Напишите функцию, которая возвращает сумму двух наименьших положительных чисел,
//  учитывая массив из минимум 4 положительных чисел.

// Например:

// [12,423,54,1235,3,15,2,52] => 5


// let sumTwoNum = (num) => {
//   return num.slice().sort((a, b) => a - b).slice(0, 2).reduce((a, b) => a + b);
// }

// console.log(sumTwoNum([-12,-423,54,-1235,-3,-15,-2,52]))

let sumTwoNum = (num) => {
  return num.sort((a, b) => a - b).slice(-4).sort((a, b) => a - b).slice(0, 2).reduce((a, b) => a + b)
}

console.log(sumTwoNum([-12,-423,54,-1235,3,15,-2,52]))