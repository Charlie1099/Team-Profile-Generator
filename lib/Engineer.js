const inquirer = require('inquirer');
const Employee = require('./Employee');

class Engineer extends Employee {
    //call employee constructor
    constructor (name, id, email, github) {
         super (name, id, email)

        this.github = github
    }

    gitGithub() {
        return this.github
    }

    getRole() {
        return "Engineer"
    }

}


module.exports = Engineer;