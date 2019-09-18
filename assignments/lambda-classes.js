// CODE here for your Lambda Classes
class Person {
  constructor(attrs) {
    this.name = attrs.name;
    this.age = attrs.age;
    this.location = attrs.location;
  }
  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}

class Instructor extends Person {
  constructor(attrs) {
    super(attrs);
    this.specialty = attrs.specialty;
    this.favLanguage = attrs.favLanguage;
    this.catchPhrase = attrs.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}`;
  }
  grade(name, subject) {
    return `${name} recieves a perfect score on ${subject}`;
  }
  score() {
    return Math.floor(Math.random() * 100);
  }
}

class Student extends Person {
  constructor(attrs) {
    super(attrs);
    this.previousBackground = attrs.previousBackground;
    this.favSubjects = attrs.favSubjects;
    this.className = attrs.className;
    this.grade = attrs.grade;
  }
  listsSubject() {
    return this.favSubjects;
  }
  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;
  }
  graduate() {
    if (this.grade >= 70) {
      return `${this.grade} is passing! ${this.name} has graduated!`;
    } else {
      return `${this.grade} is a failing grade, work harder!`;
    }
  }
}

class TeamLead extends Instructor {
  constructor(attrs) {
    super(attrs);
    this.gradClassName = attrs.gradClassName;
    this.favInstructor = attrs.favInstructor;
  }
  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel standy times!`;
  }
  debugsCode(name, subject) {
    return `${this.name} debugs ${name}'s code on ${subject}`;
  }
}

const Pace = new Instructor({
  name: "Pace Ellsworth",
  location: "AZ",
  age: 30,
  favLanguage: "Javascript",
  specialty: "Front-end",
  catchPhrase: "Whats up Broders"
});
const Josh = new Instructor({
  name: "Josh Knell",
  location: "home",
  age: 35,
  favLanguage: "React",
  specialty: "Front-end",
  catchPhrase: "Super easy, guys"
});

const Charles = new TeamLead({
  name: "Charles Rogers",
  location: "East Coast",
  age: 25,
  favLanguage: "CSS",
  specialty: "Front-End",
  catchPhrase: "Yo how you doin'?",
  gradClassName: "Web18",
  favInstructor: "Josh Knell"
});

const Marshall = new TeamLead({
  name: "Marshall Lanners",
  location: "L.A",
  age: 30,
  favLanguage: "Javascript",
  specialty: "Front-End",
  catchPhrase: "Does that make sense?",
  gradClassName: "Web17",
  favInstructor: "Dan Freihner"
});

const Cody = new Student({
  name: "Cody Hayes",
  age: 22,
  location: "California",
  previousBackground: "part-time job",
  className: "WebPT9",
  favSubjects: ["Javascript", "LESS", "React"],
  grade: Pace.score()
});

const Nick = new Student({
  name: "Nick Riley",
  age: 30,
  location: "California",
  previousBackground: "Back-End",
  className: "Web13",
  favSubjects: ["Java", "SQL", "Node"],
  grade: Josh.score()
});

console.log(Pace.demo("javascript"));
console.log(Josh.grade(Cody.name, "js3"));
console.log(Cody.listsSubject());
console.log(Charles.standUp("WebPT9"));
console.log(Marshall.debugsCode(Cody.name, "Js4"));
console.log(Cody.PRAssignment("React"));
console.log(Nick.sprintChallenge("CSS"));
console.log(Cody.speak());
console.log(Cody.graduate());
