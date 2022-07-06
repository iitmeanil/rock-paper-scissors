console.log ("Hello");
let resultCount;
let computerScore = 0;
let playerScore = 0;
//pElement.textContent = "Results";
//console.log(pElement);
const para = document.querySelector('.para');
const finalResult = document.querySelector('.finalResult')

// new code

    const choices = document.querySelectorAll(".choice");
    choices.forEach ((choice) => {
    choice.addEventListener("click",game);
    })


    
    



// whenever a user clicks on one of the three boxes, the game starts by calling the function game()
// game function takes the event and extracts the class id and allocates it for player choice. 


  
function game(e) {
    let classes = e.target.className.split(" ");
    let result;
    let playerSelection = classes[1];
    let computerSelection = getComputerData();;
    //resultCount = 0;
    console.log(playerSelection);
    console.log(computerSelection);

  

    result = playRound(playerSelection,computerSelection); 
    finalResult.innerHTML += "<br>" + result;
    console.log (result);
    para.textContent = `YourScore: ${playerScore}; Computer: ${computerScore}`
    //para.innerHTML = para.innerHTML + "<p>" + (i + 1) + ". " + result + "</p>";
    
    //game ends when one of the score reaches 5
    if (computerScore === 5 || playerScore === 5) {
        if (computerScore === playerScore) {
            console.log("End Results was a Tie");
            result = "End result: A Tie";
        } else if ( playerScore > computerScore ) {
            console.log("You won " + (playerScore - computerScore) + " more games than computer");
            result = "You won " + (playerScore - computerScore) + " more games than computer";
        } else { 
            console.log("You lost: Computer won " + (playerScore - computerScore)*(-1) + " more games than you");
            result = "You lost: Computer won " + (playerScore - computerScore)*(-1) + " more games than you";
        }
        finalResult.innerHTML += "<br>" + "<br>" + "<strong>" + result + "</strong>";
        choices.forEach ((choice) => {
            choice.removeEventListener('click',game)
            })
    }
}


function getPlayerData () {
    let data = prompt("Enter one of rock, paper, scissors");
    data = data.toLowerCase();
// checking if the data is valid, else re-running the function recurssively 
// changed playerSelection to lowercase so that we can check the data without case issue
    if (data === "rock" || data === "paper" || data === "scissors") {
        return data;
    } else {
        alert("Wrong Entry");
        data = getPlayerData();
        return data;
    }
}

//generated a random number and then assigned the number to one of rock paper scissors
function getComputerData () {
    let ranNum = Math.floor(Math.random()*3);
    switch(ranNum) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        default:
            return "scissors";
    }
}


//checks and returns the results, also updates the global resultCount variable to keep count of overall result.
function playRound (playerSelection,computerSelection) {
    if(playerSelection === computerSelection) { 
        return "Tie Result, both chose " + playerSelection;
    } else {
            switch (playerSelection) {
                case "rock":
                    if(computerSelection == "scissors") {
                        playerScore++;
                        //console.log("You won, " + playerSelection + " beats " + computerSelection);
                        return "You won, " + playerSelection + " beats " + computerSelection;
                        
                    } else {
                        computerScore++;
                        //console.log("You lost, " + computerSelection + " beats " + playerSelection);
                        return "You lost, " + computerSelection + " beats " + playerSelection;
                        
                    }
                    break;
                case "paper":
                    if(computerSelection == "rock") {
                        playerScore++;
                        return "You won, " + playerSelection + " beats " + computerSelection;
                        
                    } else {
                        computerScore++;
                        return "You lost, " + computerSelection + " beats " + playerSelection;
                        
                    }
                    break;
                case "scissors":
                    if(computerSelection == "paper") {
                        playerScore++;
                        return "You won, " + playerSelection + " beats " + computerSelection;
                        
                    } else {
                        computerScore++;  
                        return "You lost, " + computerSelection + " beats " + playerSelection;
                        
                    }
                    break;
                }
            }
 
}