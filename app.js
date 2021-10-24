// node mods
const fs = require('fs');
const inquirer = require('inquirer');

//generate page

//team roles
const Employee = require("./lib/Employee")
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

//empty array for employee
let employeesArray = [];

// start questions

const newEmployee = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: " What is the name of the Employee?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter a name!")
                    return false
                }
            }
        },
        {
           type: "list",
           name: "role",
           message: "What position will the Emplyee have in the company?", 
           choices: ["Engineer", "Intern", "Manager"]
        },
        {
           type: "input",
           name: "id",
           message: "What is the Employee ID?",
           validate: idInput => {
               if (idInput) {
                   return true
               } else {
                   console.log("Please enter a valade ID number!")
                   return false
               }
           }
        },
        {
            type: "input",
            name: "email",
            message: "What is the Employees email address?",
            validate: emailInput => {
                if (emailInput) {
                    return true
                } else {
                    console.log("Please enter a Email address!")
                }
            }
        },
    ])
}



