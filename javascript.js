function playGame() {

    function getComputerChoice() {

        const randomNumber = Math.floor(Math.random() * 3);
        switch (randomNumber) {
            case 0:
                return "rock";
            case 1:
                return "paper";
            case 2:
                return "scissors";
        }
    }

    function getHumanChoice() {
        const humanChoice = prompt("What's your choice?");
        return humanChoice.toLowerCase();
    }

    function playRound() {

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        if (humanSelection === computerSelection) {
            console.log("It's a tie!")
            return "tie"
        } else if (humanSelection === "rock") {
            if (computerSelection === "scissors") {
                console.log("You won! rock beats scissors!");
                return "humanWins"
            } else {
                console.log("You lose! paper beats rock!");
                return "computerWins"
            }
        } else if (humanSelection === "paper") {
            if (computerSelection === "rock") {
                console.log("You won! paper beats rock!");
                return "humanWins"
            } else {
                console.log("You lose! scissors beat paper");
                return "computerWins"
            }
        } else if (humanSelection === "scissors") {
            if (computerSelection === "paper") {
                console.log("You win! scissors beat paper");
                return "humanWins"
            } else {
                console.log("You lose! rock beats scissors!");
                return "computerWins"
            }
        }

    }

    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let round = playRound();
        switch (round) {
            case "humanWins":
                humanScore++;
                console.log("human score = ", humanScore);
                console.log(round);
                break;
            case "computerWins":
                computerScore++;
                console.log("computer score = ", computerScore);
                console.log(round);
                break;
            case "tie":
                console.log("human score = ", humanScore);
                console.log("computer score =", computerScore);
                break;
        }
    }
    console.log("your score = ", humanScore)
    console.log("computer score =", computerScore)
}

playGame()
