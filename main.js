/*
PROJECT: create a rock, paper, scissors game that plays against the computer.

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
    10) create a function that resets the game
    11) if there is any click on the buttons after the game is over, the game resets
END
*/ 

// 1) get player selection by add event listener to the images
const buttons = document.querySelectorAll(".button");

buttons.forEach((button) => {
    button.addEventListener('click', e => {
        const playerSelection = button.id.toLowerCase();
        let computerSelection = getComputerChoice();
        let result = playRound(computerSelection, playerSelection);
        removeWeapons();
        weapons(playerSelection, computerSelection);
        displayResult (result);
        updateScore(result);
        game(playerScore, computerScore);
        displayWinner(game(playerScore, computerScore));
    });
});

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
const playerScoreDisplay = document.querySelector('.player__score');
const computerScoreDisplay = document.querySelector('.computer__score');
const updateScore = (result) => {
    if (result === "You win! Rock beats Scissors" || result === "You win! Paper beats Rock" || result === "You win! Scissors beats Paper") {
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
    } else if (result === "You lose! Paper beats Rock" || result === "You lose! Scissors beats Paper" || result === "You lose! Rock beats Scissors") {
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
    }

    return playerScore, computerScore;
}

// 8) create a function that plays 5 rounds
const game = (playerScore, computerScore) => {
    if (playerScore === 5) {
        return `You win the game! ${playerScore} - ${computerScore}`;
        } else if (computerScore === 5) {
        return `You lose the game! ${playerScore} - ${computerScore}`;
    }
}

// 9) create a function that displays the winner in the DOM
const winnerDisplay = document.querySelector('.game__result--title');
const displayWinner = (game) => {
    winnerDisplay.textContent = game;
}

// 10) create a function that resets the game when the reset button is clicked
const resetButton = document.querySelector('.game__reset--btn');
resetButton.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    removeWeapons();
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    winnerDisplay.textContent = '';
});

// 11) if there is any click on the buttons after the game is over, the game resets
buttons.forEach((button) => {
    button.addEventListener('click', e => {
        if (playerScore === 6 || computerScore === 6) {
            playerScore = 0;
            computerScore = 0;
            removeWeapons();
            playerScoreDisplay.textContent = playerScore;
            computerScoreDisplay.textContent = computerScore;
            winnerDisplay.textContent = '';
        }
    });
});




