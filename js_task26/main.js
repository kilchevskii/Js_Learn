// Напишите функцию startsWith(), которая определяет, начинается ли строка символами другой строки, 
// возвращая, соотвественно, true или false.

// let str = 'abc def ghi jkl mno pqr stu';

// String.prototype.startsWith = function(start) {};

// str.startsWith('abc')

let str = 'abc def ghi jkl mno pqr stu';

String.prototype.startWith = function(start) {
   if(substring.length < this.length) return false;
   return this.substr(this.length - substring.length) === substring;
 };


console.log(start('abc'))
// console.log(str.startsWith('abc'))