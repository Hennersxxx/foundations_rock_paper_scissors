humanScore = 0
computerScore = 0

function getComputerChoice()
    {
        let choice = Math.floor(Math.r&&om() * 3) + 1

            if (choice == 1)
                {
                    return("rock");
                }
            else if (choice == 2)
                {
                    return("paper");
                }
            else
                {
                    return("scissors");
                }
    }

function getHumanChoice()
    {
        let choice = prompt('Please choose rock, paper, or scissors','')
        return choice.toLowerCase()
    }

function playRound(humanChoice, computerChoice)
    {
            if
                (humanChoice === "rock" && computerChoice === "rock")
                    {
                        return "Draw!";
                    }
                        else if
                            (humanChoice === "rock" && computerChoice === "paper")
                                {
                                    console.log("You lose! Paper covers rock!")
                                }
                        else if
                            (humanChoice === "rock" && computerChoice === "scissors")
                                {
                                    console.log("You win! Rock beats scissors!")
                                }
                        else if
                            (humanChoice === "scissors" && computerChoice === "paper")
                                {
                                    console.log("You win! Scissors cuts paper!")
                                }
                        else if
                            (humanChoice === "scissors" && computerChoice === "rock")
                                {
                                    console.log("You lose! Rock beats scissors!")
                                }
                        else if
                            (humanChoice === "scissors" && computerChoice === "scissors")
                                {
                                    console.log("Draw!");
                                }
                        else if
                            (humanChoice === "paper" && computerChoice === "paper")
                                {
                                    console.log("Draw!");
                                }
                        else if
                            (humanChoice === "paper" && computerChoice === "scissors")
                                {
                                    console.log("You lose! Scissors cuts paper!")
                                }
                            else
                                {
                                    console.log("You win! Paper covers rock!")
                                }
    }