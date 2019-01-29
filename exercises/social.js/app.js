let vSchool = {
    company: "V-school",
    goal: "To kill all remaining hope for traditional colleges.",
    employeePersonalData: [
        {
        name: "Bob",
        age: 45,
        title: "Director of Education",
        employmentStatus: true,
    },{
        name: "He who shall not be named",
        age: "Immortal",
        title: "Unknown",
        employmentStatus: false,
    },{
        name: "Nate",
        age: 27,
        title: "Full-Stack Instructor",
        employmentStatus: true,
    },{
        name: "Sam",
        age: 25,
        title: "Assistant Istructor",
        employmentStatus: true,
    },{
        name: "Mary",
        age: 32,
        title: "Director of Student Outcomes",
        employmentStatus: false,
    },{
        name: "Erik",
        age: 33,
        employmentStatus: true,
    }],
    events: [
        "Meet-Ups",
        "Pizza Parties",
        "Nights Out",
        "Code Offs"
    ],
    event: function(){
        let j = 0;
        for (let i = 0; i < this.events.length; i++){
            if (this.employeePersonalData[j].employmentStatus != true){
                for (let i = 0; i < 100; i++){
                    j++
                    if (this.employeePersonalData[j].employmentStatus === true){
                    break;
                    }
                }
            } 
            if (this.employeePersonalData[j].employmentStatus === true){
            console.log((i + 1) + ".) " + this.employeePersonalData[j].name + " will lead the " + this.events[i])
            }
            j++
        }
    }
}
vSchool.event()
