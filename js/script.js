class Subject {
	constructor(name) {
		this.name = name;
		this.observers = [];
	}

	subscribe(observer) {
		this.observers.push(observer);
	}

	unsubscribe(observer) {
		this.observers = this.observers.filter(obs => obs !== observer);
	}

	answerToConfession(observer) {
		console.log(`${this.name}: Yes, I agree ${observer}!`);

		for (let obs of this.observers) {
			obs.reaction(observer, this);
		}
	}
}

class Observer {
	constructor(name) {
		this.name = name;
	}

	сonfess(subject) {
		console.log(`${this.name}: ${subject.name}, let's dating!`);
		subject.answerToConfession(this.name);
	}

	reaction(name, subject) {
		if(this.name === name) {	
			console.log(`${this.name}: Yippee. I' love you ${subject.name}!`);
		} else {
			console.log(`${this.name}: Ooooh no( ` );
		}
	}
}

const rose = new Subject('Rose');

const billy = new Observer('Billy');

const jack = new Observer('Jack')

rose.subscribe(billy);
rose.subscribe(jack);

billy.сonfess(rose);
console.log(rose);

