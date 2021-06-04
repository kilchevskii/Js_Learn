// Найдите самую большую сумму пар в последовательности.
// [10, 14, 2, 23, 19] --> 42 (= 23 + 19)
// [99, 2, 2, 23, 19] --> 122 (= 99 + 23)
function largestPairSum(arr) {
  return arr.sort((a, b) => a - b).slice(-2).reduce((a, b) => a + b)
}
console.log(largestPairSum([99, 2, 2, 23, 19] ));