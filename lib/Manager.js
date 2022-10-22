const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, office) {
        this.office = office
        super(name, id, email);
    }

    getOffice() {
        return this.school
    }

    getRole() {
        return 'Manager'
    }

}

const manager = new Manager(answers.name, answers.id, answers.email, answers.office)
manager.//needs something

