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



END
*/ 

let getComputerChoice = () => {
    let computerSelection = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random() * computerSelection.length);
    computerSelection = computerSelection[randomIndex];
    return computerSelection;
}
console.log(getComputerChoice());