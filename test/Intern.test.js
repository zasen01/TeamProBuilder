const Intern = require("../lib/Intern");

test ("test Intern values", () =>{
    const employee = new Intern("John","0202", "email@email.com", "UNCC");
    expect (employee.school).toBe("UNCC");

    expect (employee.getSchool()).toBe("UNCC");
} )