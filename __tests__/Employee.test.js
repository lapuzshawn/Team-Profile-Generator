// Require JS lib 
const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js');
const Manager = require('./lib/Manager.js');
const Intern = require('./lib/Intern.js');
const generateHTML = require('../generateHTML');



// generates HTML with ONE employee
describe('generateHTML', () => {
  test('generates HTML with one employee', () => {
    const employees = [
      {
        name: 'John ',
        id: 1,
        email: 'john@example.com',
        role: 'Manager',
        officeNumber: '101',
      },
    ];
    const expectedHTML = '<html>...</html>'; // Replace w/ expected HTML
    const html = generateHTML(employees);
    expect(html).toEqual(expectedHTML);
  });




// generates HTML with multiple employees
  test('generates HTML with multiple employes', () => {
    const employees = [
      {
        name: 'John Doe',
        id: 1,
        email: 'john@example.com',
        role: 'Manager',
        officeNumber: '101',
      },
      {
        name: 'Jane Smith',
        id: 2,
        email: 'jane@example.com',
        role: 'Engineer',
        github: 'jane',
      },
      {
        name: 'Bob Johnson',
        id: 3,
        email: 'bob@example.com',
        role: 'Intern',
        school: 'UC Irvine',
      },
    ];
    const expectedHTML = '<html>...</html>'; // Replace w/ expected HTML
    const html = generateHTML(employees);
    expect(html).toEqual(expectedHTML);
  });
});

// BUILD MORE TEST 


/*** NOTES BELOW  ***/

// const describe = require('jest');
// const expect = require('jest');
// const test = require('jest');