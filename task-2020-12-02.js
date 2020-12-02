/*
№1 Додати нову властивість "secondName" у об,єкти mailman та manager і присвоїти довільне значення

№2 Додати метод-привітання у об,єкт mailman

№3 Вивести у консоль суму значень віку обох працівників

№4 Нехай менеджер привітає поштаря по імені

№5 Викликати функцію getRandomNumber щоб отримати випадкове число та вивести це число в консоль

№6 Якщо число з завдання №5 більше, ніж поточний рік зі змінної currentYear, тоді додати властивість "shouldBePromoted" об,єкту manager зі значенням true

№7 Додати в обидва об,єкти поле "random" і зробити значення випадковим для кожного разу коли буде запускатися файл

№8 Створити нову функцію, що буде порівнювати рік приєднання людей, виводити на екран обидва значення і викликати функціб-привітання того, чиє число буде більшим
*/

const pi = 3.14;
const currentYear = 2020;
const justNumber = 42;

const mailman = {
	name: 'Kurmumbulai',
	age: 36,
	isMarried: true,
	joined: 2009
};

const manager = {
	name: 'Panteleimon',
	age: 54,
	isMarried: false,
	joined: 2014,
	sayHiToPerson: function(personName) {
		console.log(`Hello, ${personName}! I'm a manger!`);
	}
};

function getRandomNumber() {
	return parseInt(`${Date.now()}`.substr(-4));
}
