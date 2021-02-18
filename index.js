class Person {
    // setup
    constructor(personFirstName, personLastName) {
        this.firstName = personFirstName;
        this.lastName = personLastName;
    }

    // class body
    getFormattedName() {
        return `${this.firstName[0]}. ${this.lastName}`;
    }
}

const employee1 = new Person('Joe', 'Doe'); // create a new instance of the Person class

console.log(employee1);
console.log(employee1.getFormattedName());

const employee2 = new Person('Jane', 'Doe');

console.log(employee2);
console.log(employee2.getFormattedName());


class Counter {
    constructor() {
        this.count = 0;
    }

    add() {
        this.count++;

        return this.count;
    }

    subtract() {
        this.count--;

        return this.count;
    }
}

// Something similar with an object
// const CounterObj = {
//     count: 10,
//     add: function() {
//         this.count++;

//         return this.count;
//     }
// }

const myCounter = new Counter();

console.log(myCounter.hasOwnProperty('subtract')); // true

console.log(myCounter, myCounter.count)
const myLikesCounter = new Counter();

console.log('counter 1 is now at ', myCounter.add());
console.log('counter 1 is now at ', myCounter.subtract());
console.log('counter 2 is now at ', myLikesCounter.add());
console.log('counter 2 is now at ', myLikesCounter.add());
console.log('counter 1 is now at ', myCounter.subtract());
console.log('counter 1 is now at ', myCounter.add());
