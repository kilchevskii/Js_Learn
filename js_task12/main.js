// В данной задаче Вам нужно удалить из одного массива все элементы второго массива.
// Например:

// arrayDiff([1,2],[1]) ==> [2]
// arrayDiff([1,2,2,2,3],[2]) ==> [1,3]




let arrayDiff = (str) => {
    return str.filter((item, index, array) => {
      return  array.indexOf(item) === index;
    });
}
console.log(arrayDiff([1,2,2,2,3],[2]))