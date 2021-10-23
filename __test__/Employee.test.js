
const Employee = require("../lib/Employee");

test("makes employee", () => {
    const employee = new Employee('Dave', 6, "grubber109@gmail.com", 1);

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    
});

test("makes employee name", () => {
    const employee = new Employee('Dave', 6, "grubber109@gmail.com", 1)

    expect(employee.getName()).toEqual(expect.any(String))
});

test("makes employee id", () => {
    const employee = new Employee('Dave', 6, "grubber109@gmail.com", 1)

    expect(employee.getId()).toEqual(expect.any(Number))
})

test("makes employee email", () => {
    const employee = new Employee('Dave', 6, "grubber109@gmail.com", 1)

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()))
})

test("get employee role", () => {
    const employee = new Employee('Dave', 6, "grubber109@gmail.com", 1)

    expect(employee.getRole()).toEqual("Employee")
})