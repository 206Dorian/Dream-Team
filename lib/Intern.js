const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school
        
    }

    getSchool() {
        return this.school
    }

    getRole() {
        return 'Intern'
    }

}

// const intern = new Intern(answers.name, answers.id, answers.email, answers.github)
module.exports = Intern