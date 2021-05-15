// Напишите функцию expand(arr), которая разворачивает вложенный массив любой глубины.

// let arr1 = [1, [2,[3,[4]]]];

// let arr2 = [1, [2], [3, [[4]]],[5,6]];

// function expand(arr) {}

// expand(arr1); // 1,2,3,4
// expand(arr2); // 1,2,3,4,5,6

let arr1 = [1, [2,[3,[4]]]];

let arr2 = [1, [2], [3, [[4]]],[5,6]];

// let expand = arr => {
//     return arr.reduce(function (flat, toFlatten) {
//       return flat.concat(Array.isArray(toFlatten) ? expand(toFlatten) : toFlatten);
//     }, []);
// }

let expand = arr => {
  return arr.flat(Infinity)
}

console.log(expand(arr2))
// ахуенный метод так-то