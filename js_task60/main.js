// Создайте функцию с именем divisors / Divisors, которая принимает целое число n> 1 и возвращает
// массив со всеми делителями целого числа (кроме 1 и самого числа), от наименьшего до наибольшего. 
// Если число простое, верните строку '(integer) is prime' 
function divisors(num) {
  let mas = [];
  for(let i = 2; i < num; i++) {
    if(num % i == 0) {
    mas.push(i)
    } 
  } 
  if (mas.length == 0) {
    return num + ' is prime'
  } else {
    return mas
  }
}

console.log(divisors(12));

