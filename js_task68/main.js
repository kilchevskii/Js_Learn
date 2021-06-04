// Напишите функцию, которая принимает массив из 10 целых чисел (от 0 до 9), 
// который возвращает строку этих чисел в форме номера телефона. 
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) => returns "(123) 456-7890"


function createPhoneNumber(arr) {
  fnum = arr.slice(0, 3).join('');
  twnum = arr.slice(3, 6).join('');
  thnum = arr.slice(6, 10).join('');
  return `(${fnum}) ${twnum}-${thnum}`
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));