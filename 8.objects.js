let student = {
                firstName: "Aniket",
                lastName: "Dinde",
                age: 20,
                height: 170,
                info : function(){
                    return this.firstName + " " + this.lastName;
                }
            };
console.log(student.firstName);
console.log(student['lastName']);

student.firstName = 'Aksay';
console.log(student.firstName);

console.log(student.info());
