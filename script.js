//variable declaration
const choices = ['Rock','Paper','Scissors'];
let result ;
let computerChoice;
let playerScore = 0;
let computerScore = 0;
//computerPlay function
function computerPlay() {
    const randomChoice = choices[Math.floor(Math.random()*choices.length)].toLowerCase();
    return randomChoice;
}
//playRound function
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
//User Chooses Scissors
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
    console.log(result);
}
//game function
function game(){
    for(let i = 0; i < 5; i++){
        let userChoice = prompt("Do you choose rock or paper or scissors?").toLowerCase(); 
        if(userChoice ==="paper" || userChoice ==="rock" || userChoice ==="scissors"){
        computerChoice = computerPlay();
        playRound(userChoice, computerChoice);
        }
        else{
            alert("Wrong input,choose correct");
            let userChoice = prompt("Do you choose rock or paper or scissors?").toLowerCase(); 
            computerChoice = computerPlay();
            playRound(userChoice, computerChoice);
        }
    }   
        if(playerScore > computerScore){
        console.log(`computer score:${computerScore} \n player score:${playerScore}.\n You won`);
        }
        else if(playerScore < computerScore){
        console.log(`computer score:${computerScore} \n player score:${playerScore}.\n computer won the game.`);
        }
        else if(playerScore === computerScore){
        console.log(`computer score:${computerScore} \n player score:${playerScore} \n. It's a Tie!`);
        }
}
game();
