// Set up project w require mwthods

// Require inquirer & fs 
const inquirer = require('inquirer');
const fs = require('fs');
// Require JS lib 
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
// Require gen-HTML.js 
// const htmlGEN = require('./lib/generateHTML.js');


//Prompts user for info
const employees = [];

function promptUser() {
  return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: "What is the employee's name?",
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the employee's ID?",
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the employee's email address?",
    },
    {
        type: 'list',
        name: 'role',
        message: "What is the employee's role?",
        choices: ['Manager', 'Engineer', 'Intern'],
    },
    {
        name: 'officeNumber',
        message: "What is the manager's office number?",
        when: (answers) => answers.role === 'Manager',
    },
    {   
        type: 'input',
        name: 'github',
        message: "What is the engineer's GitHub username?",
        when: (answers) => answers.role === 'Engineer',
    },
    {
        type: 'input',
        name: 'school',
        message: "What school does the intern attend?",
        when: (answers) => answers.role === 'Intern',
    },
    {
        type: 'confirm',
        name: 'addAnother',
        message: 'Add another employee?',
        default: true,
    }
  ])
};



//Init function for info prompted 
async function init() {

    console.log('Please enter information about each employee:');

    let keepPrompting = true;
        while (keepPrompting) {
        const answers = await promptUser();
        
        const { name, id, email, role, officeNumber, github, school, addAnother } = answers;
        
        if (role === 'Manager') {
            employees.push(new Manager(name, id, email, officeNumber));
            } else if (role === 'Engineer') {
            employees.push(new Engineer(name, id, email, github));
            } else if (role === 'Intern') {
            employees.push(new Intern(name, id, email, school));
        }
        if (!addAnother) {
            keepPrompting = false;
        }
    };

    console.log('Generating HTML...');
    const generateHTML = require('./generateHTML');
    const generateTeamSection = require('./generateHTML');
    // const html = generateHTML(employees);
    const html = generateTeamSection(employees);
  
    fs.writeFile('team.html', html, (err) => {
      if (err) throw err;
      console.log('HTML file generated!');
    });
}


    
    
// Test code after 
// Use __test___ to write jest tests 

init();