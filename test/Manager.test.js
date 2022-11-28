const Manager = require("../lib/Manager");

test ("test Manager values", () =>{
    const employee = new Manager("John","0202", "email@email.com", "Office 3");
    expect (employee.officeNumber).toBe("Office 3");

    expect (employee.getOfficeNumber()).toBe("Office 3");
} )