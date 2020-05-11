/* ES2015 Class Syntax */

/* Basic Review 
  - the constructor method is a special method
  that will be used to instantiate new student
  instances.
*/

class Student { 
  // constructor methods define patterns i.e blueprints
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.tardies = 0;
    this.scores = [];
  }
  // Instance Methods
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }
  markLate() {
    this.tardies += 1;
    return `${this.firstName} ${this.lastName} has been late ${this.tardes}`;
  }
  addScore(score) {
    this.scores.push(score);
    return this.scores
  }
  calculateAverage() {
    let sum = this.scores.reduce((a,b) => a+b)
    return sum / this.scores.length;
  }
}

// to create a new instance, use the new keyword
let firstStudent = new Student("Jake", "Gosnell", 4);
let secondStudent = new Student("Shane", "Academia", 4);


