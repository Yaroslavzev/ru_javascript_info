// Давайте произведём 5 операций с массивом.
// Создайте массив styles с элементами «Джаз» и «Блюз».
// Добавьте «Рок-н-ролл» в конец.
// Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
// Удалите первый элемент массива и покажите его.
// Вставьте «Рэп» и «Регги» в начало массива.
// Массив по ходу выполнения операций:

// function replace_middle_element(array) {
//     let middle_index = parseInt(array.length/2)
//     array[middle_index] = "Классика"
//
//     return array
// }
//
// function array_modifier() {
//     let styles = ["Джаз", "Блюз"];
//     styles.push("Рок-н-ролл");
//     alert(styles);
//
//     styles = replace_middle_element(styles)
//     alert(styles)
//     alert(styles.shift())
//
//     styles.unshift("Рэп", "Регги")
//     alert(styles)
// }
//
// array_modifier();


// Вызов arr[2]() синтаксически – старый добрый obj[method](), в роли obj – arr, а в роли method – 2.
// Итак, у нас есть вызов функции arr[2] как метода объекта. Соответственно, он получает в качестве this объект arr и выводит массив:

// let arr = ["a", "b"];
//
// arr.push(function() {
//     alert( this );
// })
//
// arr[2](); // "a","b",function

// Напишите функцию sumInput(), которая:
// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».

// function sumInput() {
//     let array = []
//
//     while ( true ) {
//         let symbol = prompt('введите число', 0);
//
//         if (symbol === "" || symbol === null || !isFinite(symbol)) break;
//
//         array.push(+symbol);
//     }
//
//     alert(`количество элементов: ${array.length}, сумма элементов: ${array.reduce(function(acc, val) { return acc + val; }, 0)}`)
//
// }
//
// sumInput()

// На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
// Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
// Функция getMaxSubSum(arr) должна возвращать эту сумму.
// Например:
//
// getMaxSubSum([-1, 2, 3, -9]) = 5 (сумма выделенных)
// getMaxSubSum([2, -1, 2, 3, -9]) = 5
// getMaxSubSum([-1, 2, 3, -9, 11]) = 11
// getMaxSubSum([-2, -1, 1, 2]) = 3
// getMaxSubSum([100, -9, 2, -3, 5]) = 100
// getMaxSubSum([1, 2, 3]) = 6 (берём все)
// Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0»:
//
// getMaxSubSum([-1, -2, -3]) = 0

function getMaxSubSum(incoming_array) {
    let sum_arrays = [];
    let continuous_array_index = 0;

    for ( let [i, value] of incoming_array.entries() ) {
        if (value >= 0) {
            sum_arrays[continuous_array_index] = (typeof sum_arrays[continuous_array_index] === 'undefined') ? value : sum_arrays[continuous_array_index] + value;
        }
        else if (incoming_array[i-1] >= 0) {
            continuous_array_index += 1;
        }
        else {

        }
    }

    console.log(sum_arrays)
    alert(Math.max(...sum_arrays))
}

getMaxSubSum([-1, 2, 3, -9])
getMaxSubSum([2, -1, 2, 3, -9])
getMaxSubSum([-1, 2, 3, -9, 11])
getMaxSubSum([-2, -1, 1, 2])
getMaxSubSum([100, -9, 2, -3, 5])
getMaxSubSum([1, 2, 3])