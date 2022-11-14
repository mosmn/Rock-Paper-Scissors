/*
Problem: create a rock, paper, scissors game that plays against the computer.
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

        

Algorithm:
BEGIN
    1) get player selection by add event listener to the images
    2) create the function that gets random computer selections
    3) create the play round function that takes 2 parmeters and outputs the winner in the console
    4) make the selections of each party appear in the DOM gane box
END
*/ 

let buttons = document.querySelectorAll(".button");

let playerSelection = buttons.forEach((button) => {
    button.addEventListener('click', e => {
        const playerSelection = button.id.toLowerCase();
        markPlayerSelection(playerSelection);

        let computerSelection = getComputerChoice();
        console.log(computerSelection);

        let result = playRound(computerSelection, playerSelection);
        console.log(result);
    });
});

const markPlayerSelection = (playerSelection) => {
    console.log(playerSelection);
}


const getComputerChoice = () => {
    let computerSelection = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random() * computerSelection.length);
    computerSelection = computerSelection[randomIndex];
    return computerSelection;
}

const playRound = (computerSelection, playerSelection) => {
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

const gamebox = document.querySelector(".game__box");


