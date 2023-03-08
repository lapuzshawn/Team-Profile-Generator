// Require JS lib 
const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js');
const Manager = require('./lib/Manager.js');
const Intern = require('./lib/Intern.js');

//Define  Engineer classes
class Engineer extends Employee {
    constructor(name, id, email, github) {
      super(name, id, email);
      this.github = github;
    }
  
    getGithub() {
      return this.github;
    }
  
    getRole() {
      return 'Engineer';
    }
  }

  module.exports = Engineer;
