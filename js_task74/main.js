// Вы, наверное, знаете систему «лайков» по Facebook и другим страницам. Люди могут "лайкать" сообщения в блогах, 
// изображения или другие предметы. Мы хотим создать текст, который должен отображаться рядом с таким элементом.
// Реализуйте функцию like :: [String] -> String, которая должна принимать входной массив, содержащий имена людей, 
// которым нравится элемент. Он должен возвращать отображаемый текст, как показано в примерах: 
// likes([]) => 'no one likes this'
// likes(['Peter']) => 'Peter likes this'
// likes(['Jacob', 'Alex']) => 'Jacob and Alex like this'
// likes(['Max', 'John', 'Mark']) => 'Max, John and Mark like this')
// likes(['Alex', 'Jacob', 'Mark', 'Max']) => 'Alex, Jacob and 2 others like this'
function likes(arr) {
    longe = arr.length
    oneName = arr.slice(0, 1).join('')
    twoName = arr.map(item => item).join(' and ')
    threeName = arr.slice(-2).join(' and ')
    secondName = arr.slice(1, 2)
    others = arr.slice(2).length
    switch (longe) {
        case 0:
        return `no one likes this`;
        case 1:
        return `${oneName} likes this`;
        case 2:
        return `${twoName} like this`;
        case 3:
        return `${oneName}, ${threeName} like this`;
        case 4:
        return `${oneName}, ${secondName} and ${others} others like this`
        default:
        return `${oneName}, ${secondName} and ${others} others like this`
    }
  }
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));