function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return 60 * hours;
}
var minutes = convertHoursToMinutes(2);
console.log(minutes);

function getGreeting(name) {
  return 'Hello ' + name + '!';
}
var greeting = getGreeting('World');
console.log(greeting);

function addAndMultiplyBy5(num1, num2) {
  return addTwoNumbers(num1, num2) * 5;
}
var product = addAndMultiplyBy5(10, 5);
console.log(product);

function multplyAndDivideBy5(num1, num2) {
  return num1 * num2 / 5;
}
var quotient = multplyAndDivideBy5(35, 10);
console.log(quotient);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}
var difference = subtractTwoNumbers(22, 7);
console.log(difference);

function getCircleCircumferenceradius(radius) {
  return radius * 2 * Math.PI;
}
var circumference = getCircleCircumferenceradius(5);
console.log(circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
var name = getFullName('Juan', 'Ramirez');
console.log(name);

function cube(number) {
  return number * number * number;
}
var product2 = cube(5);
console.log(product2);
