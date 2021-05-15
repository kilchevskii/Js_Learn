// Напишите функцию comparison(str1, str2), которая сравнивает строки без учёта регистра символов.

// function comparison(str1, str2) {};

// comparison('string', 'StRiNg')

let comparison = (str1, str2) => {
    return  str1.toLowerCase() === str2.toLowerCase();
}

console.log(comparison('string', 'sTrInG'));
