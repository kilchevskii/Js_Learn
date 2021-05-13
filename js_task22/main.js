// Преобразовать массив
// Ваша задача - реализовать функцию transform(arr), которая принимает массив и
//  возвращает преобразованный массив на основе управляющих последовательностей, содержащихся в arr. 
//  Управляющие последовательности - это определенные строковые элементы указанного массива:

// --discard-next исключает следующий элемент массива из преобразованного массива.
// --discard-prev исключает предыдущий элемент массива из преобразованного массива.
// --double-next удваивает следующий элемент массива в преобразованном массиве.
// --double-prev удваивает предыдущий элемент массива в преобразованном массиве.

// Например:

// transform ([1, 3, '--double-next', 4]) => [1, 3, 4, 4]

// transform ([1, 3, '--discard-prev', 4]) => [1, 4]


// let transform = arr => { 
//    return arr.indexOf('--double-prev');
// }


let transform = arr => {
     const index = arr.findIndex((item, index) => {
     switch (item) {
      case '--discard-prev':
      case '--double-next':
      case '--discard-next':
      case '--double-prev':
      return index
      }
})
    arr.find((item) => {
      switch(item) {
      case '--discard-prev':
      return arr.splice(index - 1, 2)
      case '--double-next':
      return arr.splice(index, 1, index * 2)
      case '--discard-next':
      return arr.splice(index, 2)
      case '--double-prev':
      return arr.splice(index-1, 2, index *2)
      }}
   );
return arr
}
console.log(transform([1,3,'--double-prev',4]))

