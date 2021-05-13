// Напишите функцию unique_letters(str), которая возвращает строку, оставив в ней только уникальные символы, т.е. встречающиеся в строке один раз.

// function unique_letters(str) {};

// unique_letters('anaconda')


function replaceAll(find, replace, str) {
while( str.indexOf(find) > -1) {
str = str.replace(find, replace);
}
return str;
}

console.log(replaceAll(anaconda);
