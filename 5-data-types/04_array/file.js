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

let arr = ["a", "b"];

arr.push(function() {
    alert( this );
})

arr[2](); // "a","b",function