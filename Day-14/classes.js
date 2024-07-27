// Activity 1: class definition
class Person {
  
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    return `Hello, ${this.name}`
  }

  static genericGreetingMessage(name) {
    return `Hello, ${name}`
  }

  updateAge(age) {
    this.age = age;
  }

  set fullName(fullName) {
    this.firstName = fullName.split(" ")[0];
    this.lastName = fullName.split(" ")[1];
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

const kaif = new Person("kaif", 20);
console.log(kaif.greeting());

kaif.updateAge(21);

console.log(kaif.age);

// Activity 2: class inheritance
class Student extends Person {
  static noOfStudents = 0; 
  
  constructor(studentId) {
    super("", "")
    this.studentId = studentId;
  }

  static increment() {
    this.noOfStudents++;
  }

  printStudentId() {
    return this.studentId;
  }

  greeting() {
    return `Hello, ${this.name}and student id is: ${this.studentId}`
  }
}

const mohdkaif = new Student(2001);
Student.increment();
const mohdkakaiif = new Student(2001);
Student.increment();

console.log(mohdkaif.printStudentId());
console.log(mohdkaif.greeting());

// Activity 3: static methods and properties
console.log(Person.genericGreetingMessage("mohd kaif"));
console.log(Student.noOfStudents);

// Activity 4: getters and setters
kaif.fullName = "Mohd Kaif";
console.log(kaif.fullName);
kaif.fullName = "Mohd Saifi"
console.log(kaif.fullName);


// Activity 5: private fields (optional)
class Balance {
  static #balance = 0;

  static deposit(amount) {
    this.#balance += amount; 
  }

  static withdraw(amount) {
    this.#balance -= amount;
  }

  static balance() {
    return this.#balance;
  }
}

console.log(Balance.balance());

Balance.deposit(1000000);
console.log(Balance.balance());
Balance.withdraw(5000);
console.log(Balance.balance());