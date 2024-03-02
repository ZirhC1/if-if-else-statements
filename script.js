// // 4 BOOLEANS:
// let x = 1,
//   y = 0,
//   z = "pop",
//   w = "POP";


// console.log(x > y); //true
// console.log(x < y); //false
// console.log(z == w); //false
// console.log(z.toUpperCase() == w); //".toUpperCase makes the variable uppercase which means z does == w" //true


// //EXAMPLE: A student says that x = 10 is a boolean expresssion that results in true. (+ is the assignment operator to assign data to a variable
// == is the equality comparison operator)


// Example. Surfs Up.
// var surfHeight = +prompt("Enter wave height");


// if (surfHeight >= 6) {
//   alert("Great day for surfing!");
// } else if (surfHeight >= 3) {
//   alert("Go body boarding!");
// } else if (surfHeight >= 0) {
//   alert("Go for a swim");
// } else {
//   ("Woah! What kind of surf is that?!");
// }
// // }


// // Example. Comics.
// var comicChar = prompt("Enter a comic book character");
// if (comicChar.toLowerCase() == "batman") {
//   alert(`${comicChar} is from DC Comics`);
// }


// var comicChar = prompt("Enter a comic book character");
// if (comicChar.toLowerCase() == "wonder woman") {
//   alert(`${comicChar} is from DC Comics`);
// }


// var comicChar = prompt("Enter a comic book character");
// if (comicChar.toLowerCase() == "spider man") {
//   alert(`${comicChar} is from MARVEL Comics`);
// }


// var comicChar = prompt("Enter a comic book character");
// if (comicChar.toLowerCase() == "captain america") {
//   alert(`${comicChar} is from MARVEL Comics`);
// }


// Example Secret Number
// const SECRET_NUMBER = Math.floor(Math.random() * 11);
// let guess = +prompt("Guess a number between 1 and 10");


// if (guess == SECRET_NUMBER) {
//   alert("You guessed it!");
// } else {
//   alert("INCORRECT");


//   //after getting it wrong
//   //tell them more info
//   if (guess > SECRET_NUMBER) {
//     alert("Your guess was too high");
//   } else {
//     alert("your guess was too low");
//   }


//   alert(`The secret # was ${SECRET_NUMBER}`);
// }


// Example. Surfs Up Part 2.


// // Example. Circle Area.
// let rad = +prompt("Enter circle radius");
// let area = Math.PI * rad ** 2;
// alert("The area of circle with radius" + rad + "is" + area.toFixed(2));


// if (rad > 0) {
//   alert("Positive radius");
// }
// else {
//   alert("You cannot enter a negative #");
// }


// Example Secret Number Part 2.


// // Example. Even or Odd.
// let num = +prompt("Write a number bigger than 100");
// if (num >= 100) {
//   let remainder = num % 2;
//   if (remainder == 1) {
//     alert("Your # is odd");
//   } else {
//     alert("This number is an Even number");
//   }
// }
// // Example. Surfs Up Part 3


//EXERCISE 1
let totalCost;
let perCopy;
var numCopies = +prompt("Enter a positive number of copies to be printed");


if (numCopies <= 0) {
  alert("can't order that amount");
} else if (numCopies <= 99) {
  perCopy = 0.3;
} else if (numCopies <= 499) {
  perCopy = 0.28;
} else if (numCopies <= 749) {
  perCopy = 0.27;
} else if (numCopies <= 1000) {
  perCopy = 0.26;
} else {
  perCopy = 0.25;
}


//output
totalCost = perCopy * numCopies;
console.log(perCopy);
console.log(numCopies);


alert(
  `Number of Copies to be printed: ${numCopies}
  Price per Copy: $${perCopy.toFixed(2)}
  Total cost: $${totalCost.toFixed(2)}`
);


// EXERCISE 3;
var perDozen = +prompt(
    "A wholesale egg company bases their prices on the number of eggs purchased. Ener an amount of eggs"
  );
  
  
  if (perDozen <= 0) {
    alert("can't calculate that amount")
  } else if (perDozen <= 4) {
    perPrice = 0.5;
  } else if (perDozen <= 6) {
    perPrice = 0.45;
  } else if (perDozen <= 11) {
    perPrice = 0.4;
  } else {
    perPrice = 0.35;
  }
   console.log(alert);
  
  alert(
    `Number of eggs purchased: ${perDozen}
     The bill is equal to: $${perPrice.toFixed(2)}`
  );

// EXERCISE 5

var gradeInput = +prompt("Enter percentage earned on a test")


if(gradeInput <= 0){gradeLetter = "Not able to grade"}


else if(gradeInput <= 60){gradeLetter = "F"}
else if(gradeInput <= 69){gradeLetter = "D"}

else if(gradeInput <= 79){gradeLetter = "C"}
else if(gradeInput <= 89){gradeLetter = "B"}
else if(gradeInput <= 100){gradeLetter = "A"}


console.log(gradeLetter)
alert(`Enter the Percentage: ${gradeInput}%
The corresponding letter grade is: ${gradeLetter}`)

// EXERCISE 2
var PackageCheck = +prompt("Enter the weight of the package in kilograms")
var PackageCheck1 = +prompt("Enter the length of the package in centimeters")
var PackageCheck2 = +prompt("Enter the width of the package in centimeters")
var PackageCheck3 = +prompt("Enter the height of the package in centimeters")
let size = (PackageCheck1*PackageCheck2*PackageCheck3)


if(PackageCheck <= 0){statement = "Can't accept this number"
alert(
    "number isn't allowed"
) 
}
else if(PackageCheck <= 27){statement = "Weight is acceptable because weight is below the limit."}
else if(PackageCheck >= 28){statement = "Too Heavy"}

if(size <= 0){statement1 = "Can't accept this number"}
else if(size <= 100000){statement1 = "Size is acceptable because below the size limit."}
else{statement1 = "Too Large"}


//Volume of a rectangular prism is lwh
alert(`Enter Package weight in Kilograms: ${PackageCheck}
Enter package length in centimeters: ${PackageCheck1}
Enter package width in centimeters: ${PackageCheck2}
enter packge height in centimeters: ${PackageCheck3}
${statement} and ${statement1}
`)

console.log(statement1)