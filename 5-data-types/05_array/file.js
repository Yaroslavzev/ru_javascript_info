// Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
// То есть дефисы удаляются, а все слова после них получают заглавную букву.
// Примеры:
// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';
// P.S. Подсказка: используйте split, чтобы разбить строку на массив символов, потом переделайте всё как нужно и методом join соедините обратно.

// function camelize(str) {
//     let splitted_array = str.split('-');
//     let first_element = ""
//
//     if (str.charAt(0) !== '-') {
//         first_element = splitted_array.shift();
//     }
//     for ( let i=0; i<splitted_array.length; i++) {
//         splitted_array[i] = splitted_array[i].charAt(0).toUpperCase() + splitted_array[i].slice(1);
//     }
//
//     alert(first_element + splitted_array.join(""))
// }
//
// camelize("background-color")
// camelize("list-style-image")
// camelize("-webkit-transition")

// Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет в нём элементы между a и b и отдаёт массив этих элементов.
// Функция должна возвращать новый массив и не изменять исходный.
// Например:
// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// alert( filtered ); // 3,1 (совпадающие значения)
// alert( arr ); // 5,3,8,1 (без изменений)

// function filterRange(arr, a, b) {
//     let filtred_array = [];
//     for ( let i in arr ) {
//         if (arr[i] >= a && arr[i] <= b ) {
//             filtred_array.push(arr[i])
//         }
//     }
//
//     return filtred_array
// }
//
// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// alert( filtered ); // 3,1 (совпадающие значения)
// alert( arr ); // 5,3,8,1 (без изменений)


// Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
// Функция должна изменять принимаемый массив и ничего не возвращать.
// Например:
// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
// alert( arr ); // [3, 1]

// function filterRangeInPlace(arr, a, b) {
//     for ( let i in arr ) {
//         if (!(arr[i] >= a && arr[i] <= b)) {
//             arr.splice(i, 1);
//             i--;
//         }
//     }
// }
//
// let arr = [5, 3, 8, 1];
// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4
// alert( arr ); // [3, 1]

// Сортировать в порядке по убыванию
// важность: 4
// let arr = [5, 2, 1, -10, 8];
// arr.sort((a, b) => b - a);
// alert( arr ); // 8, 5, 2, 1, -10


// У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
// Создайте функцию copySorted(arr), которая будет возвращать такую копию.
// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted = copySorted(arr);
// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (без изменений)

// function copySorted(arr) {
//   let sorted = [...arr];
//
//   return sorted.sort();
//
// }
//
// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted = copySorted(arr);
// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (без изменений)

// Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.
// Задание состоит из двух частей.
// Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.
// Пример использования:
// let calc = new Calculator;
// alert( calc.calculate("3 + 7") ); // 10
// Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции.
// Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.
// Например, давайте добавим умножение *, деление / и возведение в степень **:
// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);
// let result = powerCalc.calculate("2 ** 3");
// alert( result ); // 8
// Для этой задачи не нужны скобки или сложные выражения.
// Числа и оператор разделены ровно одним пробелом.
// Не лишним будет добавить обработку ошибок.

// function Calculator() {
//     this.methods = {
//         '+': (a,b) => (a + b),
//         '-': (a,b) => (a - b)
//     };
//
//     this.calculate = function (string) {
//         let values = string.split(" ");
//         return this.methods[values[1]](+values[0],+values[2]);
//     };
//
//     this.addMethod = function(operand, lamda) {
//         this.methods[operand] = lamda;
//     }
// }
//
// let calc = new Calculator;
// alert( calc.calculate("3 + 7") ); // 10

// У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.
// Например:
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
//
// let users = [ vasya, petya, masha ];
// let names = /* ... ваш код */
// alert( names ); // Вася, Петя, Маша

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
//
// let users = [ vasya, petya, masha ];
// let names = users.map( item => item.name );
// alert( names ); // Вася, Петя, Маша



// У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.
// Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };
//
// let users = [ vasya, petya, masha ];
//
// let usersMapped = users.map( item => ( {
//         fullName: `${item.name} ${item.surname}`,
//         id: item.id
//
// }));
//
//     /*
//     usersMapped = [
//       { fullName: "Вася Пупкин", id: 1 },
//       { fullName: "Петя Иванов", id: 2 },
//       { fullName: "Маша Петрова", id: 3 }
//     ]
//     */
//
// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // Вася Пупкин

// Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.
// Многократные прогоны через shuffle могут привести к разным последовательностям элементов. Например:
//
// let arr = [1, 2, 3];
//
// shuffle(arr);
// // arr = [3, 2, 1]
//
// shuffle(arr);
// // arr = [2, 1, 3]
//
// shuffle(arr);
// // arr = [3, 1, 2]
// // ...
// Все последовательности элементов должны иметь одинаковую вероятность.
// Например, [1,2,3] может быть переупорядочено как [1,2,3] или [1,3,2], или [3,1,2] и т.д., с равной вероятностью каждого случая.

// function shuffle(arr) {
//         array.sort(() => Math.random() - 0.5);
// }


// Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.
// Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.
// Например:

// function getAverageAge(users) {
//         return users.reduce((prev, user) => prev + user.age, 0) / users.length;
// };
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };
//
// let arr = [ vasya, petya, masha ];
//
// alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28