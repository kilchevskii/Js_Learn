// Что такое анаграмма? Что ж, два слова являются анаграммами друг друга, если они оба содержат одинаковые буквы. 
// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']
// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []


function anagrams(str) {
  let checked = a.split('').sort().join('')
  return b.filter(item => item.split('').sort().join('') === checked)
  }

console.log(anagrams('laser', ['lazing', 'lazy',  'lacer']));

