console.log ("Hello");
let resultCount;
//pElement.textContent = "Results";
//console.log(pElement);
const para = document.querySelector('.para');

game ();

//this is the main function and it has a loop inside to run the function 5 times. 
//There is a counter which gets updated with each result, resultCount, this is for checking and displaying end result.  
function game() {
    let result;
    let playerSelection; 
    let computerSelection;
    resultCount = 0;
    //console.log (resultCount);

    for (i = 0; i< 5; i++) {
        playerSelection = getPlayerData(); 
        computerSelection = getComputerData();
        //console.log(playerSelection);
        //console.log(computerSelection);
        result = playRound(playerSelection,computerSelection); 
        console.log (result);
        para.innerHTML = para.innerHTML + "<p>" + (i + 1) + ". " + result + "</p>";

        //console.log (resultCount);
    };

    if (resultCount === 0) {
        console.log("End Results was a Tie");
    } else if ( resultCount > 0 ) {
        console.log("You won " + resultCount + " more games than computer");
    } else { 
        console.log("You lost: Computer won " + resultCount*(-1) + " more games than you");
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
                        resultCount++;
                        //console.log("You won, " + playerSelection + " beats " + computerSelection);
                        return "You won, " + playerSelection + " beats " + computerSelection;
                        
                    } else {
                        resultCount--;
                        //console.log("You lost, " + computerSelection + " beats " + playerSelection);
                        return "You lost, " + computerSelection + " beats " + playerSelection;
                        
                    }
                    break;
                case "paper":
                    if(computerSelection == "rock") {
                        resultCount++;
                        return "You won, " + playerSelection + " beats " + computerSelection;
                        
                    } else {
                        resultCount--;
                        return "You lost, " + computerSelection + " beats " + playerSelection;
                        
                    }
                    break;
                case "scissors":
                    if(computerSelection == "paper") {
                        resultCount++;
                        return "You won, " + playerSelection + " beats " + computerSelection;
                        
                    } else {
                        resultCount--;  
                        return "You lost, " + computerSelection + " beats " + playerSelection;
                        
                    }
                    break;
                }
            }
 
}