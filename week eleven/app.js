function askName() { //20
    var name = prompt ("Enter a name");
    return name
}

function disco() {
}

function human() { //20
    var human = 0
    do{
      
       var num = randomNumber()

       human = human + num;

       console.log(`Computer new  number is $("randoNum"). Computer new total is ${human}`)
    }while ((human<16) && (decision = "y"))
   
    return human 
}

function randomNumber() { //20
    var num = Math.floor(Math.randon() * 10) + 1
    return num
}

function rachiccca() {
    var num = 0

    do{

       var num = randomNumber()

       human = human + num;
        //5     2    *    3
       console.log(`Computer new  number is $("randoNum"). Computer new total is ${human}`)
    var decision = prompt ("do you want a new number?")
    }while ((human<16) && (decision = "y"))

    return num
}


function comparingNumbers(computer, human) { //parameters
    if (computer < 20) {
        alert(`Human generate this number ${human > 20}.`)
    } else (human < 20 ){
        alert(`The computer generate this number ${computer}.`)
    }
    
} 20 //10

function comparingNumbers(computer, human) {
    if (computer > human) {
        console.log("computer wins") 
    } else if (human > computer) {
        console.log("human wins")
    }
}

comparingNumbers(human(), rachiccca())