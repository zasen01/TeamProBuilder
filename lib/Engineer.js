const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name,id,email, gitHub){
        super(name,id,email)
        this.gitHub =gitHub
        }
        getgitHub(){
            return this.gitHub;
        }
        getRoll(){
            return "Engineer"
        }
}
module.exports=Engineer;