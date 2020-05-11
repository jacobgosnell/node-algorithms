/* ES2015 Class Syntax */

/* Basic Review 
  - the constructor method is a special method
  that will be used to instantiate new student
  instances.
  - inside of all instance methods and constructor, 
  the keyword `this` refers to the object created 
  from that class (also known as an instance)
  - instance = object created from a class
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
  // static Methods
  // - static methods are called without instantiating their class 
  // and cannot be called through a class instance.
  // They are often used to create utility functions for an application.
  static enrollStudents() {
    return "ENROLLING STUDENTS!"
  }
}

// to create a new instance, use the new keyword
let firstStudent = new Student("Jake", "Gosnell", 4);
let secondStudent = new Student("Shane", "Academia", 4);

// Another use case for a utility methods
class Point {
  constructor(x,y) {
    this.x = x;
    this.y = y;
  }

  static distance(a,b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

