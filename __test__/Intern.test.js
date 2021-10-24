
const Intern = require("../lib/Intern")

test ("makes the intern", () => {
    const intern = new Intern("Dave", 6, "grubber109@gmail.com", "", 1);
    
    expect(intern.school).toEqual(expect.any(String));
});

test("school input", () => {
    const intern = new Intern("Dave", 6, "grubber109@gmail.com", "", 1);
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test("get employee role", () => {
    const intern = new Intern("Dave", 6, "grubber109@gmail.com", "", 1);
    
    expect(intern.getRole()).toEqual("Intern");
});