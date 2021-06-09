// Напишите функцию, которая принимает строку круглых скобок и определяет, допустим ли порядок скобок. 
// Функция должна возвращать истину, если строка действительна, и ложь, если она недействительна.
// validParentheses(')(()))') => false
// validParentheses('()') => true
// validParentheses('()()') => true
// validParentheses('()((()') => false
function validParentheses(str){
    left = str.split('').filter(item => item == ')')
    rigth = str.split('').filter(item => item == '(')
    return left.length === rigth.length
}
console.log(validParentheses('(()))'));

// function validParentheses(str){
//     let lengthStr = 0;
//     for(let i = 0; i < str.length; i++) {
//         if(str[i] == '(') lengthStr++;
//         if(str[i] == ')') lengthStr--;
//         if (lengthStr < 0) return false;
//     }
//     return lengthStr == 0;
// }
// console.log(validParentheses(')(()))'));