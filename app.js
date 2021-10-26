// node mods


const fs = require('fs');
const inquirer = require('inquirer');


//generate page
const generateHTML = require("./src/html-template")
//team roles

const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

//empty array for employee
let employeesArray = [];

// start questions

const managerQuestions = () => {
    
   return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name of the Manager?",
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log("Please enter manager name?")
                    return false
                }
            }
           
        },
        
        {
            type: "input",
            name: "id",
            message: "What is the manager's ID?",
            validate: idInput => {
                if (idInput) {
                    return true
                } else {
                    console.log("Please enter a ID for the manager!")
                    return false
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is the manager's email?",
            validate: emailInput => {
                if (emailInput) {
                    return true
                } else {
                    console.log("Please enter a email for the manager!")
                    return false
                }
            }
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Please enter the office number the the manager can be reached at!",
            validate: officeInput => {
                if (officeInput) {
                    return true
                } else {
                    console.log("Enter a number for the manager!")
                    return false
                }
            }
        }


    ])

    .then(managerInput => {
        const { name, id, email, officeNumber} = managerInput;
        const manager = new Manager (name, id, email, officeNumber);

        employeesArray.push(manager)
        console.log(manager)
    })
};
console.log(managerQuestions)


// employee questions
const newEmployee = () => {

  return inquirer.prompt([
        
        {
            type: "input",
            name: "name",
            message: " What is the name of the Employee?",
            
        },
        {
           type: "list",
           name: "role",
           message: "What position will the Emplyee have in the company?", 
           choices: ["Engineer", "Intern"]
           
        },
        {
           type: "input",
           name: "id",
           message: "What is the Employee ID?",
           
        },
        {
            type: "input",
            name: "email",
            message: "What is the Employees email address?",
            
        },
        {
            type: "input",
            name: "github",
            message: "Please enter the Employees githud username.",
            when: (input) => input.role === "Engineer",
            
        },
        {
            type: "input",
            name: "school",
            message: "Please enter the intern's school",
            when: (input) => input.role === "Intern",
            
        },
        
        {
            type: "confirm",
            name: "confirmEmployee",
            message: "Would you like to add more Employee's",
            default: false
        }
    ])
    .then(employeeInput => {
        let {confirmAddEmployee, school, github, role, name, id, email} = employeeInput

        let employee

        if ( role === "Intern") {
            employee = new Intern (name, id, email, school)

            console.log(employee)
        } else if ( role === "Engineer") {
            employee = new Engineer (github, name, id, email)

            console.log(employee)
        }

        employeesArray.push(employee)

        if (confirmAddEmployee) {
            return newEmployee (employeesArray)
        } else {
            return employeesArray
        }
    })

};
console.log(newEmployee)
// fs function to write in HTML
const writeFile = data => {
    fs.writeFile("../dist/index.html", data, err => {
        if (err) {
            console.log(err)
            return;
        } else {
            console.log("Success the team profiles is made")
        }
    })
};

 managerQuestions()
.then(newEmployee)
.then(employeesArray => {
    return generateHTML(employeesArray)
})
.then(pageHTML => {
    return writeFile(pageHTML)
})
.catch(err => {
    console.log(err)
})



