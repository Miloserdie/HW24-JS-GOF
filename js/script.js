function Subject(name) {
	const personName = name;
	let observers = [];

	this.getName = function() {
		return personName;
	}

	this.getObservers = function() {
		return observers;
	}

	this.subscribe = function(observer) {
		observers.push(observer);
	}

	this.unsubscribe = function(observer) {
		observers = observers.filter(obs => obs !== observer);
	}

	this.answerToConfession = function(observer) {
		console.log(`${personName}: Yes, I agree ${observer}!`);
	
		for (let obs of observers) {
			obs.reaction(observer, this);
		}
	}
}

function Observer(name) {
	const personName = name;

	this.getName = function() {
		return personName;
	}

	this.сonfess = function (subject) {
		console.log(`${personName}: ${subject.getName()}, let's dating!`);

		subject.answerToConfession(personName);
	}

	this.reaction = function(name, subject) {
		if(personName === name) {	
			console.log(`${personName}: Yippee. I' love you ${subject.getName()}!`);
		} else {
			console.log(`${personName}: Ooooh no( ` );
		}
	}
}

const rose = new Subject('Rose');

const jack = new Observer('Jack');

const billy = new Observer('Billy');

rose.subscribe(jack);
rose.subscribe(billy);

billy.сonfess(rose);