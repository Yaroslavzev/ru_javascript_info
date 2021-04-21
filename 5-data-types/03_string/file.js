// Сделать первый символ заглавным
// важность: 5
// Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом. Например:

// function ucFirst(string) {
//     let upper_case_symbol = string[0].toUpperCase();
//     let word_without_first_symbol = string.substr(1);
//     let result = upper_case_symbol + word_without_first_symbol;
//     return result
// }
// alert(ucFirst("вася"));




// Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или 'XXX', а иначе false.
// Функция должна быть нечувствительна к регистру:
//     checkSpam('buy ViAgRA now') == true
//     checkSpam('free xxxxx') == true
//     checkSpam("innocent rabbit") == false

// function checkSpam(str) {
//     return str.toLowerCase().includes('viagra') || str.toLowerCase().includes('xxx')
// }
// alert(checkSpam('buy ViAgRA now'));
// alert(checkSpam('free xxxxx'));
// alert(checkSpam("innocent rabbit"));

// Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна maxlength.
// Результатом функции должна быть та же строка, если усечение не требуется, либо, если необходимо, усечённая строка.
// Например:
// truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне хотело…"
// truncate("Всем привет!", 20) = "Всем привет!"

// function truncate(str, maxlength) {
//     let str_length = str.length
//     if (str_length >= maxlength) {
//         return str.slice(0,maxlength-1) + '...'
//     }
//     else {
//         return str
//     }
// }
//
// alert(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20))
// alert(truncate("Всем привет!", 20))


// Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
// Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.
// Например:
//     alert( extractCurrencyValue('$120') === 120 ); // true


function extractCurrencyValue(value) {
    return parseInt(value.substr(1))
}

alert( extractCurrencyValue('$120') === 120 );
