// Учитывая список целых чисел, определите, является ли сумма его элементов нечетной или четной.

// Дайте свой ответ в виде строки, соответствующей «нечетному» или «четному».

// Если входной массив пуст, считайте его: [0] (массив с нулем). 
// oddOrEven: [0] => "even"
// oddOrEven: [0, 1, 4] => "odd"
// oddOrEven: [0, -1, -5] => "even"

function oddOrEven(arr) {
  let sum = arr.reduce((sum, item) => item + sum, 0)
  return sum % 2 == 0 ? 'even' : 'odd'
}
console.log(oddOrEven([0]));