// Require JS lib 
const Employee = require('./Employee');
// const Engineer = require('./lib/Engineer.js');
// const Manager = require('./lib/Manager.js');
// const Intern = require('./lib/Intern.js');



//Define Intern classes
class Intern extends Employee {
    constructor(name, id, email, school) {
      super(name, id, email);
      this.school = school;
    }
  
    getSchool() {
      return this.school;
    }
  
    getRole() {
      return 'Intern';
    }
  }

  module.exports = Intern;
