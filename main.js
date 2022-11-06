/*
Problem: create a rock, paper, scissors game that plays against the computer in the console.
- create a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play.
- Write a function called playRound that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"
  Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
- Write a NEW function called game(). Call the playRound function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
- Use prompt() to get input from the user. Read the docs here if you need to.

IOFC:
     Input : 
     1) playerSelection

     Output: 
        1) computerSelection
        2) playRound
        3) game


     Formula: N/A

     Condition: 
        1) playerSelection is case-insensitive
        2) if playerSelection === computerSelection, it's a tie
        3) if playerSelection === 'rock' && computerSelection === 'scissors', player wins
        4) if playerSelection === 'rock' && computerSelection === 'paper', computer wins
        5) if playerSelection === 'paper' && computerSelection === 'rock', player wins
        6) if playerSelection === 'paper' && computerSelection === 'scissors', computer wins
        7) if playerSelection === 'scissors' && computerSelection === 'paper', player wins
        8) if playerSelection === 'scissors' && computerSelection === 'rock', computer wins
        9) game() plays 5 rounds
        10) game() keeps score and reports a winner or loser at the end

IO Format : 

line 1:


Variables / constants: 
    1) playerSelection
    2) computerSelection
    3) playerScore
    4) computerScore
    5) round
    6) winner

        

Algorithm:
BEGIN
    FUNCTION getComputerChoice()
        SET computerSelection = ['rock', 'paper', 'scissors']
        SET randomIndex = Math.floor(Math.random() * computerSelection.length)
        SET computerSelection = computerSelection[randomIndex]
        RETURN computerSelection
    END FUNCTION

    SET computerSelection = getComputerChoice()

    FUNCTION playRound()
        IF playerSelection === computerSelection
            RETURN "It's a tie!"
        ELSE IF playerSelection === 'rock' && computerSelection === 'scissors'
            RETURN "You win! Rock beats Scissors"
        ELSE IF playerSelection === 'rock' && computerSelection === 'paper'
            RETURN "You lose! Paper beats Rock"
        ELSE IF playerSelection === 'paper' && computerSelection === 'rock'
            RETURN "You win! Paper beats Rock"
        ELSE IF playerSelection === 'paper' && computerSelection === 'scissors'
            RETURN "You lose! Scissors beats Paper"
        ELSE IF playerSelection === 'scissors' && computerSelection === 'paper'
            RETURN "You win! Scissors beats Paper"
        ELSE IF playerSelection === 'scissors' && computerSelection === 'rock'
            RETURN "You lose! Rock beats Scissors"
        END IF
    END FUNCTION

    FUNCTION game()
        SET playerScore = 0
        SET computerScore = 0
        FOR round = 1; round <= 5; round++
            SET playerSelection = prompt("Rock, Paper, or Scissors?")
            SET computerSelection = getComputerChoice()
            IF playRound() === "You win! Rock beats Scissors" || playRound() === "You win! Paper beats Rock" || playRound() === "You win! Scissors beats Paper"
                playerScore++
            ELSE IF playRound() === "You lose! Paper beats Rock" || playRound() === "You lose! Scissors beats Paper" || playRound() === "You lose! Rock beats Scissors"
                computerScore++
            END IF
        END FOR
        IF playerScore > computerScore
            SET winner = "You win!"
        ELSE IF playerScore < computerScore
            SET winner = "You lose!"
        ELSE IF playerScore === computerScore
            SET winner = "It's a tie!"
        END IF
            CONSOLE.LOG(playerScore)
            CONSOLE.LOG(computerScore)
        RETURN winner
    END FUNCTION

    CONSOLE.LOG(game())

END
*/ 
let getComputerChoice = () => {
    let computerSelection = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random() * computerSelection.length);
    computerSelection = computerSelection[randomIndex];
    return computerSelection;
}

let playRound = () => {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return "You win! Rock beats Scissors";
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return "You lose! Paper beats Rock";
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return "You win! Paper beats Rock";
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return "You lose! Scissors beats Paper";
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return "You win! Scissors beats Paper";
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return "You lose! Rock beats Scissors";
    }
}

let game = () => {
    let playerScore = 0;
    let computerScore = 0;
    for (let round = 1; round <= 5; round++) {
        playerSelection = prompt("Rock, Paper, or Scissors?");
        computerSelection = getComputerChoice();
        if (playRound() === "You win! Rock beats Scissors" || playRound() === "You win! Paper beats Rock" || playRound() === "You win! Scissors beats Paper") {
            playerScore++;
        } else if (playRound() === "You lose! Paper beats Rock" || playRound() === "You lose! Scissors beats Paper" || playRound() === "You lose! Rock beats Scissors") {
            computerScore++;
        }
    }
    if (playerScore > computerScore) {
        winner = "You win!";
    } else if (playerScore < computerScore) {
        winner = "You lose!";
    } else if (playerScore === computerScore) {
        winner = "It's a tie!";
    }
    console.log(playerScore);
    console.log(computerScore);
    return winner;
}

console.log(game());

