// Напишите функцию, которая меняет местами биты целого числа.
// Например, число 417 в двоичном формате равно 110100001. Обращение двоичного кода - 100001011, что равно 267.
// Можно считать, что число не отрицательное. 
// reverseBits(417) => 267;
// reverseBits(267) => 417; 
// reverseBits(2017) = > 1087; 

function createPhoneNumber(arr) {
  fnum = arr.slice(0, 3).join('');
  twnum = arr.slice(3, 6).join('');
  thnum = arr.slice(6, 10).join('');
  return `(${fnum}) ${twnum}-${thnum}`
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));