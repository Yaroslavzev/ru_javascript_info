// В представленном ниже коде мы намерены вызвать obj.go() метод 4 раза подряд.
// Но вызовы (1) и (2) работают иначе, чем (3) и (4). Почему?
//
// let obj, method;
//
// obj = {
//     go: function() { alert(this); }
// };

// obj.go();               // (1) [object Object]
// (obj.go)();             // (2) [object Object]
// (method = obj.go)();    // (3) undefined
// (obj.go || obj.stop)(); // (4) undefined


// Создайте объект calculator (калькулятор) с тремя методами:
// read() (читать) запрашивает два значения и сохраняет их как свойства объекта.
// sum() (суммировать) возвращает сумму сохранённых значений.
// mul() (умножить) перемножает сохранённые значения и возвращает результат.

// let calculator = {
//     read: function () {
//         this.first_value = parseInt(prompt("Введите первое число"));
//         this.second_value = parseInt(prompt("Введите второе число"));
//     },
//     sum: function () {
//         return  this.first_value + this.second_value;
//     },
//     mul: function () {
//         return this.first_value * this.second_value;
//     }
// };
//
// calculator.read();
// alert( calculator.sum() );
// alert( calculator.mul() );



// Это ladder (лестница) – объект, который позволяет подниматься вверх и спускаться:

    // let ladder = {
    //     step: 0,
    //     up() {
    //         this.step++;
    //     },
    //     down() {
    //         this.step--;
    //     },
    //     showStep: function() { // показывает текущую ступеньку
    //         alert( this.step );
    //     }
    // };
// Теперь, если нам нужно сделать несколько последовательных вызовов, мы можем выполнить это так:

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:
//
// ladder.up().up().down().showStep(); // 1


let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function() { // показывает текущую ступеньку
        alert( this.step );
    }
};


ladder
    .up()
    .up()
    .down()
    .up()
    .down()
    .showStep(); // 1