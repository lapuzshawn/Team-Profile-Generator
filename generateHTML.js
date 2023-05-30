// Require inquirer & fs 
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

// Require JS lib 
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

// Function to generate HTML
function generateHTML(employees) {
  const templatePath = path.resolve(__dirname, 'templates', 'team.html');
  const template = fs.readFileSync(templatePath, 'utf8');

  // Replace placeholders in the template with actual data
  let html = template.replace('{{team}}', generateTeamSection(employees));

  return html;
}

// Function to generate the team section of the HTML
// function generateTeamSection(employees) {
//   let teamHtml = '';

//   employees.forEach((employee) => {
//     let roleHtml = '';
//     if (employee === 'Manager') {
//       roleHtml = generateManagerHtml(employee);
//     } else if (employee === 'Engineer') {
//       roleHtml = generateEngineerHtml(employee);
//     } else if (employee === 'Intern') {
//       roleHtml = generateInternHtml(employee);
//     }

//     teamHtml += roleHtml;
//   });

//   return teamHtml;
// }

function generateTeamSection(employees) {
  let teamHtml = '';

  teamHtml = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <title>My Team</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" 
        crossorigin="anonymous">
    </head>
    <body>
      <div class="container">
        <h1>My Team Members</h1>
          <div class="card-deck">`;
        

  employees.forEach((employee) => {
    let roleHtml = '';
    if (employee instanceof Manager) {
      roleHtml = generateManagerHtml(employee);
    } else if (employee instanceof Engineer) {
      roleHtml = generateEngineerHtml(employee);
    } else if (employee instanceof Intern) {
      roleHtml = generateInternHtml(employee);
    }

    teamHtml += roleHtml;
  });

  teamHtml += `

          </div>
      </div>
  </body>
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" 
  integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
  crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
  integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
  crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
  integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGz></script>
  `
  return teamHtml;
}

// Function to generate HTML for a manager
function generateManagerHtml(manager) {
  return `
    <div class="card manager">
      <div class="card-header bg-primary text-white"">
        <h3 class="card-title">${manager.getName()}</h3>
        <h4>${manager.getRole()}</h4>
      </div>
      <div class="card-body">
        <ul class= "list-group list-group-flush">  
          <li class= "list-group-item">Employee ID: ${manager.getId()}</li>
          <li class= "list-group-item">Email: ${manager.getEmail()}</li>
          <li class= "list-group-item">Office Number: ${manager.officeNumber}</li>
        </ul>
      </div>
    </div>
  `;
}

// Function to generate HTML for an engineer
function generateEngineerHtml(engineer) {
  return `
    <div class="card engineer">
      <div class="card-header bg-primary text-white"">
        <h3 class="card-title">${engineer.getName()}</h3>
        <h4>${engineer.getRole()}</h4>
      </div>
      <div class="card-body">
        <ul class= "list-group list-group-flush">
          <li class= "list-group-item">Employee ID: ${engineer.getId()}</li>
          <li class= "list-group-item">Email: ${engineer.getEmail()}</li>
          <li class= "list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
        </ul>
      </div>
    </div>
  `;
}

// Function to generate HTML for an intern
function generateInternHtml(intern) {
  return `
    <div class="card intern">
      <div class="card-header bg-primary text-white"">
        <h3 class="card-title">${intern.getName()}</h3>
        <h4>${intern.getRole()}</h4>
      </div>
      <div class="card-body">
        <ul class= "list-group list-group-flush">
          <li class= "list-group-item">Employee ID: ${intern.getId()}</li>
          <li class= "list-group-item">Email: ${intern.getEmail()}</li>
          <li class= "list-group-item">School: ${intern.getSchool()}</li>
        </ul>
      </div>
  `;
}

// module.exports = generateHTML;
module.exports = generateTeamSection;
