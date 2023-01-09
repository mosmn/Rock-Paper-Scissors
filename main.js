let playerScore = 0;
let computerScore = 0;

const playerScoreDisplay = document.querySelector('.player__score');
const computerScoreDisplay = document.querySelector('.computer__score');
const buttons = document.querySelectorAll(".button");
const imageSelection = document.querySelector('.image__selection');
const resetButton = document.querySelector('.game__reset--btn');
const winnerDisplay = document.querySelector('.game__result--title');
const toggle = document.querySelector(".toggle");
const root = document.documentElement;


buttons.forEach((button) => {
    button.addEventListener('click', e => {
        const playerSelection = button.id.toLowerCase();
        const computerSelection = getComputerChoice();
        let result = playRound(computerSelection, playerSelection);
        removeWeapons();
        weapons(playerSelection, computerSelection);
        displayResult (result);
        updateScore(result);
        game(playerScore, computerScore);
        displayWinner(game(playerScore, computerScore));
    });
});

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

const weapons = (playerSelection, computerSelection) => {
    const playerWeapon = document.createElement('img');
    const computerWeapon = document.createElement('img');
    playerWeapon.setAttribute('class', playerSelection);
    computerWeapon.setAttribute('class', computerSelection);

    if (root.className === 'dark'){
        playerWeapon.src = `./imgs/${"l" + playerSelection}.png`;
        computerWeapon.src = `./imgs/${"l" + computerSelection}.png`;
    } else {
        playerWeapon.src = `./imgs/${playerSelection}.png`;
        computerWeapon.src = `./imgs/${computerSelection}.png`;
    }

    imageSelection.appendChild(playerWeapon);
    imageSelection.appendChild(computerWeapon);
}

const displayResult = (result) => {
    const resultDisplay = document.createElement('p');
    resultDisplay.textContent = result;
    document.querySelector('.displayresult').appendChild(resultDisplay);
}

const removeWeapons = () => {
    const remove = document.querySelector('.image__selection');
    remove.innerHTML = '';
    const removeResult = document.querySelector('.displayresult');
    removeResult.innerHTML = '';
}

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

const game = (playerScore, computerScore) => {
    if (playerScore === 5) {
        return `You win the game! ${playerScore} - ${computerScore}`;
        } else if (computerScore === 5) {
        return `You lose the game! ${playerScore} - ${computerScore}`;
    }
}

const displayWinner = (game) => {
    winnerDisplay.textContent = game;
}

resetButton.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    removeWeapons();
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    winnerDisplay.textContent = '';
});

buttons.forEach((button) => {
    button.addEventListener('click', e => {
        if (playerScore === 5 || computerScore === 5) {
            playerScore = 0;
            computerScore = 0;
            playerScoreDisplay.textContent = playerScore;
            computerScoreDisplay.textContent = computerScore;
        }
    });
});

root.className = 'light';
const lightdark = () => {
    const logo = document.querySelector('img[alt = "logo"]');
    const sm = document.querySelector('img[alt = "sm"]');
    const rock = document.querySelector('img[alt = "rock"]');
    const paper = document.querySelector('img[alt = "paper"]');
    const scissors = document.querySelector('img[alt = "scissors"]');
    const pweapon = imageSelection.firstChild;
    const cweapon = imageSelection.childNodes[1];

    const newTheme = root.className === 'dark' ? 'light' : 'dark';
    root.className = newTheme;

    if (root.className === 'dark'){
        logo.setAttribute('src', 'imgs/wrps.png');
        sm.setAttribute('src', 'imgs/sun.png');
        rock.setAttribute('src', 'imgs/lrock.png');
        paper.setAttribute('src', 'imgs/lpaper.png');
        scissors.setAttribute('src', 'imgs/lscissors.png');
        pweapon.setAttribute('src', `./imgs/${"l" + pweapon.className}.png`)
        cweapon.setAttribute('src', `./imgs/${"l" + cweapon.className}.png`)
    } else {
        logo.setAttribute('src', 'imgs/brps.png');
        sm.setAttribute('src', 'imgs/moon.png');
        rock.setAttribute('src', 'imgs/rock.png');
        paper.setAttribute('src', 'imgs/paper.png');
        scissors.setAttribute('src', 'imgs/scissors.png');
        pweapon.setAttribute('src', `./imgs/${pweapon.className}.png`)
        cweapon.setAttribute('src', `./imgs/${cweapon.className}.png`)
    }
}

toggle.addEventListener('click', lightdark);




