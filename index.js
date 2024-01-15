const buttons = document.querySelectorAll("button");

const resultEle = document.getElementById("result");

const playerScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-score");

let playerScore = 0;
let computerScore = 0;

buttons.forEach((button)=>{
button.addEventListener("click",() =>{
    // console.log("You clicked me!", button.id)
    const result =playRound(button.id, computerPlay());
    console.log(result);
    // resultEle.innerText="";
    // resultEle.innerText =result;
    resultEle.textContent =result;
})
})


function computerPlay(){
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    // console.log(randomChoice);
    return choices[randomChoice]
   
}

function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return "It's a tie!"
    }else if(
     
        (playerSelection === "rock" && computerSelection ==="scissors") || 
       (playerSelection === "scissors" && computerSelection ==="paper") ||
       (playerSelection === "paper" && computerSelection ==="rock") 
    ){
        playerScore++;
        playerScoreEl.textContent = playerScore;
        return "You win!! " + playerSelection + " "+"beats" + " "+ computerSelection+ "!";
    } else {
        computerScore++;
        computerScoreEl.textContent = computerScore;
        return "You loose!! "  +computerSelection + " "+ "beats" +" "+  playerSelection + "!";
    }
       
}

