// Require JS lib for generating HTML 
const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js');
const Manager = require('./lib/Manager.js');
const Intern = require('./lib/Intern.js');


// Empty employees array
const employees = [];

//Generate HTML
const html = generateHTML(employees);

fs.writeFile('team.html', html, (err) => {
    if (err) throw err;
    console.log('HTML file generated!');

   //? 
   return html;
});


// TODO: Generate HTML function
function generateHTML(employees) {
    // TODO: ADD HTML function

    //? 
    return html;
}


module.exports = html; 