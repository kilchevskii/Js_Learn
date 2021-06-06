// Переместите первую букву каждого слова в его конец, затем добавьте «ау» в конец слова. Не трогайте знаки препинания. 
// pigIt('Pig latin is cool') =>'igPay atinlay siay oolcay'
// pigIt('This is my string') =>'hisTay siay ymay tringsay'
function pigIt(str){
  return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}

console.log(pigIt('Pig latin is cool'));