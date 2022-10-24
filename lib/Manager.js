const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, office) {
        super(name, id, email);
        this.office = office
    }

    getOffice() {
        return this.office
    }

    getRole() {
        return 'Manager'
    }

}

// const manager = new Manager(answers.name, answers.id, answers.email, answers.office)
module.exports = Manager

