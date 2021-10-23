const Engineer = require("../lib/Engineer.js")


test("makes the engineer", () => {
    const engineer = new Engineer("Dave", 6, "grubber109@gmail.com","", 1)

    expect(engineer.github).toEqual(expect.any(String))
});

test("GitHub user name", () => {
    const engineer = new Engineer("Dave", 6, "grubber109@gmail.com", "", 1)

    expect(engineer.github).toEqual(expect.stringContaining(engineer.github.toString()))
})

test("get the role", () => {
    const engineer = new Engineer("Dave", 6, "grubber109@gmail.com", 1)

    expect(engineer.getRole()).toEqual("Engineer")
})