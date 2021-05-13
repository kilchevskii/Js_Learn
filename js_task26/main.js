// Напишите функцию startsWith(), которая определяет, начинается ли строка символами другой строки, 
// возвращая, соотвественно, true или false.

// let str = 'abc def ghi jkl mno pqr stu';

// String.prototype.startsWith = function(start) {};

// str.startsWith('abc')



let str = 'abc def ghi jkl mno pqr stu';
String.prototype.startsWith = function(start) {
   str = String(str);
   let regex = new RegExp('^' + start, 'g'),
       res = regex.test(str);
   return res;
}

console.log(str.startsWith('abc'));