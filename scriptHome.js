let money, time;

// function start() {
// 	money = prompt("Введите обязательную статью расходов в этом месяце", ''),
// 		time = prompt("Во сколько обойдется?", '');

// 	while (isNaN(money) || money == "" || money == null) {
// 		money = prompt("Введите обязательную статью расходов в этом месяце", '');
// 	}
// }

// start();

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true,
	chooseExpenses: function () {
		for (let i = 0; i < 2; i++) {
			let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
				b = prompt("Во сколько обойдется?", '');

			if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
				a != '' && b != '' && a.length < 50) {
				console.log("done");
				appData.expenses[a] = b;
			} else {
				console.log("Not done. Try again!");
				i--;
			}
		}
	},
	checkSaving: function () {
		if (appData.savings == true) {
			let save = +prompt("Какова сумма накоплений?"),
				percent = +prompt("Под какой процент?");

			appData.monthIncome = save / 100 / 12 * percent;
			alert("Доход в месяц с вашего депозита:" + appData.monthIncome);
		}
	},
	chooseOptExpenses: function () {
		for (let i = 1; i <= 3; i++) {
			let questionOptExpenses = prompt("Статья необязательных расходов?");
			appData.optionalExpenses[i] = questionOptExpenses;
			console.log(appData.optionalExpenses);
		}
	},

	detectDayBudjet: function () {
		appData.moneyPerDay = (appData.budget / 30).toFixed(1);
		alert("Ежедневный бюджет = " + appData.moneyPerDay);
	},

	detectLevel: function () {
		if (appData.moneyPerDay < 100) {
			console.log("Минимальный уровень достатка");
		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
			console.log("Средний уровень достатка");
		} else if (appData.moneyPerDay > 2000 && appData.moneyPerDay < 10000) {
			console.log("Высокий уровень достатка");
		} else {
			console.log("Что-то пошло  не так");
		}
	},

	chooseIncome: function () {
		let items;
		for (let i = 0; i < 1; i++) {
			let items = prompt("Что принесет дополнительный доход?", "");
			if ((typeof(items)) != 'string' || items == '' || typeof (items) == null ) {
				alert("You enter incorrect data");
				i--;
			} else {
				console.log("done");
				appData.income = items.split(', ');
			}
		}
		appData.income.forEach(function (item, index, array) {
			alert("Источники дохода: " + (index+1) + " - " + item );
		});
		// 
		// appData.income.push(prompt("Еще что?"));
		// appData.income.sort();
	}
};

appData.chooseIncome();

for (let key in appData) {
	alert("Наша программа включает в себя данные: " + key + appData[key]);
}

// let answer = prompt("", "");
// let arr = [];
// arr = answer.split(' ');
// arr.push('zzz');
// console.log(arr);