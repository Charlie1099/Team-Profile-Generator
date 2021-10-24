
const Manager = require("../lib/Manager");

test("makes Manager", () => {
    const manager = new Manager("Dave", 6, "grubber109@gmail.com", 1);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("emplyee role", () => {
    const manager = new Manager("Dave", 6, "grubber109@gmail.com", 1);

    expect(manager.getRole()).toEqual("Manager");
});