// Учитывая список целых чисел, определите, является ли сумма его элементов нечетной или четной.

// Дайте свой ответ в виде строки, соответствующей «нечетному» или «четному».

// Если входной массив пуст, считайте его: [0] (массив с нулем). 
// Input: [0]
// Output: "even"

// Input: [0, 1, 4]
// Output: "odd"

// Input: [0, -1, -5]
// Output: "even"

function oddOrEven(arr) {
  let sum = arr.reduce((sum, item) => item + sum, 0)
  return sum % 2 == 0 ? 'even' : 'odd'
  //   return 'even'
  // } 
  //   return 'odd'
}
console.log(oddOrEven([0]));