let money, time;

function start () {
	money = prompt("Введите обязательную статью расходов в этом месяце", ''),
	time = prompt("Во сколько обойдется?", '');

	while (isNaN(money) || money == "" || money == null) {
		money = prompt("Введите обязательную статью расходов в этом месяце", '');
	}
}

start();

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true,
	chooseExpenses: function() {
		for (let i = 0; i < 2; i++) {
			let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
				b = prompt("Во сколько обойдется?", '');
				
				if ( (typeof(a))==='string' && (typeof (a)) != null &&  (typeof (b)) != null 
					&& a != '' && b != '' && a.length<50) {
						console.log("done");
						appData.expenses[a] = b;
					} else {
						console.log("Not done. Try again!");
						i--;
					}
		}
	},
	checkSaving: function() {
		if (appData.savings == true) {
			let save = +prompt("Какова сумма накоплений?"),
				percent = +prompt("Под какой процент?");
	
				appData.monthIncome = save/100/12*percent;
				alert("Доход в месяц с вашего депозита:" + appData.monthIncome);
		}
	},
	chooseOptExpenses: function() {
		for (let i = 1; i <= 3; i++) {
			let questionOptExpenses = prompt("Статья необязательных расходов?");
			appData.optionalExpenses[i] = questionOptExpenses;
			console.log(appData.optionalExpenses);
		}
	}
};




appData.moneyPerDay = (appData.budget / 30).toFixed(1);

alert("Ежедневный бюджет = " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
	console.log ("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000 ) {
	console.log ("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000 && appData.moneyPerDay < 10000 ) {
	console.log ("Высокий уровень достатка");
} else {
	console.log ("Что-то пошло  не так");
}
