// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('../lib/Employee')

testEmp = new Employee(99,'Ber','Dib',1,'Engineer',0,1,'Don')


// Constructor function for questions
function Question(type, message, name, choices) {
    this.type = type;
    this.message = message;
    this.name = name;
    this.choices = choices;
}

// Array of questions for user input
const userChoice = ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit']
const q1 = new Question('list', 'What would you like to do?', 'choice', userChoice)


const managerQs = ['Please enter the team Manager name: ', 'What is the Manager Email address? ', 'What about office number? ']


const askInfo = async () => {
    let again = true;
    do {
        const ans1 = await inquirer.prompt([q1])
        const { init } = ans1
        switch (init) {
            case 'View All Employees':
                console.log('All Employees')
                break;
            case 'Add Employee':
                
                break;
            case 'Update Employee Role':
                
                break;
            case 'View All Roles':
                
                break;
            case 'Add Role':
                
                break;
            case 'View All Departments':
                
                break;
            case 'Add Department':
                
                break;
            case 'Quit':
                again = false;
                break;
            default:
                throw new Error("Something went wrong")
        }
    } while (again == true)
}


const askUser = {
    info: () => {
        askInfo()
        // console.log("   I'm   HERE")
    }    
};


module.exports = askUser;