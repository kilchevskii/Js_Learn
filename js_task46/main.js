// Люди в автобусе

// Представим автобус, забирающий и высаживающий людей на каждой остановке. Дан массив массивов, первый 
// элемент которых равен числу пассажиров, вошедших в автобус на остановке, а второй - числу пассажиров, вышедших на остановке.

// Ваша Задача написать функцию, которая возвращает число людей, оставшихся в автобусе после последней остановки (массива). 
// Хоть это и последняя остановка, в автобусе все еще находятся люди (они, наверное, уснули :D ).

// Помните, что число оставшихся людей в автобусе всегда >= 0
// Значение второго числа первого элемента массива = 0, потому что автобус пустой на первой остановке.

// busStops([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]]) --> 17



let busStops = arr => {
  let normarr = arr.flat(Infinity);
  return normarr.reduce((res, item, index) => {
    if (index % 2 !== 0) {
      res -= item;
    } else {
      res += item;
    } return res
    }, 0); 
}
console.log(busStops([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]]));

