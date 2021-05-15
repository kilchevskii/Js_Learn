// Что такое анаграмма?

// Два слова являются анаграммами между собой, если они оба содержат одинаковые буквы.

// Например: 'abba' & 'baab' == true

// Напишите функцию, которая находит все анаграммы слова из списка. В качестве параметра даны слово и массив слов.
//  Функция должна возвращать массив всех анаграмм или пустой массив, если анаграмм не обнаружено.

// Например:

// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']


let anagrams = arr => {
  let map = new Map();

  for (let word of arr) {
    let sorted = word.toLowerCase().split("").sort().join("");
    map.set(sorted, word);
  }

  return Array.from(map.values());
}
  
console.log(anagrams(["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"]))
  
