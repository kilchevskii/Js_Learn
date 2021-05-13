// Представьте, что Вы и Ваши друзья решили создать команду мечты. 
// У этой команды должно быть крутое секретное имя, которое содержит зашифрованную информацию о ней. 
// Например, это могут быть первые буквы имен его членов в верхнем регистре, отсортированные по алфавиту. 
// Ваша задача - написать функцию createDreamTeam (members), которая возвращает имя созданной команды (строку) на основе имен ее участников (Array). Удачи!
// Имена участников должны быть строками. Значения другого типа следует игнорировать. 
// В случае неправильного типа членов функция должна возвращать false.

// Например:

// createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'

// createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'


let createDreamTeam = str => {
    return str.map((item, index, array) => {
        if (item == Number(item) || item == null || item == Boolean(item)) {
           return 
        } else if (item == String(item)) {
           return item[0];
        }
}).sort().join('');
}
console.log(createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]))


