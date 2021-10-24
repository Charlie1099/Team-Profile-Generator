
const Employee = require('./Employee');


class Intern extends Employee {
    constructor (name, id, email, school) {
        // call employee constructor 
        super (name, id, email);

        this.school = school;
    }

    //school input
    getSchool () {
        return this.school;
    }

    //intern role
    getRole () {
        return "Intern";
    }
}

module.exports = Intern;