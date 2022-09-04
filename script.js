//variable declaration
const choices = ['Rock','Paper','Scissors'];
let result ;
let computerChoice;
let playerScore = 0;
let computerScore = 0;
//Function to return random choice by computer
function computerPlay() {
    const randomChoice = choices[Math.floor(Math.random()*choices.length)].toLowerCase();
    return randomChoice;
}
//Function to return winner based on player selection & computer selection
function playRound(playerSelection, computerSelection){
    if(playerSelection === "rock" && computerSelection === 'paper') {
        result = `You loose! ${computerSelection} beats ${playerSelection}!`; 
        computerScore += 1;   
    } else if (playerSelection === 'rock' && computerSelection === 'rock') {
        result = `Its a tie! both chosen ${playerSelection}!`;
        computerScore = computerScore;
        playerScore = playerScore;      
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        result = `You win!${playerSelection} beats ${computerSelection} !`;
        playerScore += 1;
        //User Chooses Paper
    } else if(playerSelection === "paper" && computerSelection === 'rock') {
        result = `You win! ${playerSelection} beats ${computerSelection}!`;
        playerScore +=1;  
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        result = `Its a tie! both chosen ${playerSelection}!`;
        playerScore = playerScore;
        computerScore = computerScore;      
    } 
    else if(playerSelection === 'paper' && computerSelection === 'scissors') { 
        result = `You lose! ${computerSelection} beats ${playerSelection}!`;
        computerScore += 1; 
    } else if(playerSelection === "scissors" && computerSelection === 'rock') {
        result = `You lose! ${computerSelection} beats ${playerSelection}!`;
        computerScore += 1;
    } 
    else if(playerSelection === 'scissors' && computerSelection === 'paper') {
        result = `You win! ${playerSelection} beats ${computerSelection}!`;
        playerScore +=1;  
    }
    else if(playerSelection === 'scissors' && computerSelection === 'scissors') {
        result = `Its a tie! both chosen ${playerSelection}!`;
        playerScore = playerScore;
        computerScore = computerScore;  
    }  
    return result;
}
//Function to play game and decide winner
function game(){
    for(let i = 0; i < 5; i++){
        let playerSelection = prompt("Please choose Rock or Paper or Scissors").toLowerCase();
        if(playerSelection ==="paper" || playerSelection ==="rock" || playerSelection ==="scissors"){
            let computerSelection= computerPlay();
            console.log(playRound(playerSelection, computerSelection));
        }
        else{
            alert("Wrong input,choose correct");
            i--;
        }
    }   
    if(playerScore > computerScore){
        console.log(`computer score:${computerScore} \n player score:${playerScore}\n You won`);
    }
    else if(playerScore < computerScore){
        console.log(`computer score:${computerScore} \n player score:${playerScore}\n Computer won the game`);
    }
    else if(playerScore === computerScore){
        console.log(`computer score:${computerScore} \n player score:${playerScore} \n It's a Tie!`);
    }
}
//Start game
game();
