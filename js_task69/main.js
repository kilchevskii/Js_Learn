// Нарциссическое число - это число длины n, в котором сумма цифр в степени n равна 
// исходному числу. 
// isNarcissistic(153) => true;
// isNarcissistic(435) => false;
// isNarcissistic(370) => true;
// isNarcissistic(1032) => false;

function isNarcissistic(num){
  let len = num.toString().split('').length
  let n = num.toString().split('').map(item => item ** len).reduce((a, b) => a + b)
  return num == n
}

console.log(isNarcissistic(1032));