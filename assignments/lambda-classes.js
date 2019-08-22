class Person {
  constructor(attr) {
      this.name = attr.name
      this.age = attr.age
      this.location = attr.location
  }
  speak() {
      return `Hello my name is ${this.name}, I am from ${this.location}.`;
  }
}

class Instructor extends Person {
  constructor (instaAttr) {
      super(instaAttr)
      this.specialty = instaAttr.specialty
      this.favLanguage = instaAttr.favLanguage
      this.catchPhrase = instaAttr.catchPhrase
    }
  demo(subject) {
      return `Today we are learning ${subject}`;
  }
  grade(student, subject) {
      return `${student} receives a perfect score on ${subject}`;
  }
  randomGrade(Student, max, min) {
        return Math.random(Student.grade) * (max - min) + min;
  }
}

class Student extends Person {
  constructor (studAttr) {
      super (studAttr)
      this.previousBackground = studAttr.previousBackground
      this.className = studAttr.className
      this.favSubjects = studAttr.favSubjects
      this.grade = studAttr.grade
  }
  listsSubjects() {
      this.favSubjects.forEach(function(items) {
        console.log(items);
      })
  }
  PRAssignment(subject) {
      return `${this.name} has submitted a PR for ${subject}`
  }
  sprintChallenge(subject) {
      return `${this.name} has begun sprint challenge on ${subject}`
  }
}

class ProjectManager extends Instructor {
  constructor(PMAttr) {
      super(PMAttr)
      this.gradClassName = PMAttr.gradClassName
      this.favInstructor = PMAttr.favInstructor
  }
  standUp(channel) {
      return `${this.name} announces to ${channel}, @channel standy times!`
  }
  debugsCode(Student, subject) {
      return `${this.name} debugs ${Student.name} on ${subject}.`
  }
}

const instructor1 = new Instructor({
name: 'John',
age: '40',
location: 'California',
specialty: 'Javascript',
favLanguage: 'Javascript',
catchPhrase: 'Clear, Save, Run',
})

const instructor2 = new Instructor({
name: 'Junior',
age: '50',
location: 'California',
specialty: 'CSS',
favLanguage: 'CSS with less',
catchPhrase: 'Break it!',
})

const student1 = new Student({
name: 'Joe',
age: '25',
location: 'California',
previousBackground: 'Electrician',
className: 'WEB23',
favSubjects: ['Javascript', 'CSS', 'HTML'],
grade: 90
})

const student2 = new Student({
name: 'Jane',
age: '30',
location: 'California',
previousBackground: 'Artist',
className: 'WEB23',
favSubjects: ['React', 'Java'],
grade: 85
})


const PM1 = new ProjectManager({
name: 'Jose',
age: '27',
location: 'California',
specialty: 'Javascript',
favLanguage: 'Javascript',
catchPhrase: 'Run it!',
gradClassName: 'CS1',
favInstructor: 'Ryan'
})

const PM2 = new ProjectManager({
name: 'Julia',
age: '29',
location: 'California',
specialty: 'Javascript',
favLanguage: 'Javascript',
catchPhrase: 'Killin it',
gradClassName: 'CS1',
favInstructor: 'Dan'
})


console.log(instructor1.speak());
console.log(student1.speak());
console.log(PM1.speak());
console.log(instructor2.speak());
console.log(student2.speak());
console.log(PM2.speak());
console.log(instructor1.demo('Classes'));
console.log(instructor1.grade('Jasmine', 'Classes'));
console.log(instructor2.demo('Arrays'));
console.log(instructor2.grade('Joseph', 'Arrays'));
student1.listsSubjects();
student2.listsSubjects();
console.log(student1.PRAssignment('Classes'));
console.log(student1.sprintChallenge('Classes'));
console.log(student2.PRAssignment('Arrays'));
console.log(student2.sprintChallenge('Arrays'));
console.log(PM1.standUp('web23'));
console.log(PM2.standUp('web23_help'));
console.log(PM1.debugsCode(student1, 'JS'));
console.log(PM2.debugsCode(student2, 'CSS'));
console.log(instructor1.randomGrade(student1, 100, 1));
console.log(PM2.randomGrade(student2, 100, 1));