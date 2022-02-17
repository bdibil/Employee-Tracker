// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('../lib/Employee')
const db = require('./connection');
const { query } = require('./connection');


testEmp = new Employee(99, 'Ber', 'Dib', 1, 'Engineer', 0, 1, 'Don')


// Constructor function for questions
function Question(type, message, name, choices) {
    this.type = type;
    this.message = message;
    this.name = name;
    this.choices = choices;
}

// Constructor function for Post
function Post(type, fName, lName, roleId, manId, salary, depId) {
    this.type = type;
    this.fName = fName;
    this.lName = lName;
    this.roleId = roleId;
    this.manId = manId;
    this.salary = salary;
    this.depId = depId;
}



// Array of questions for user input
const userChoice = ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department', 'Quit']
const q1 = new Question('list', 'What would you like to do?', 'choice', userChoice)


const depName = new Question('input', 'Departemnt Name: ', 'depName')

const roleQs = ['Role Name: ', 'Salary: ', 'Department ID: ']
const employeeQs = ['First Name: ', 'Last Name: ', 'Role: ', 'Manager: ']


const roleName = new Question('input', roleQs[0], 'roleName')
const roleSalary = new Question('input', roleQs[1], 'roleSalary')
const roleDept = new Question('input', roleQs[2], 'roleDept')


const empName = new Question('input', roleQs[0], 'empName')
const empLname = new Question('input', roleQs[1], 'empLname')
const empRole = new Question('input', roleQs[2], 'empRole')
const empMan = new Question('input', roleQs[3], 'empMan')




function displayResult(query) {
    db.query(query, (err, res) => {
        if (err) console.log(err)
        console.log(`\n`)
        console.table(res)
        if (res.length < 5) {
            console.log(`\n\n\n\n\n\n\n\n`)
        } else {
            for (let i = 0; i < res.length - 3; i++) {
                console.log(`\n`)
            }
        }
    });
}


function postResult(post) {
    // let params = [post.type, post.fName, post.lName, post.roleId, post.manId];
    let query
    let params
    switch (post.type) {
        case 'dept':
            query = 'INSERT INTO departments (dep_name) VALUES (?)'
            params = post.fName;
            updateDb(query, params)
            break;
        case 'role':
            query = 'INSERT INTO roles (title, salary, department_id) VALUES (?,?,?)'
            params = [post.fName, post.salary, post.depId]
            updateDb(query, params)
            break;
        case 'newEmp':



            break;
        case 'putEmp':



            break;

        default:
            break;


    }

}


function updateDb(query, params) {
    db.query(query, params, (err, result) => {
        if (err) console.log(err)
        console.log(`\n db updated \n`)
    });
}


const askInfo = async () => {
    let again = true;
    do {
        const ans1 = await inquirer.prompt([q1])
        let post = new Post

        switch (ans1.choice) {

            //  Employees     Routes
            case 'View All Employees':

                let allEmployees = 'SELECT employees.id AS  ID, employees.first_name AS First_Name, employees.last_name AS Last_Name, roles.title AS Job_Title, departments.dep_name AS Department, roles.salary AS Salary, manager_id AS Manager_ID FROM employees JOIN (departments JOIN roles ON departments.id = roles.department_id) ON employees.role_id = roles.id'
                displayResult(allEmployees)

                break;
            case 'Add Employee':

                break;
            case 'Update Employee Role':

                break;


            //  Roles     Routes
            case 'View All Roles':

                let allRoles = 'SELECT roles.title AS Job_Title, roles.id AS ID, departments.dep_name AS Department, roles.salary AS Salary FROM departments JOIN roles ON departments.id = roles.department_id'
                displayResult(allRoles)

                break;
            case 'Add Role':

                let ansR = await inquirer.prompt([roleName, roleSalary, roleDept])
                post.type = 'role'
                post.fName = ansR.roleName
                post.salary = ansR.roleSalary
                post.depId = ansR.roleDept
                postResult(post)

                break;

            //  Departments     Routes
            case 'View All Departments':

                let allDepartments = 'SELECT departments.dep_name AS Department, departments.id AS ID FROM departments'
                displayResult(allDepartments)

                break;
            case 'Add Department':

                // let post = new Post
                post.type = 'dept'
                let ans = await inquirer.prompt([depName])
                post.fName = ans.depName
                postResult(post)

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
    }
};


module.exports = askUser;