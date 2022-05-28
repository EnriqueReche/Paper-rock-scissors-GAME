
function playerSelect() {

    let playerInput = prompt(
        'Hello, this is a Paper, Scissor & Rock game.Make your choice: Paper, Rock or Scissor')
        return playerInput;
}; 

/* This function return randomly element */
function computerPlay() {
    let game = ['paper', 'scissor', 'rock'];
    let aleatorio = game[Math.floor(Math.random() * game.length)];
    return aleatorio;
};

/* This function compare two values */
function playRound(playerSelection, computerSelection) {
    
    let roundTime = '';
    if(playerSelection === computerSelection) {
        roundTime = 'This equal'
    } else  if(playerSelection == 'rock' && computerSelection == "scissor") {
        roundTime = 'You win, rock beat scissor'
    } else if(playerSelection == 'paper' &&computerSelection == "scissor"){
        roundTime = 'You lose, scissor beat paper'
    } else if (playerSelection == 'paper' && computerSelection == "rock") {
        roundTime = 'You win, paper beat rock' 
    } else if (playerSelection == 'scissor' && computerSelection == "rock") {
        roundTime = 'You lose, rock beat scissor'
    } else if(playerSelection == 'scissor' && computerSelection == "paper") {
        roundTime = 'You win, scissor beat paper'
    } else if (playerSelection == 'rock' && computerSelection == "paper") { 
        roundTime = 'You lose! paper beat rock'
    }
    return roundTime;
    
};

function game() {
    
    let computerScore = 0;
    let playerScore = 0;
    let roundResult = '';
    for(i = 0; i < 5; i++){
        round =playRound(playerSelect(),computerPlay());

        if(round.includes('You win')) {
            playerScore+=1
        } else if (round.includes('You lose')) {
            computerScore+=1
        }
    }
    
    if(computerScore > playerScore) {
        console.log('Game over, try again')
    } else if (playerScore > computerScore) {
        console.log('Congratulation!! you win.')
    }
};

console.log(game());


