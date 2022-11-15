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
    4) make the selections of each party appear in the DOM gane box using a function to add element img to the DOM
    5) a function that displays playRound return value in the DOM
    6) creat a function that removes the previous weapons and result
    7) create a function that updates the score
    8) create a function that plays 5 rounds
    9) create a function that displays the winner
END
*/ 

// 1) get player selection by add event listener to the images
let buttons = document.querySelectorAll(".button");

let playerSelection = buttons.forEach((button) => {
    button.addEventListener('click', e => {
        const playerSelection = button.id.toLowerCase();
        markPlayerSelection(playerSelection);

        let computerSelection = getComputerChoice();
        console.log(computerSelection);

        let result = playRound(computerSelection, playerSelection);
        console.log(result);

        removeWeapons();

        weapons(playerSelection, computerSelection);

        displayResult (result);

        updateScore(result);
    });
});

const markPlayerSelection = (playerSelection) => {
    console.log(playerSelection);
}

// 2) create the function that gets random computer selections
const getComputerChoice = () => {
    let computerSelection = ['rock', 'paper', 'scissors'];
    let randomIndex = Math.floor(Math.random() * computerSelection.length);
    computerSelection = computerSelection[randomIndex];
    return computerSelection;
}

// 3) create the play round function that takes 2 parmeters and outputs the winner in the console
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

// 4) make the selections of each party appear in the DOM gane box using a function to add element img to the DOM
const imageSelection = document.querySelector('.image__selection');

const weapons = (playerSelection, computerSelection) => {
    const playerWeapon = document.createElement('img');
    const computerWeapon = document.createElement('img');
    playerWeapon.src = `./imgs/${playerSelection}.png`;
    computerWeapon.src = `./imgs/${computerSelection}.png`;
    imageSelection.appendChild(playerWeapon);
    imageSelection.appendChild(computerWeapon);
}

// 5) a function that displays playRound return value in the DOM
const displayResult = (result) => {
    const resultDisplay = document.createElement('p');
    resultDisplay.textContent = result;
    document.querySelector('.displayresult').appendChild(resultDisplay);
}

// 6) creat a function that removes the previous weapons and result
const removeWeapons = () => {
    const remove = document.querySelector('.image__selection');
    remove.innerHTML = '';
    const removeResult = document.querySelector('.displayresult');
    removeResult.innerHTML = '';
}

// 7) create a function that updates the score and displays it in the DOM
let playerScore = 0;
let computerScore = 0;

const updateScore = (result) => {
    const playerScoreDisplay = document.querySelector('.player__score');
    const computerScoreDisplay = document.querySelector('.computer__score');
    if (result === "You win! Rock beats Scissors" || result === "You win! Paper beats Rock" || result === "You win! Scissors beats Paper") {
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
    } else if (result === "You lose! Paper beats Rock" || result === "You lose! Scissors beats Paper" || result === "You lose! Rock beats Scissors") {
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
    }
}


// 8) create a function that plays 5 rounds



// 9) create a function that displays the winner
