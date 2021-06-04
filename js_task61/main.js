// Напишите функцию так, чтобы она разбивала оболочку camelCase, используя пробел между словами.

// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
  return(string.replace(/([A-Z])/g, ' $1'));
}

console.log(solution("camelCaseSnake"));

