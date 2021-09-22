var person = {
  firstName: 'Peter',
  lastName: 'Victor',
  hobby: 'Video Games'
};
console.log(person);
var fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is:", fullName);
person.job = 'Freelance';
console.log("The person's current job:", person.job);
person.previousJob = 'Digital Imaging Technician';
console.log("The person's previous job is:", person.previousJob);
console.log('The complete person object', person);
