// require necessary packages
const inquirer = require('inquirer');
const fs = require('fs');
const { choices } = require('yargs');

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
  ]).then(response) // push to team array
};

// function to ask intern question
function newIntern(){};

// function to add employee to employee list
function addEmployee(){};

// function to initialize app
function init(){};

// function to write to HTML page