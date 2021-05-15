// Что такое анаграмма?

// Два слова являются анаграммами между собой, если они оба содержат одинаковые буквы.

// Например: 'abba' & 'baab' == true

// Напишите функцию, которая находит все анаграммы слова из списка. В качестве параметра даны слово и массив слов.
//  Функция должна возвращать массив всех анаграмм или пустой массив, если анаграмм не обнаружено.

// Например:

// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']


let anagrams = (a, b) => {
  let checked = a.split('').sort().join('')
  return b.filter(item => item.split('').sort().join('') === checked)
} 

console.log(anagrams('abba', [ 'aabb', 'abcd', 'bbaa', 'dada']))
  
