// Функция simple, в качестве параметра принимающая строку слов, возвращает длину самого короткого слова.
// Строка никогда не будет пустой, и вам не нужно учитывать разные типы данных.

let simple = (str) => {
    return str.split(' ').map(item => item.length).sort().shift();
}
console.log(simple('qwe qwer qq q'));