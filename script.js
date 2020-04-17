var playerChoice = {
    value: 0,
    url: 0
}

var computerChoice = {
    value: 0,
    url: 0
}

var throwValue;
var actualUrl;

var experienceEarned = 0;
var experienceToLevel;

function randomThrow() {

    throwValue = Math.floor(Math.random() * 3) + 1;

    return throwValue;

}

function findPicture(rawUrl) {

    if (rawUrl === 1) {
        actualUrl = 'rock-computer-2.png';
    } else if (rawUrl === 2) {
        actualUrl = 'paper-computer-2.png';
    } else {
        actualUrl = 'scissors-computer-2.png';
    }

    return actualUrl;
}

function calculateWinner(player, computer) {

    if (player == 1 && computer == 1) {
        document.getElementById('gameInfo').innerHTML = 'DRAW!';
        document.getElementById('player-self').src = 'player-tie.png';
        document.getElementById('computer-self').src = 'computer-tie.png';
    } else if (player == 1 && computer == 2) {
        document.getElementById('gameInfo').innerHTML = 'DEFEAT!';
        document.getElementById('player-self').src = 'player-lost.png';
        document.getElementById('computer-self').src = 'computer-win.png';
    } else if (player == 1 && computer == 3) {
        document.getElementById('gameInfo').innerHTML = 'VICTORY!';
        document.getElementById('player-self').src = 'player-win.png';
        document.getElementById('computer-self').src = 'computer-lost.png';
    } else if (player == 2 && computer == 1) {
        document.getElementById('gameInfo').innerHTML = 'VICTORY!';
        document.getElementById('player-self').src = 'player-win.png';
        document.getElementById('computer-self').src = 'computer-lost.png';
    } else if (player == 2 && computer == 2) {
        document.getElementById('gameInfo').innerHTML = 'DRAW!';
        document.getElementById('player-self').src = 'player-tie.png';
        document.getElementById('computer-self').src = 'computer-tie.png';
    } else if (player == 2 && computer == 3) {
        document.getElementById('gameInfo').innerHTML = 'DEFEAT!';
        document.getElementById('player-self').src = 'player-lost.png';
        document.getElementById('computer-self').src = 'computer-win.png';
    } else if (player == 3 && computer == 1) {
        document.getElementById('gameInfo').innerHTML = 'DEFEAT!';
        document.getElementById('player-self').src = 'player-lost.png';
        document.getElementById('computer-self').src = 'computer-win.png';
    } else if (player == 3 && computer == 2) {
        document.getElementById('gameInfo').innerHTML = 'VICTORY!';
        document.getElementById('player-self').src = 'player-win.png';
        document.getElementById('computer-self').src = 'computer-lost.png';
    } else if (player == 3 && computer == 3) {
        document.getElementById('gameInfo').innerHTML = 'DRAW!';
        document.getElementById('player-self').src = 'player-tie.png';
        document.getElementById('computer-self').src = 'computer-tie.png';
    }

}

function playGame(choice) {

    computerChoice.value = randomThrow();
    computerChoice.url = findPicture(computerChoice.value);
    document.getElementById('computer-card').src = computerChoice.url;
    
    if (choice == 1) {
        document.getElementById('player-card').src = 'rock-player-2.png';
        calculateWinner(1, computerChoice.value);
    } else if (choice == 2) {
        document.getElementById('player-card').src = 'paper-player-2.png';
        calculateWinner(2, computerChoice.value);
    } else {
        document.getElementById('player-card').src = 'scissors-player-2.png';
        calculateWinner(3, computerChoice.value);
    }

}