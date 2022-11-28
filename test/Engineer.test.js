const Engineer = require("../lib/Engineer");

test ("test Engineer values", () =>{
    const employee = new Engineer("John","0202", "email@email.com", "GitHubUser");
    expect (employee.gitHub).toBe("GitHubUser");

    expect (employee.getgitHub()).toBe("GitHubUser");
} )