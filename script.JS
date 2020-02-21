function computerPlay() {
    let choice = Math.random();
    if(choice <0.33){
      return("Paper")
    } else if (choice <0.66){
      return("Rock")
    } else {
      return("Scissors")
    }
  }
  
  
  function playRound(playerSelection, computerSelection){
    const pS = playerSelection.toLowerCase();
    const cS = computerSelection;
    switch(pS){
      case "paper":
        switch(cS){
        case "Rock":
        return {str: "You win", point: 1}
        break;
        case "Scissors":
        return {str: "You lose", point: -1}
        break;
        case "Paper":
        return {str: "Its a tie!", point: 0}
        break;
        }
      break;
      case "rock":
        switch(cS){
        case "Rock":
        return {str: "Its a tie!", point: 0}
        break;
        case "Scissors":
        return {str: "You win", point: 1}
        break;
        case "Paper":
        return {str: "You lose", point: -1}
        break;
        }
      break;
      case "scissors":
        switch(cS){
        case "Rock":
        return {str: "You lose", point: -1}
        break;
        case "Scissors":
        return {str: "Its a tie!", point: 0}
        break;
        case "Paper":
        return {str: "You win", point: 1}
        break;
        }
        break;
    } 
  }
  
  function game(){
    let points = 0;
    for (let i = 0; i < 5; i++) {
        let counter = 0;
        let pS = window.prompt("Choose: Rock, Paper or Scissors!","Paper");
        let cS = computerPlay();
        let round = playRound(pS, cS);
        points = points + parseInt(round["point"]);
        console.log(round.str)
    }
    if(points > 0){
        console.log("You have won by " + points + " rounds!" )
    } else if (points == 0){
        console.log("You have tied with a computer!")
    } else {
        console.log("You actually lost to a computer by " + Math.abs(points) 
        + " rounds! \nAlan Turing is proud of his childs.");
    }
  }
  game();
  
  