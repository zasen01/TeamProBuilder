const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name,id,email, officeNumber){
            super(name,id,email)
            this.officeNumber = officeNumber
        }
        getOfficeNumber(){
            return this.officeNumber
        }
        getRoll(){
            return "Manager"
        }
}
module.exports=Manager;