// Чему будут равны переменные a, b, c и d в примере ниже?

// let a = 1, b = 1;
//
// let c = ++a; // 2
// let d = b++; // 1
//
// alert(`c: ${c}, d: ${d}!`);


// Чему будут равны переменные a и x после исполнения кода в примере ниже?
// let a = 2;
//
// let x = 1 + (a *= 2); // 5
//
// alert(`x: ${x}!`);

// Какой результат будет у выражений ниже?
// console.log("" + 1 + 0 ) // 10
// console.log("" - 1 + 0) // -1
// console.log(true + false) // true. Right is 1
// console.log(6 / "3") // 2
// console.log("2" * "3") // 6
// console.log(4 + 5 + "px") // 9px
// console.log("$" + 4 + 5) // $45
// console.log("4" - 2) // 2
// console.log("4px" - 2) // . Right is NaN
// console.log(7 / 0) // undefined. Right is infinity
// console.log("  -9  " + 5) // "  -9  5"
// console.log("  -9  " - 5) // -14
// console.log(null + 1) // 1
// console.log(undefined + 1) // undefined. Right is NaN
// console.log(" \t \n" - 2) // undefined. Right is -2


// Ниже приведён код, который запрашивает у пользователя два числа и показывает их сумму.
// Он работает неправильно. Код в примере выводит 12 (для значения полей по умолчанию).
// В чём ошибка? Исправьте её. Результат должен быть 3.

let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);

alert(+a + +b); // 12