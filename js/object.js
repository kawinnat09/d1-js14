var student = {
    //proprety
    firstName: "Kawinnat",
    lastName: "Mayura",
    birthYear: 2002,

    //method
    getAge: function(currentYear){
        return currentYear - this.birthYear;
    }
}

document.write(`${student.firstName} ${student.lastName}`);

document.write(`is ${student.getAge(2021)}`);