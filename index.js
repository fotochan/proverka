/*function readNumber() {
    let sum;

    do {
        sum = prompt("Enter a number =");
    } while ( !isFinite(sum) );
     if(sum === null || sum === "") return null;
     return +sum;
}

alert(`Число: ${readNumber()}`); */

/*const styles = ['Джаз', "Блюз"];
styles.push('Классика');
styles[Math.floor((styles.length - 1) / 2)] = 'Классика';
console.log(styles.shift());
styles.unshift('Рэп', 'Регги');*/

/*function sumInput() {

    let den = [];

    while (true) {
        let value = prompt('Введите значение = ', '');

        if(value === '' || value === null || !isFinite(value)) break;

        den.push(+value);
    }

    let sum = 0;
    for(let num of den) {
        sum += num;
    }
    return sum;
}

console.log( sumInput() ); */

/*function getMaxSubSum(arr) {
    let maxSum = 0;
    let secondSum = 0;
    for (let item of arr) {
        secondSum += item;
        maxSum = Math.max(maxSum, secondSum);
        if (secondSum < 0) secondSum = 0;
    }
    return maxSum;
}

console.log(getMaxSubSum([-1, 2, 3, -9]));
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
console.log(getMaxSubSum([100, -9, 2, -3, 5])); */

/*["Бильбо", "Гэндальф", "Назгул"].forEach((item, index, array) => {
    console.log(`У ${item} индекс ${index} в ${array}`);
});*/

/* let result = arr.find(function(item, index, array) {
  // если true - возвращается текущий элемент и перебор прерывается
  // если все итерации оказались ложными, возвращается undefined
});
    item – очередной элемент.
    index – его индекс.
    array – сам массив.


    let lengths = ["Бильбо", "Гэндальф", "Назгул"].map(item => item.length);
    alert(lengths); // 6,8,6


    function compareNumeric(a, b) {
    if (a > b) return 1;
     if (a == b) return 0;
    if (a < b) return -1;
}

    let arr = [ 1, 2, 15 ];

    arr.sort(compareNumeric);

    alert(arr);  // 1, 2, 15



    let arr = [ 1, 2, 15 ];

    arr.sort(function(a, b) { return a - b; });

    alert(arr);

    либо так arr.sort( (a, b) => a - b );



    REDUCE
    let value = arr.reduce(function(accumulator, item, index, array) {
    // ...
    }, [initial]);
    Аргументы:

    accumulator – результат предыдущего вызова этой функции, равен initial при первом вызове (если передан initial),
    item – очередной элемент массива,
    index – его позиция,
    array – сам массив.

    Пример
    let arr = [1, 2, 3, 4, 5];

    let result = arr.reduce((sum, current) => sum + current, 0);

    alert(result); // 15

*/

/*function camelize(str) {
  return str
    .split('-')
    .map((word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1))
    .join('');
}

console.log(camelize('background-color'))
console.log(camelize("list-style-image"))*/

/* function filterRangeInPlace(arr, a, b) {

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i];

    // удалить, если за пределами интервала
    if (val < a || val > b) {
      arr.splice(i, 1);
      i--;
    }
  }

}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

alert( arr ); // [3, 1] */

/* function Calculator() {

  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };

  this.calculate = function(str) {

    let split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2]

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  }

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
} */

/* function unique(arr) {
    let results = [];
  for(let den of arr) {
      if (!results.includes(den)) {
          results.push(den);
      }
  }
  return results;
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

alert( unique(strings) ); */

/*let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let readMap = new WeakMap();

readMap.set(messages[0], new Date(2024, 1, 1));

console.log(readMap.get(messages[0]));
*/
/*============================================
function count(obj){
    return Object.keys(obj).length;
}

let user = {
    name: 'John',
    age: '30'
};

console.log(count(user)); */

/*==========================================================
let user = {
    name: "John",
    years: 30
};

let { name, years: age, isAdmin = false } = user;

console.log(name);
console.log(age);
console.log(isAdmin);

*/
/* ===========================================
function money(name) {

    let max = 0;
    let maxName = null;

    for(const [key, value] of Object.entries(name)) {
        if(max < value) {
            max = value;
            maxName = key;
        }
    }
    return max;
}

let salaries = {
    "John": 100,
    "Pete": 321,
    "Mary": 250
};

console.log(money(salaries));

 */

/* function getWeekDay(date) {
     let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
     return days[date.getDay()];
}

let date = new Date(2012, 0, 1);

console.log(  getWeekDay(date) );
 */

/* ======================================== фунция которая возвращает число которое было days назад оот даты date
function getDateAgo(date, days) {
     let den = new Date(date)
     den.setDate(date.getDate() - days);
     return den.getDate();
}

let date = new Date(2015, 0, 2);

console.log( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
console.log( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
console.log( getDateAgo(date, 365) ); // 2, (2 Jan 2014)     // вторник, нужно показать 2

 */

/* ============================================================================== последний день месяца
function getLastDayOfMonth(year, month) {
     return new Date(year, month + 1, 0).getDate();
}

console.log(getLastDayOfMonth(2024, 1))

 */
/* ===================================================== считает сколько секунд прошло с начала дня
function getSecondToday() {
    let now = new Date();
    let day = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    let diffInMilliseconds = now - day;
    let diffInSeconds = Math.floor(diffInMilliseconds / 1000);
    return diffInSeconds;
}

console.log(getSecondToday());

 */
 /* ======================================================================= сколько секунд осталось до завтра
function getSecondsToTomorrow() {
    let now = new Date();
    let tomorrow  = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);

    let sum = tomorrow - now;
    return  Math.round(sum / 1000);
}

console.log(getSecondsToTomorrow());

  */

/* Братий отдай джсончик ========================================================
let user = {
    name: "Василий Иванович",
    age: 35
};

let user2 = JSON.parse(JSON.stringify(user));

console.log(user2);

 */
    /*================================================================
let room = {
    number: 23
};

let meetup = {
    title: "Совещание",
    occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
    place: room
};

// цикличные ссылки
room.occupiedBy = meetup;
meetup.self = meetup;

console.log( JSON.stringify(meetup, function replacer(key, value) {
    return (key !== "" && value === meetup) ? undefined : value;
}));

     */
/* Рекурсия можно было написать так ====================================
function pow(x, n) {
    if (n === 1) {
        return x;
    } else {
        return x * pow(x, n - 1);
    }
}

console.log(pow(2, 3));

 */
/*
function pow(x, n) {
    return (n === 1) ? x : x * pow(x, n - 1);
}

console.log(pow(2, 3));

 */

/*
function den(n) {
    if (n < 0) {
        return 'Не вводите отрицательно значение';
    }
    else if (n === 0) {
        return 1;
    }
    else {
        return n * den(n - 1);
    }
}

console.log(den(3));

//Вначале функция вызывается в глобальном контексте den(n) где содержатся аргументы переменные переданные в нее
//Далее глобальный контекст останавливается и вызывается контекст, который попадает в стек вызовов функций n * den(n - 1); где происходит
// 3 * 2
// 2 * 1
// 1 потому что мы попадаем под условие остановки рекурсии
// итоге получается что в стеке идет 1 потом 2 * 1 потом 3 * 2
// получается 6

 */
/*
function pow(x , n) {
   if (n === 1) {
        return x;
    }
    else {
        return x * pow(x, n - 1);
    }
}

console.log(pow(2, 4));

//2 * pow(2,3)= 6
//2 * pow(2,2)= 4
//2 * pow(2,1)= 2
//2 функция дошла до базового случая

 */

// let company = {
//     sales: [{
//         name: 'John',
//         salary: 1000
//     }, {
//         name: 'Alice',
//         salary: 600
//     }],
//
//     development: {
//         sites: [{
//             name: 'Peter',
//             salary: 2000
//         }, {
//             name: 'Alex',
//             salary: 1800
//         }],
//
//         internals: [{
//             name: 'Jack',
//             salary: 1300
//         }]
//     }
// };

/*====================================================== Решение разными способами от самого медленного к быстрому
function sumTo(n) {
    return (n === 1) ? n : n + sumTo(n - 1);
}

console.log( sumTo(100) );

function ceil(n) {
    let result = 0;
    for (let i = 1; i <= n; i++) {
        result += i;
    }
    return result;
}
console.log(ceil(100));

function sumTow(n) {
    return n * (n + 1) / 2;
}

console.log( sumTow(100) );

 */
/* Факториал рекурсия
function factorial(n) {
    return n === 1 ? n : n * factorial( n - 1 );
}

console.log(factorial(5));

 */
/*
function fib(n) {
    return n <= 1 ? 1 : fib(n-1) + fib(n - 2);
}

console.log (fib(45));

 */

/*
function printValues(list) {

   if (list.next) {
       printValues(list.next);
   }
    console.log(list.value); // чиобы вывести наоборот надо просто console.log засунуть выше if
}

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};


printValues(list)

 */
/* вывод value циклом наоборот
let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printReverseList(list) {
    let arr = [];
    let tmp = list;
    while (tmp) {
        arr.push(tmp.value);
        tmp = tmp.next;
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

printReverseList(list);

 */

/*
function pow(x, y) {
    let result = 1;
    for (let i = 0; i < y; i++) {
        result *= x;
    }
    return result;
}

console.log(pow(2,3))

 */
/*
function binarySearch(list, item) {
    let low = 0;
    let high = list.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let guess = list[mid];

        if(guess === item) {
            return mid;
        }
        if (guess > item) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return null;
}

let myList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(binarySearch(myList, 9));

 */
/*
function denchik(obj) {
    let den = obj;
    let arr = [];

    while (den) {
        arr.push(den.value);
        den = den.next;
    }

    for ( let i =arr.length - 1; i>=0; i--) {
        console.log(arr[i]);
    }
}

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
}

denchik(list);

 */

/* Замыкание
function sum(a) {
    return function (b) {
        return a + b;
    }
}

console.log(sum(1)(1));

 */
/* Мертвая зона
let x = 1;

function func() {

    console.log(x); // ReferenceError: Cannot access 'x' before initialization
    let x = 2;
}

func();

 */
/* x это элимент массива
function inBetween(a, b) {
    return function (x) {
        return x >= a && x <= b;
    };
}

function compare(arr) {
    return function (x) {
        return arr.includes(x);
    };
}

let arr = [1, 2, 3, 4, 5, 6, 7];
console.log( arr.filter(inBetween(3, 6)) );
console.log( arr.filter(compare([1, 2, 10])) );

 */
/* сортировка с попощью замыкания
function byField(fieldName) {
        return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
}

let users = [
    { name: "Иван", age: 20, surname: "Иванов" },
    { name: "Пётр", age: 18, surname: "Петров" },
    { name: "Анна", age: 19, surname: "Каренина" }
];

console.log(users.sort(byField('name')));

 */
/*
function makeArmy() {
    let shooters = [];

    let i = 0;

    while (i < 10) {
        let j = i // создали переменнуб j  в которую скопировали i чтобы заработало
        let shooter = function() { // функция shooter
            console.log( j ); // должна выводить порядковый номер
        };
        shooters.push(shooter); // и добавлять стрелка в массив
        i++;
    }

    // ...а в конце вернуть массив из всех стрелков
    return shooters;
}

let army = makeArmy();

// все стрелки выводят 10 вместо их порядковых номеров (0, 1, 2, 3...)
army[0](); // 10 от стрелка с порядковым номером 0
army[1](); // 10 от стрелка с порядковым номером 1
army[2](); // 10 ...и т.д.

 */
/*
function greetingGenerator(name) {
    let den = name
    return function () {
        return console.log(`Hello ${den}`);
    }
}

let greetJohn = greetingGenerator("John");

greetJohn();

 */
/*
function createPersonalCounter(startValue) {
    return {
        increment: function () {
            return ++startValue;
        },
        decrement: function () {
            return --startValue;
        }
    };

}

let counter = createPersonalCounter(10);
console.log(counter.increment());
console.log(counter.decrement());

 */

// function makeCounter() {
//
//     let count = 0
//
//     function counter() {
//         return count++;
//     }
//
//     counter.set = value => count = value;
//
//     counter.decrease = () => count--;
//
//
//     return counter;
// }
//
// let counter = makeCounter();
// counter.set(10);
// console.log( counter() ); // 0
// console.log( counter() );
/*
function sum(a) {
    let currentSum = a;
     function f(b) {
         currentSum += b;
        return f;
    }
    f.toString = function() {
         return currentSum;
    };
     return f;
}

console.log(Strringsum(1)(2))
*/
/*===============================================через setInterval
function printNumber(from, to) {
    let current = from;
    let timerId = setInterval(function () {
        console.log(current);
        if (current === to) {
            clearInterval(timerId);
        }
        current++;
    }, 1000);
}

printNumber(1, 10);

 */
/*========================================Рекурсивный вызов через seTimeout
function printNumbers(from, to) {
    let current = from;
    setTimeout(function go() {
        console.log(current);
        if (current < to) {
            setTimeout(go, 1000);
        }
        current++;
    }, 1000);
}

printNumbers(1, 10);
 */

// function Calculate() {
//     this.method = {
//         "+": (a, b) => a + b,
//         "-": (a, b) => a - b,
//     }
//
//     this.calculate = function (str) {
//         let split = str.split(" ");
//         a = +split[0];
//         op = split[1];
//         c = +split[2];
//
//         if(!this.method[op] || isNaN(a) || isNaN(c)) {
//             return NaN;
//         }
//
//         return this.method[op](a, c);
//     }
//     this.addMethod = function (name, func) {
//         this.method[name] = func;
//     }
// }
//
// let den = new Calculate();
// let result = den.calculate("5 + 2");
// console.log(result);
//
// den.addMethod("/", (a, b) => a / b);
//
// let result1 = den.calculate("8 / 2");
//
// console.log(result1);

function getMax(arr) {
    let maxSum = 0;
    let particalSum = 0;
    for(let i = 0; i < arr.length; i++) {
        particalSum += arr[i];
        maxSum = Math.max(maxSum, particalSum);
        if(particalSum < 0) particalSum = 0;
    }
    return maxSum;
}

console.log(getMax([-1, 2, 3, -9])); // 0 2 5
console.log(getMax([-1, 2, 3, -9, 11]));
console.log(getMax([-2, -1, 1, 2]));
console.log(getMax([-1, 2, 3, -9]));
console.log(getMax([-1, 2, 3, -9]));