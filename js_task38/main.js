// Напишите функцию с двумя параметрами, которая создаёт массив элементов, 
// представляющих собой сумму соответствующих элементов заданных массивов.

// let array1 = [1, 2, 3, 4, 5];

// let array2 = [4, 5, 6];

// function func(arr1,arr2){}

// func(array1,array2) // [5,7,9,4,5]

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [4, 5, 6];


function func(a, b) {
  let sum = [];
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    c.push((a[i] || 0) + (b[i] || 0));
  }
  return sum;
}

console.log(func(arr1, arr2));

// let func = (a ,b) => {
//   if (arr1.length > arr2.length) {
//     var count = arr1.length;
//   } else {
//     var count = arr2.length;
//   }
//       for (let i = 0; i < count; i++) {
//         if (arr2[i] === undefined) {
//             arr2.push(0);
//         } else {
//             if (arr1[i] === undefined) {
//               arr1.push(0);
//             }
//         }
//         arr3.push(arr1[i] + arr2[i]);
//       }
//     return arr3
//     }