// Реализуйте функцию unique_in_order, которая принимает в качестве аргумента последовательность и возвращает список элементов 
// без каких-либо элементов с одинаковым значением рядом друг с другом и с сохранением исходного порядка элементов.
// uniqueInOrder('AAAABBBCCDAABBB') => ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         => ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       => [1,2,3]
let uniqueInOrder = str => {
    newStr = []
    if (Array.isArray(str)) {
        str
    } else {
        str = str.split('')
    }
    for(let i = 0; i < str.length; i++) {
        if(str[i] !== str[i + 1]) {
            newStr.push(str[i])
        }
    } return newStr
}
console.log(uniqueInOrder([1,2,2,3,3]));