/* eslint-disable no-undef */
/* eslint-disable no-alert */
/* eslint-disable max-len */
/* eslint-disable no-console */
/*
let userName = prompt('Как тебя зоут?');
alert(`Тебя зовут ${userName}!`); // Тебе зовут ...!

let apples = 3
let mangos = 4
alert(apples + mangos)
 */

console.log(3 + 2);
console.dir(3);

const myName = 'Grisha';
console.log(myName);
console.log(console.log(10)); // 10 undefind

const myBirthDay = '07.02.2000'; // let менять можно, const нет
console.log(myBirthDay);

const myobjectA = { // ссылочный тип
  first: 10,
  secound: true,
};

const mycopyOfA = myobjectA; // скопировал myobjectA
mycopyOfA.first = 20; // изменил свойство first в mycopyOfA, и значение поменялось в myobjectA
console.log(myobjectA); // { first: 20, secound: true }
mycopyOfA.third = false; // добавил свойство third
console.log(myobjectA); // { first: 20, secound: true, third: false }

function funkcia() {
  console.log('Вызываю функцию');
}

funkcia();

/* funkcia = 10 // меняем значение функции
funkcia() // Итог: TypeError: funkcia is not a function
// Это недастаток динамической типизации, поэтому лучше использовать const */

const funkcia2 = () => {
  console.log('Privet');
}; // стрелочная функция

funkcia2();

/* funkcia2 = 10  */
// TypeError: Assignment to constant variable.
// уже на этапе переприсвоения значения выдает ошибку, так как const не меняется.

const myCity = {
  city: 'Rostov-on-Don',
  popular: true,
  country: 'Russia', // const - объект, country,city,popular - свойства, RnD - значение свойства
};

console.log(myCity);
console.log(myCity.city);
console.log(myCity.popular); // Mycity.popular - Точечная запись
// изменение значий свойств через точечную запись:

myCity.city = 'Taganrog';
console.log(myCity);

// добавление новых свойств

myCity.street = 'Nekrasovskiy';
console.log(myCity);

delete myCity.street; // удаление свойства street
console.log(myCity);

myCity.street = 'Nekrasovkiy'; // добавление свойства с квадратными скобками
console.log(myCity);

const notMyCountry = 'someCountry';
myCity[notMyCountry] = 'USA'; // чтобы добавить свойство которое названо как переменная
console.log(myCity);

const myCityInFuture = {
  city: 'New Yourk',
  cityInfo: {
    isPupular: true,
    country1: 'USA',
  },
}; // Вложенные свойства

console.log(myCityInFuture.cityInfo.country1);

const city = 'New Yourk';

const userProfile = {
  city, // Сокращенный формат записи  свойств, если уже существует переменная
  user: myName,
  city2: myCityInFuture,
  cityGreeting() { // свойство, содержащее функцию
    console.log('Greetings!');
  },
  cityGreeting2() { // сокращенный формат записи метода
    console.log('Greetings!');
  },
};
userProfile.cityGreeting();
userProfile.cityGreeting2();
globalThis.console.log(userProfile); // console это свойство globalThis

/* JSON.parse() // конвертация строки с сервера в Js */
JSON.stringify(userProfile); // наоборот

function sum(chislo1, chislo2) { // Оптимизация кода с помощью функции, чтобы не было одинаковых строчек кода
  const c = chislo1 + chislo2;
  console.log(c);
}

sum(5, 21);

chislo1 = 15;
chislo2 = -14;

sum(chislo1, chislo2);

console.dir(sum); // в консоле, чтобы отоброзить свойста функции(Объекта)

function func1() {
  console.log('Bogdan');
}

/* function funcWithCallback (callBackFunction) { // КОЛБЭК ФУНКЦИЯ
    callBackFunction()
}
funcWithCallback(func1) */

setTimeout(func1, 4000); // встроенная колбэк функция (вызывает функцию с задержкой 4000мс)

/* Используя конструкцию if..else, напишите код, который будет спрашивать:
„Какое «официальное» название JavaScript?“
Если пользователь вводит «ECMAScript»,
 то показать: «Верно!», в противном случае – отобразить: «Не знаете? ECMAScript!» */

const value1 = prompt('Какое "официальное" название JavaScript?', '');

if (value1 === 'ECMAScript') {
  console.log('Верно!');
} else {
  console.log('Не знаете? ECMAScript!');
}

/*     Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert(Заменил на console.log):

    1, если значение больше нуля,
    -1, если значение меньше нуля,
    0, если значение равно нулю.
    Предполагается, что пользователь вводит только числа */

const value2 = prompt('Введите число', 0);

if (value2 > 0) {
  console.log(1);
} else if (value2 < 0) {
  console.log(-1);
} else {
  console.log(0);
}

/* Перепишите конструкцию if с использованием условного оператора '?':

let result;

if (a + b < 4) {
  result = 'Мало';
} else {
  result = 'Много';
}
*/

// Решение: result = (a + b < 4) ? 'Мало' : 'Много';

/* let login = prompt("sadasd", "");
let message = (login == 'Сотрудник') ? 'Привет' :
  (login == 'Директор') ? 'Здравствуйте' :
  (login == '') ? 'Нет логина' :
  '';
alert(message); */

/* let userName = prompt("Кто там", "");

    if (userName === "Админ") {

          let pass = prompt("Пароль?", "");

          if (pass === "Я главный") {
            alert("здравствуйте");
          } else if (pass === "" || pass === null) {
            alert("Отмена");
          } else {
              alert("Неверный пароль");
          }
          } else if (userName === "" || userName === null) {
    alert("Отменено");
} else {
    alert("Я вас не знаю");
          }
 */

/*           document.querySelector('#id').addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
              console.log('Grisha tiger');
            }
        });
 */
/*         https://learn.javascript.ru/switch
        задача 1

        let browser = prompt ("Название?" , "");
if (browser === "Edge") {
    alert( "You've got the Edge!" );
} else if (browser === "Chrome" || browser === 'Firefox' || browser === 'Safari') {
    alert( 'Okay we support these browsers too' );
} else {
    alert( 'We hope that this page looks ok!' );

} */
