// Запросите у пользователя его имя и выведите в ответ: 
// «Привет, его имя!».

// let a = prompt("Ваше имя?")
// alert("Привет", a)


// Запросите у пользователя год его рождения, посчитайте, 
// сколько ему лет и выведите результат. Текущий год укажите 
// в коде как константу


// const year = 2024
// let b = prompt("Ваш год рождения?")
// let c = year - b

// alert(c)

// Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата. 

// let a = prompt("Введите длину стороны квадрата")
// let b = a * 4 
// alert(b)

// Запросите у пользователя радиус окружности и выведите 
// площадь такой окружности

// let a = prompt('Введите радиус окр')
// alert('Площадь - ', 3,14 * a**2)

// Запросите у пользователя расстояние в км между двумя 
// городами и за сколько часов он хочет добраться. Посчитайте скорость, с которой необходимо двигаться, чтобы 
// успеть вовремя.

// let a = prompt("Расстояние между 2 городами")
// let b = prompt('Время за которое он должен добраться')
// alert('Скорость должна быть - ', a/b)


// Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в 
// константе

// const dol_euro = 0.91992

// let d = prompt('Введите долары')

// alert("Получиться - ", dol_euro*d,"евро")


// Пользователь указывает объем флешки в Гб. Программа 
// должна посчитать сколько файлов размером в 820 Мб помещается на флешку.

// let size_f = 16

// alert('На флэшку поместиться ', (size_f*1000)/820,"Файлов размером 820 мб")


// Пользователь вводит сумму денег в кошельке и цену одной 
// шоколадки. Программа выводит сколько шоколадок может 
// купить пользователь и сколько сдачи у него останется. 

// let money = 1000



// let chocolate = 12

// alert('Вы можете купить -', money/chocolate, "шоколадок, и у вас останеться ", money%chocolate)



// Запросите у пользователя трехзначное число и выведите 
// его задом наперед. Для решения задачи вам понадобится 
// оператор % (остаток от деления)


// let a = prompt('Введите трехзначное число')

// if (a.length==3){
//     let n = number[2] + number[1] + number[0];
    

//     alert(`Число задом наперед: ${n}`);
// }else{
//     alert('Число не трехзначное')
// }

// Запросите у пользователя целое число и выведите в ответ, 
// четное число или нет. В задании используйте логические 
// операторы. В задании не надо использовать if или switch

// let num = 2

// let check_num = num %2==0 ? alert('Чет'): alert('Не чет')

// alert(check_num)

// Запросить у пользователя его возраст и определить, кем он 
// является: ребенком (0–2), подростком (12–18), взрослым 
// (18_60) или пенсионером (60– ...)

// let year = 32


// let check_year = year>0 || year<=2 ? alert('baby') : year>12 || year<=18 ? alert('baby') : year>18 || year<=60 ? alert('baby') : alert('Старик')

// alert(check_year)

// Запросить у пользователя число от 0 до 9 и вывести ему 
// спецсимвол, который расположен на этой клавише (1–!, 
// 2–@, 3–# и т. д

// let num = prompt('введите ваше числоЮ а программа выведет его знак')

// let check_num = num==1 ? alert('!'):num==2 ? alert('@'):num==3 ? alert('#'):num==4 ? alert('$'):num==5 ? alert('%'):num==6 ? alert('^'):num==7 ? alert('&'):num==8 ? alert('*'):num==9 ? alert('('):alert(')')
// alert(check_num)

// Запросить у пользователя трехзначное и число и проверить, 
// есть ли в нем одинаковые цифры.

// let a = prompt('Введите трехзначное число')
// if(a.length==3){
// for (let i = 0; i < a.length; i++){
//     if (a==i){
//         alert('Есть')
//     }else{
//         alert('Нету')
//     }
// }
// }else{
//     alert('Числр не трехзначное')
// }


// Запросить у пользователя год и проверить, високосный он 
// или нет. Високосный год либо кратен 400, либо кратен 4 и 
// при этом не кратен 100.

// let year = 2024
// let check_year = year%400==0 || year%4==0 && year%100==1? alert('Весокосный'): alert('Не весокосный')

// alert(check_year)


// Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.


// const number = prompt("Введите пятизначное число:");
// const reversedNumber = number.split("").reverse().join("");

// if (number === reversedNumber) {
//     console.log("Данное число является палиндромом.");
// } else {
//     console.log("Данное число не является палиндромом.");
// }



// Написать конвертор валют. Пользователь вводит количество USD, выбирает, в какую валюту хочет перевести: EUR,  
// UAN илиAZN, и получает в ответ соответствующую сумму.
// const col_d = prompt("Введите количество USD для конвертации:")
// const valuta = prompt("Выберите валюту для конвертации (EUR, UAH, AZN):")

// let cnt = 0

// if (valuta=== "EUR") {
//     cnt =col_d * 0.85; 
// } else if (valuta === "UAH") {
//     cnt = col_d * 27.70; 
// } else if (valuta === "AZN") {
//     cnt = col_d * 1.70; 
// } else {
//     console.log("Выбрана неверная валюта.");
// }

// if (cnt) {
//     console.log(`${col_d} USD равно ${convertedAmount} ${valuta}`);
// }

// Запросить у пользователя сумму покупки и вывести сумму 
// к оплате со скидкой: от 200 до 300 – скидка будет 3%, от 300 
// до 500 – 5%, от 500 и выше – 7%.

// let purchaseAmount = prompt("Введите сумму покупки:")

// let discount = 0
// if (purchaseAmount >= 200 && purchaseAmount < 300) {
//     discount = 0.03
// } else if (purchaseAmount >= 300 && purchaseAmount < 500) {
//     discount = 0.05
// } else if (purchaseAmount >= 500) {
//     discount = 0.07
// }

// let totalAmount = purchaseAmount - (purchaseAmount * discount)
// console.log(`Сумма к оплате со скидкой: ${totalAmount}`)



// Запросить у пользователя длину окружности и периметр 
// квадрата. Определить, может ли такая окружность поместиться в указанный квадра

// let circumference = prompt("Введите длину окружности:")
// let perimeter = prompt("Введите периметр квадрата:")

// let sideLength = perimeter / 4;
// let circleDiameter = circumference / Math.PI;
// let canFit = circleDiameter <= sideLength;

// if (canFit) {
//     console.log("Окружность может поместиться в квадрат.");
// } else {
//     console.log("Окружность не может поместиться в квадрат.");
// }

// адать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. За каждый правильный ответ начисляется 2 
// балла. После вопросов выведите пользователю количество 
// набранных баллов.

// let score = 0;

// function askQuestion(question, options, correctAnswer) {
//     console.log(question);
//     for (let i = 0; i < options.length; i++) {
//         console.log(`${i + 1}. ${options[i]}`);
//     }
//     let userAnswer = prompt("Введите номер правильного ответа:");
//     if (userAnswer === correctAnswer) {
//         score += 2;
//     }
// }

// askQuestion("Вопрос 1: Сколько планет в Солнечной системе?", ["8", "9", "10"], "1");
// askQuestion("Вопрос 2: Какой год был когда началась Первая Мировая война?", ["1914", "1915", "1916"], "1");
// askQuestion("Вопрос 3: Какой столицей является Париж?", ["Германия", "Франция", "Италия"], "2");

// console.log(`Вы набрали ${score} баллов.`);


// Запросить дату (день, месяц, год) и вывести следующую 
// за ней дату. Учтите возможность перехода на следующий 
// месяц, год, а также високосный год.
// let day = parseInt(prompt("Введите день:"));
// let month = parseInt(prompt("Введите месяц (в виде числа от 1 до 12):"));
// let year = parseInt(prompt("Введите год:"));

// let daysInMonth = new Date(year, month, 0).getDate();

// if (day < daysInMonth) {
//     day++;
// } else {
//     day = 1;
//     if (month < 12) {
//         month++;
//     } else {
//         month = 1;
//         year++;
//     }
// }

// console.log(`Следующая дата: ${day}.${month}.${year}`);

// Подсчитать сумму всех чисел в заданном пользователем 
// диапазоне. 
// const a = parseInt(prompt('Введите нач диапозона'));
// const b = parseInt(prompt('конец'));
// let sum = 0;

// for(let i = a; i <= b; i++){
//     sum += i;
// }

// console.log(sum);

// let num1 = prompt("Введите первое число:");
// let num2 = prompt("Введите второе число:");

// function findGCD(a, b) {
//     if (!b) {
//         return a;
//     }
//     return findGCD(b, a % b);
// }

// let gcd = findGCD(parseInt(num1), parseInt(num2));
// console.log("Наибольший общий делитель: " + gcd);

// let num = prompt("Введите число:");

// console.log("Делители числа " + num + ":");
// for (let i = 1; i <= num; i++) {
//     if (num % i === 0) {
//         console.log(i);
//     }
// }

// let num = prompt("Введите число:");

// let numLength = num.toString().length;
// console.log("Количество цифр в числе: " + numLength);

// let positive = 0;
// let negative = 0;
// let zero = 0;
// let even = 0;
// let odd = 0;

// for (let i = 1; i <= 10; i++) {
//     let num = parseInt(prompt("Введите число:"));
//     if (num > 0) {
//         positive++;
//     } else if (num < 0) {
//         negative++;
//     } else {
//         zero++;
//     }
//     if (num % 2 === 0) {
//         even++;
//     } else {
//         odd++;
//     }
// }

// console.log("Положительных чисел: " + positive);
// console.log("Отрицательных чисел: " + negative);
// console.log("Нулей: " + zero);
// console.log("Четных чисел: " + even);
// console.log("Нечетных чисел: " + odd);


// let continueCalculation = true;

// while (continueCalculation) {
//     let num1 = parseFloat(prompt("Введите первое число:"));
//     let num2 = parseFloat(prompt("Введите второе число:"));
//     let operation = prompt("Введите знак (+, -, * или /):");

//     let result;
//     switch (operation) {
//         case "+":
//             result = num1 + num2;
//             break;
//         case "-":
//             result = num1 - num2;
//             break;
//         case "*":
//             result = num1 * num2;
//             break;
//         case "/":
//             result = num1 / num2;
//             break;
//         default:
//             console.log("Некорректная операция.");
//             continue;
//     }

//     console.log("Результат: " + result);

//     let answer = prompt("Хотите решить еще один пример? (да/нет)");
//     if (answer.toLowerCase() !== "да") {
//         continueCalculation = false;
//     }
// }

// let number = prompt("Введите число:");
// let shift = parseInt(prompt("На сколько цифр сдвинуть число?"));

// let shiftedNumber = number.slice(shift) + number.slice(0, shift);
// console.log("Результат сдвига: " + shiftedNumber);

// let daysOfWeek = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
// let i = 0;

// do {
//     let userResponse = confirm(daysOfWeek[i] + ". Хотите увидеть следующий день?");
//     if (i === daysOfWeek.length - 1) {
//         i = 0;
//     } else {
//         i++;
//     }
// } while (userResponse);

// for (let i = 2; i <= 9; i++) {
//     console.log("Таблица умножения для " + i + ":");
//     for (let j = 1; j <= 10; j++) {
//         console.log(i +

// // 1. Сравнение чисел
// function compareNumbers(num1, num2) {
//     if (num1 < num2) {
//       return -1;
//     } else if (num1 > num2) {
//       return 1;
//     } else {
//       return 0;
//     }
//   }
  
//   // 2. Факториал
//   function factorial(n) {
//     if (n === 0) {
//       return 1;
//     } else {
//       return n * factorial(n - 1);
//     }
//   }
  
//   // 3. Цифры в число
//   function digitsToNumber(digit1, digit2, digit3) {
//     return parseInt(digit1.toString() + digit2.toString() + digit3.toString());
//   }
  
//   // 4. Площадь прямоугольника или квадрата
//   function calculateArea(length, width = null) {
//     if (width === null) {
//       return length * length;
//     } else {
//       return length * width;
//     }
//   }
  
//   // 5. Совершенное число
//   function isPerfectNumber(number) {
//     let sumOfDivisors = 1;
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//       if (number % i === 0) {
//         sumOfDivisors += i + (number / i);
//       }
//     }
//     return sumOfDivisors === number;
//   }
  
//   // 6. Вывод совершенных чисел в диапазоне
//   function printPerfectNumbers(minValue, maxValue) {
//     for (let i = minValue; i <= maxValue; i++) {
//       if (isPerfectNumber(i)) {
//         console.log(i);
//       }
//     }
//   }
  
//   // 7. Форматирование времени
//   function formatTime(hours, minutes = 0, seconds = 0) {
//     return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
//   }
  
//   // 8. Время в секунды
//   function timeToSeconds(hours, minutes, seconds) {
//     return hours * 3600 + minutes * 60 + seconds;
//   }
  
//   // 9. Секунды в время
//   function secondsToTime(seconds) {
//     const hours = Math.floor(seconds / 3600);
//     const minutes = Math.floor((seconds % 3600) / 60);
//     const remainingSeconds = seconds % 60;
//     return formatTime(hours, minutes, remainingSeconds);
//   }
  
//   // 10. Разница между датами
//   function calculateDateDifference(hours1, minutes1, seconds1, hours2, minutes2, seconds2) {
//     const time1Seconds = timeToSeconds(hours1, minutes1, seconds1);
//     const time2Seconds = timeToSeconds(hours2, minutes2, seconds2);
//     const differenceSeconds = Math.abs(time1Seconds - time2Seconds);
//     return secondsToTime(differenceSeconds);
//   }
  
//   // Пример использования функций
//   console.log(compareNumbers(5, 3)); // Вывод: 1
//   console.log(factorial(5)); // Вывод: 120
//   console.log(digitsToNumber(1, 4, 9)); // Вывод: 149
//   console.log(calculateArea(5, 10)); // Вывод: 50
//   console.log(calculateArea(5)); // Вывод: 25
//   console.log(isPerfectNumber(6)); // Вывод: true
//   printPerfectNumbers(1, 10000);
//   console.log(formatTime(12, 30, 45)); // Вывод: 12:30:45
//   console.log(timeToSeconds(1, 2, 3)); // Вывод: 3723
//   console.log(secondsToTime(7200)); // Вывод: 02:00:00
//   console.log(calculateDateDifference(10, 30, 15, 11, 45, 30)); // Вывод: 22:09:45


// Задание 1
// Создать объект, описывающий автомобиль (производитель, 
// модель, год выпуска, средняя скорость), и следующие функции 
// для работы с этим объектом.
// 1. Функция для вывода на экран информации об автомобиле.
// 2. Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. 
// Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.

class Car {
    constructor(manufacturer, model, year, averageSpeed) {
        this.manufacturer = manufacturer;
        this.model = model;
        this.year = year;
        this.averageSpeed = averageSpeed;
    }

    displayInfo() {
        console.log(`Производитель: ${this.manufacturer}`);
        console.log(`Модель: ${this.model}`);
        console.log(`Год: ${this.year}`);
        console.log(`Сред скорость: ${this.averageSpeed} km/h`);
    }

    calculateTime(distance) {
        let totalTime = distance / this.averageSpeed;
        let restTime = Math.floor(totalTime / 4) * 1;
        totalTime += restTime;
        return totalTime;
    }
}


let car = new Car("BMW", "M5CS", 2021, 200);
car.displayInfo();
let distance = 500;
let time = car.calculateTime(distance);
console.log(`Time to cover ${distance} km: ${time} hours`);


// Задание 2
// Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом.
// 1. Функция сложения 2-х объектов-дробей.
// 2. Функция вычитания 2-х объектов-дробей.
// 3. Функция умножения 2-х объектов-дробей.
// 4. Функция деления 2-х объектов-дробей.
// 5. Функция сокращения объекта-дроби.


class Fraction {
    constructor(numerator, denominator) {
        this.numerator = numerator;
        this.denominator = denominator;
    }

    add(fraction) {
        let resultNumerator = this.numerator * fraction.denominator + fraction.numerator * this.denominator;
        let resultDenominator = this.denominator * fraction.denominator;
        return new Fraction(resultNumerator, resultDenominator);
    }

    subtract(fraction) {
        let resultNumerator = this.numerator * fraction.denominator - fraction.numerator * this.denominator;
        let resultDenominator = this.denominator * fraction.denominator;
        return new Fraction(resultNumerator, resultDenominator);
    }

    multiply(fraction) {
        let resultNumerator = this.numerator * fraction.numerator;
        let resultDenominator = this.denominator * fraction.denominator;
        return new Fraction(resultNumerator, resultDenominator);
    }

    divide(fraction) {
        let resultNumerator = this.numerator * fraction.denominator;
        let resultDenominator = this.denominator * fraction.numerator;
        return new Fraction(resultNumerator, resultDenominator);
    }

    simplify() {
        const gcd = (a, b) => {
            if (b === 0) {
                return a;
            }
            return gcd(b, a % b);
        };
        const divisor = gcd(this.numerator, this.denominator);
        return new Fraction(this.numerator / divisor, this.denominator / divisor);
    }
}
let fraction1 = new Fraction(1, 2);
let fraction2 = new Fraction(1, 3);


let sum = fraction1.add(fraction2);
console.log("Сумма:", sum.numerator, "/", sum.denominator);


let difference = fraction1.subtract(fraction2);
console.log("Разность:", difference.numerator, "/", difference.denominator);


let product = fraction1.multiply(fraction2);
console.log("Произведение:", product.numerator, "/", product.denominator);


let quotient = fraction1.divide(fraction2);
console.log("Частное:", quotient.numerator, "/", quotient.denominator);


let simplifiedFraction = fraction1.simplify();
console.log("Сокращенная дробь:", simplifiedFraction.numerator, "/", simplifiedFraction.denominator);


// Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом.
// 1. Функция вывода времени на экран.
// 2. Функция изменения времени на переданное количество 
// секунд.
// 3. Функция изменения времени на переданное количество 
// минут.
// 4. Функция изменения времени на переданное количество 
// часов.
// Учтите, что в последних 3-х функциях, при изменении одной 
// части времени, может измениться и другая. Например: если ко 
// времени «20:30:45» добавить 30 секунд, то должно получиться 
// «20:31:15», а не «20:30:75»

class Time {
    constructor(hours, minutes, seconds) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }

    displayTime() {
        console.log(`${this.hours} час(а)ов, ${this.minutes} минут(ы),${this.seconds} секунд(ы)`);
    }

    changeSeconds(seconds) {
        this.seconds += seconds;
        this.minutes += Math.floor(this.seconds / 60);
        this.seconds %= 60;
        this.hours += Math.floor(this.minutes / 60);
        this.minutes %= 60;
        this.hours %= 24;
    }

    changeMinutes(minutes) {
        this.minutes += minutes;
        this.hours += Math.floor(this.minutes / 60);
        this.minutes %= 60;
        this.hours %= 24;
    }

    changeHours(hours) {
        this.hours += hours;
        this.hours %= 24;
    }
}


let currentTime = new Time(20, 30, 45);


currentTime.displayTime();

currentTime.changeSeconds(30);
currentTime.displayTime();

currentTime.changeMinutes(15);
currentTime.displayTime();


currentTime.changeHours(2);
currentTime.displayTime();