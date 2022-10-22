// require necessary packages
const inquirer = require('inquirer');
const fs = require('fs');
// const { choices } = require('yargs');

// pulling in classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


const team = [];

// function for creating a new employee
function newEmployee(){
  prompt([
    {
      type: 'list',
      choices: ['Engineer', 'Intern', 'Done'],
      message: 'Create another employee or select "Done" to finalize team',
      name: 'selection',
    }
  ])
  .then((choice) => {
    switch(choice.selection) {
      case 'Engineer':
        newEngineer()
        break;
      case 'Intern':
        newIntern()
        break;
      case 'Done':
        buildTeam();
        break;
    }
  })
}

// function to ask manager questions
const createManager = () => {
  prompt([
    {
      type: 'input',
      message: 'Enter manager name: ',
      name: 'name',
    },
    {
      type: 'input',
      message: 'Enter employee ID: ',
      name: 'id',
    },
    {
      type: 'input',
      message: 'Enter email: ',
      name: 'email',
    },
    {
      type: 'input',
      message: 'Enter office number: ',
      name: 'office',
    }
  ])
  .then(response => {
    
  })
}

// function to ask engineer questions
function newEngineer(){
  prompt([
    {
      type: 'input',
      message: 'Enter Engineer name: ',
      name: 'name',
    },
    {
      type: 'input',
      message: 'Enter employee ID: ',
      name: 'id',
    },
    {
      type: 'input',
      message: 'Enter employee email: ',
      name: 'email',
    },
    {
      type: 'input',
      message: 'Enter employee GitHub username: ',
      name: 'github',
    }
  ]).then(response => {
    const engineer = new Engineer(response.name, response.id, response.email, response.github);
    team.push(engineer);
    newEmployee();
  })
};

// function to ask intern question
function newIntern(){};

// function to add employee to employee list MAY NOT NEED?
function addEmployee(){};

// function to initialize app
function init(){};

// function to write to HTML page