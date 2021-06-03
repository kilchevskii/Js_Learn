// Завершите решение так, чтобы оно разбило строку на пары из двух символов. 
// Если строка содержит нечетное количество символов, она должна 
// заменить отсутствующий второй символ последней пары подчеркиванием ('_'). 

function solution (str) {
  let result = []
  for(let i = 0; i < str.length; i += 2) {
    if (i === str.length - 1) {
      result.push(str.slice(i) + '_')
    } else {
      result.push(str.slice(i, i + 2))
    }
  } return result
}
console.log(solution('abcdef'));

