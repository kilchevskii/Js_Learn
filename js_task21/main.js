// Напишите функцию, которая находит факториал 5.


let fuck = (n) => {
    return (n != 1) ? n * fuck(n - 1) : 1;
}
console.log(fuck(5))
