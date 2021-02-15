//
// Напишите код, выполнив задание из каждого пункта отдельной строкой:
//
//     Создайте пустой объект user.
// let user = {};
//     Добавьте свойство name со значением John.
// user.name = 'John';
//     Добавьте свойство surname со значением Smith.
// user.surmane = 'Smith';
//     Измените значение свойства name на Pete.
// user.surmane = 'Pete';
//     Удалите свойство name из объекта.
// delete user.surmane;


// Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств, иначе false.
// Должно работать так:

// let schedule = {};
// alert( isEmpty(schedule) ); // true
// schedule["8:30"] = "get up";
// alert( isEmpty(schedule) ); // false
//
// function isEmpty(object) {
//     for(let key in object) {
//         return false;
//     }
//     return true;
// }


// У нас есть объект, в котором хранятся зарплаты нашей команды:

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// };
//
// let sum = 0;
// for(let key in salaries) {
//     sum += salaries[key];
// }
// alert(sum);

// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

// до вызова функции
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {
    for(let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2;
        }
    }
}
multiplyNumeric(menu)
