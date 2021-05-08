// Функция simple, в качестве параметра принимающая строку слов, возвращает длину самого короткого слова.
// Строка никогда не будет пустой, и вам не нужно учитывать разные типы данных.

let simple = (str) => {
str = str.split(' ');
str = str.map(item => item.length)
str = str.sort().shift();
return str
}
console.log(simple('qwe qwer qq q'));