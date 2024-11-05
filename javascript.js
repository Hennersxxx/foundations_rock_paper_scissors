humanScore = 0

computerScore = 0

function getComputerChoice()
    {
        let choice = Math.floor(Math.random() * 3) + 1

            if (choice == 1)
                {
                    return("Rock");
                }
            else if (choice == 2)
                {
                    return("Paper");
                }
            else
                {
                    return("Scissors");
                }
    }
console.log(getComputerChoice())

function getHumanChoice()
    {
        let choice = prompt('Please choose rock, paper, or scissors','')
        return choice
    }
console.log(getHumanChoice())

function playRound(humanChoice, computerChoice)
    {
            if
                (humanChoice = "rock") (and (computerChoice = "rock"))
                    {
                        return "Draw!"
                    }
                        else if
                            ((humanChoice = "rock") (and (computerChoice = "paper")))
                                {
                                    return "You lose! Paper covers rock!"
                                }
                        else if
                            ((humanChoice = "rock") (and (computerChoice = "scissors")))
                                {
                                    return "You win! Rock beats scissors!"
                                }
                        else if
                            ((humanChoice = "scissors") (and (computerChoice = "paper")))
                                {
                                    return "You win! Scissors cuts paper!"
                                }
                        else if
                            ((humanChoice = "scissors") (and (computerChoice = "rock")))
                                {
                                    return "You lose! Rock beats scissors!"
                                }
                        else if
                            ((humanChoice = "scissors") (and (computerChoice = "scissors")))
                                {
                                    return "Draw!"
                                }
                        else if
                            ((humanChoice = "paper") (and (computerChoice = "paper")))
                                {
                                    return "Draw!"
                                }
                        else if
                            ((humanChoice = "paper") (and (computerChoice = "scissors")))
                                {
                                    return "You lose! Scissors cuts paper!"
                                }
                            else
                                {
                                    return "You win! Paper covers rock!"
                                }
    }