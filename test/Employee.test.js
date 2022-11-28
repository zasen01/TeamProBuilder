const Employee = require("../lib/Employee");

test ("test employee values", () =>{
    const employee = new Employee("John","0202", "email@email.com");
    expect (employee.name).toBe("John");
    expect (employee.id).toBe("0202");
    expect (employee.email).toBe("email@email.com");

    expect (employee.getName()).toBe("John");
    expect (employee.getId()).toBe("0202");
    expect (employee.getEmail()).toBe("email@email.com");
} )