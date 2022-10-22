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

const manager = new Manager(name, id, email, office)
intern.//needs something




// In addition to Employee's properties and methods, Manager will also have the following:

// officeNumber

// getRole()—overridden to return 'Manager'