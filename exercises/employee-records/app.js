let employees = []
function employee(name, jobTitle, salary){
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = "Full Time";
    this.printEmployeeForm = function(){
        console.log("Name: " + this.name + ", \nJob Title: " + this.jobTitle + ", \nSalary: " + this.salary + ", \nStatus: " + this.status)
    };
}
let john = new employee("John", "Home Maker", "$34,000/year")
let jill = new employee("Jill", "Home Wrecker", "$55,000/year")

john.status = "Part Time";
john.printEmployeeForm()