// Напишите функцию colonOdd(num), которая принимает число num в качестве аргумента 
// и вставляет двоеточие (:) между двумя нечетными числами. 
// Например, если вводится число 55639217, то на выходе должно быть 5:563:921:7.


function colonOdd (num) {
  let str = num.toString();
  let result = [str[0]];
  for(let i=1; i<str.length; i++) {
      if((str[i-1]%2 !== 0)&&(str[i]%2 !== 0)) {
        result.push(':', str[i]);
       }
      else {
        result.push(str[i]);
      }
  }
  return result.join('');  
}

console.log(colonOdd('55639217'));
