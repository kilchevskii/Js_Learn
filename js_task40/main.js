// Напишите функцию, которая находит наиболее часто используемый элемент массива.

// let array=[7, 'z', 'z', 'z', 3, 7, 'z', 7, 'z', 3, 5, 7];

// function func(arr){}

// func(array)

let array = [7, 'z', 'z', 'z', 3, 7, 'z', 7, 'z', 3, 5, 7];

// let search = arr => {
//   let count = 1, tempCount, tempPopular;
//   let popular = arr[0];
//   for (let i = 0; i < arr.length - 1; i++){
//     tempPopular = arr[i];
//     tempCount = 0;
//     for (let j = 1; j < arr.length; j++){
//       if (tempPopular === arr[j])
//         tempCount++;
//     }
//     if (tempCount > count){
//       popular = tempPopular;
//       count = tempCount;
//     }
//   }
//   return `самый пополуярный элемент ${popular} `;
// }

function search(arr) {
  const store = {};
  
  arr.forEach((e, i) => {
  store[e] = store[e] > 0 ? store[e] + 1 : 1;
  });
  
  const entries = Object.entries(store).sort((a, b) => b[1] - a[1]);
  
  return (`${entries[0][0]} повторяется ${entries[0][1]} раз`)
  }


console.log(search(array))