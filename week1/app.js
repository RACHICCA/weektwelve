alert("Welcome to 20! This is a competition to see which player gets closer to the number 20. You are going to go be playing agaist the computer. You will draw numbers from 1 to 10. The computer will stop at 16. Pay attention to the screen to see what your total is, and if you need another number, press 'y'. ")

var human = 0;
var computer = 0;

do {
  var num = Math.floor(Math.random() * 10 ) + 1

  computer = computer + num;
 //   5          2     +      3

 console.log(`Computer new number is ${"randomNUm"}. Computer new total is ${computer}.`) 
} while ((computer < 16 ) && (decision = "y"))

console.log("exit")




do {
  var decision = prompt("Do you want a new number?")

  human = random + num;
  // 12         8    +  4

 console.log(`Computer new number is ${"randonNUm"}. Computer new total is ${"human"}.`)

 var decision = prompt(`Would you like another number? if you would like a new number press "y".`)
} while ((computer < 20) && (decision == "y"))

console.log("exit")o




// if (computer > human) {
//   console.log("computer wins.")
// } else if (human > computer) {
//   console.log("Humans wins")
//  } else if (human == computer) {
//         console.log("Tie!!")
// }
