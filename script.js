//console.log ("Hello");
// we will ask the user to enter one of rock/ paper/ scissors and then check if the entry is valid. we will need to check case, so convert to lowercase and then check. 
// once user entry is valid, we will ask computerplay function to generate a random item
// computerPlay, will generate a random number between 1 and 3 and depending on the number we can assign a number to rok paper of scissors. 
// we call a function playRound with the 2 entries, this function needs to return the winning statement, You Lose! Paper beats Rock,  we will then run a switch and depending on the two selections we can publish the results. 


//let result = playRound(playerSelection,computerSelection); moved to game function 
//console.log (playerSelection);
//console.log (computerSelection);
//console.log (result);
let resultCount;
game ();

function game() {
    let result;
    let playerSelection; 
    let computerSelection;
    resultCount = 0;
    console.log (resultCount);

    for (i = 0; i< 5; i++) {
        playerSelection = getPlayerData(); 
        computerSelection = getComputerData();
        result = playRound(playerSelection,computerSelection); 
        console.log (result);
        console.log (resultCount);
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
// check if the data is valid 
if (data === "rock" || data === "paper" || data === "scissors") {
    return data;
} else {
    alert("Wrong Entry");
    data = getPlayerData();
    return data;
}
}

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


function playRound (playerSelection,computerSelection) {
    
if (playerSelection === computerSelection) {
    return "Tie Result, both chose " + playerSelection;
} else {
    switch (playerSelection) {
        case "rock":
            if(computerSelection == "scissors") {
                resultCount++;
                return "You won, " + playerSelection + " beats " + computerSelection;
                
            } else {
                resultCount--;
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