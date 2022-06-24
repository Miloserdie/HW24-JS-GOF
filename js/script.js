const rose = (function() {
	const module = {};
	const personname = 'Rose';
	let observers = [];

	module.getObservers = function () {
		return observers;
	}

	module.getName = function () {
		return personname;
	}

	module.subscribe = function (observer) {
		observers.push(observer);
	}

	module.unsubscribe = function (observer) {
		observers = observers.filter(obs => obs !== observer);
	}

	module.answerToConfession = function (observer) {
		console.log(`${personname}: Yes, I agree ${observer}!`);

		for (let obs of observers) {
			obs.reaction(observer, rose);
		}
	}

	return module
})();

const billy = (function () {
	const personname = 'Billy';
	const module = {};

	module.getName = function () {
		return personname;
	}

	module.сonfess = function (subject) {
		console.log(`${personname}: ${subject.getName()}, let's dating!`);
		subject.answerToConfession(personname);
	}

	module.reaction = function(name, subject) {
		if(personname === name) {	
			console.log(`${personname}: Yippee. I' love you ${subject.getName()}!`);
		} else {
			console.log(`${personname}: Ooooh no( ` );
		}
	}

	return module
})();

const jack = (function () {
	const personname = 'Jack';
	const module = {};

	module.getName = function () {
		return personname;
	}

	module.сonfess = function (subject) {
		console.log(`${personname}: ${subject.getName()}, let's dating!`);
		subject.answerToConfession(personname);
	}

	module.reaction = function(name, subject) {
		if(personname === name) {	
			console.log(`${personname}: Yippee. I' love you ${subject.getName()}!`);
		} else {
			console.log(`${personname}: Ooooh no( ` );
		}
	}

	return module
})();

rose.subscribe(billy)
rose.subscribe(jack)

billy.сonfess(rose)

console.log(rose.getObservers());
