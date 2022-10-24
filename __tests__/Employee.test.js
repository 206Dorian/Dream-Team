const Employee = require('../lib/Employee')

test('Does it create an employee object', ()=>{
const e = new Employee();
expect (typeof(e)).toBe('object')
});

test('Does it set name via constructor arguments', ()=>{
    const name = "Dorian";
    const e = new Employee(name);
    expect (e.name).toBe(name)
    });

    //test for id
    //test for oemail