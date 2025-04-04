const options = ["Rock", "Paper", "Scissors"]
const rock = options[0]
const paper = options[1]
const scissors = options[2]

var userChoice = null
var opponentChoice = null

var userScore = 0
var opponentScore = 0

function getRandomChoice() {
    return options[Math.round(Math.random() * 2)]
}

function getUserChoice() {
    let decision = null
    decision = Math.round(+prompt("What is your choice? 1 is rock / 2 is paper / 3 is scissors"))

    if (decision <= 3 && decision >= 1) {
        return options[decision]
    } else {
        console.log("Sorry, that is invalid! I will choose for you.")
        return getRandomChoice()
    }
}

function getWinner() {
    let winner = null
    
    if (userChoice == opponentChoice) {
        winner = "Tie"
    } else if (userChoice == "Rock") {
        if (opponentChoice == "Paper") {
            winner == "You lose"
            opponentScore ++
        } else {
            winner = "You win"
            userScore ++
        }
    } else if (userChoice == "Paper") {
        if (opponentChoice == "Scissors") {
            winner = "You lose"
            opponentScore ++
        } else {
            winner = "You win"
            userScore ++
        }
    } else {
        if (opponentChoice == "Rock") {
            winner = "You lose"
            opponentScore ++
        } else {
            winner = "You win"
            userScore ++
        }
    }

    return winner
}

while(true) {
    console.log("Rock! Paper! Scissors! SHOOT!")
    userChoice = getUserChoice()
    opponentChoice = getRandomChoice()
    
    console.log(`You: ${userChoice} | Bot: ${opponentChoice}`)
    console.log(getWinner())
    console.log(`You: ${userScore} | Bot: ${opponentScore}`)
}
