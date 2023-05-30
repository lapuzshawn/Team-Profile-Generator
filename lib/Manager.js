// Require JS lib 
const Employee = require('./Employee');
// const Engineer = require('./lib/Engineer.js');
// const Manager = require('./lib/Manager.js');
// const Intern = require('./lib/Intern.js');


//Define Manager classes
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
      super(name, id, email);
      this.officeNumber = officeNumber;
    }
  
    getOfficeNumber() {
      return this.officeNumber;
    }
  
    getRole() {
      return 'Manager';
    }
  }

  module.exports = Manager;
