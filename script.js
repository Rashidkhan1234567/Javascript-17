//   task 01

function date() {
  document.getElementById("date_and_time").innerHTML = new Date();
}

//    task 02

function greetUser() {
  let firstName = prompt("Enter your first name");
  let lastName = prompt("Enter your last name");
  let fullName = firstName + " " + lastName;
  document.getElementById("fnln").innerHTML =
    "Hello " + fullName + " " + "nice to met you";
}

//    task 03

function sumNumber() {
  const num1 = parseInt(prompt("Enter the first number "));
  const num2 = parseInt(prompt("Enter the second number "));
  const sum = num1 + num2;
  document.getElementById(
    "sum"
  ).innerHTML = `The sum of ${num1} and ${num2} is ${sum}`;
}

//    task 04

function calculate(num1, num2, operator) {
  num1 = +prompt("Enter first number to calculate");
  num2 = +prompt("Enter second number to calculate");
  operator = prompt("Enter any operator");
  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      result = "Invalid operator";
  }
  document.getElementById("result").innerHTML = result;
  console.log(num1, num2, operator);
}

//   task 05

function square(num) {
  num = +prompt("Enter a number to calculate square");
  document.getElementById("square").innerHTML = num * num;
}

//   task 06

function facttorialNumber(num) {
  num = +prompt("Enter a number to calculate factorial");
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact = fact * i;
    // console.log(fact,i);
  }
  document.getElementById("factorial").innerHTML = fact;
}

//    task 07

function timer(start = 1) {
  let current = start;
  setInterval(() => {
    document.getElementById("display").innerHTML = `Counting: ${current}`;
    current++;
  }, 1000);
}

//    task 08

function calculateHypotenuse(base, perpendicular) {
  base = parseInt(prompt("Enter a triangle base"));
  perpendicular = parseInt(prompt("Enter a triangle perpendicular"));
  function calculateSquare(num) {
    return num ** 2;
  }

  const baseSquare = calculateSquare(base);
  const perpendicularSquare = calculateSquare(perpendicular);
  const hypotenuse = Math.sqrt(baseSquare + perpendicularSquare);
  document.getElementById("display1").innerHTML = Math.floor(hypotenuse);
}

//   task 09

function rectangle(width, height) {
  width = parseInt(prompt("Enter a rectangle width"));
  height = parseInt(prompt("Enter a rectangle height"));
  document.getElementById("rectangle_Display").innerHTML =
    "The area of a rectangle is" + " " + width * height;
}

//  task 10

function palindrome(str) {
  str = prompt("Enter palindrome word");
  let len = str.length;
  let rev = "";
  let display1 = document.getElementById("palindrome_Display")
  for (let i = len-1; i >= 0; i--) {
    rev += str[i];
  }
  
  if (str === rev) {
    display1.innerHTML = `${str} is a Palindrome word`
  } else {
    display1.innerHTML = `${str} is not a Palindrome word` 
    
  }
  
}

//  task 11

function caseChanger(str) {
  str = prompt("Enter any word greater than 2")
  let array1 = str.split(' ');
  let newarray1 = [];
  for (let x = 0; x < array1.length; x++) {
    newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
  }
  // return newarray1.join(' ');
  document.getElementById("string").innerHTML = str
  document.getElementById("output").innerHTML = newarray1.join(" ")
}

//  task 12

function word(str1){
  str1 = prompt("Enter any word. \n I wil tell you what is the longest word in your prompt. ");
  let word = str1.split(' ');
  let longestWord = word[0];
  for(let i = 1; i < word.length; i++){
    if(word[i] > longestWord.length){
      longestWord = word[i]
    }
  }
  document.getElementById("userOutput").innerHTML = str1
  document.getElementById("longestWord").innerHTML = "Longest word is" + " " + longestWord;
} 


//     task 13

function countOccurrences(str, letter) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
      if (str[i] === letter) {
          count++;
      }
  }
  return count;
}
document.getElementById("orignal").innerHTML = `Orignal word is : JSResourceS.com`
document.getElementById("find_Letter").innerHTML = `Find letter is : o`
document.getElementById("output1").innerHTML = (countOccurrences('JSResourceS.com', 'o')); 

//     task 14
function calcCircumference(radius) {
  let circumference = 2 * Math.PI * radius;
  document.getElementById("calcCircumference").innerText = "The circumference is " + circumference;
}

function calcArea(radius) {
  let area = Math.PI * Math.pow(radius, 2);
  document.getElementById("calcArea").innerHTML = ("The area is " + area);
}

calcCircumference(5);
calcArea(5);