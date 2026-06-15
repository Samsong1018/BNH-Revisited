const choices = ["Bear", "Ninja", "Hunter"];

let playerWins = 0;
let computerWins = 0;

const bearBtn = document.getElementById("bear-btn");
const ninjaBtn = document.getElementById("ninja-btn");
const hunterBtn = document.getElementById("hunter-btn");
const playAgainBtn = document.getElementById("play-again-btn");

const resultsSection = document.getElementById("results-section");
const playerChoiceText = document.getElementById("player-choice-text");
const computerChoiceText = document.getElementById("computer-choice-text");
const outcomeText = document.getElementById("outcome-text");
const playerWinsDisplay = document.getElementById("player-wins");
const computerWinsDisplay = document.getElementById("computer-wins");

bearBtn.addEventListener("click", function ()
{
    playGame("Bear");
});

ninjaBtn.addEventListener("click", function ()
{
    playGame("Ninja");
});

hunterBtn.addEventListener("click", function ()
{
    playGame("Hunter");
});

playAgainBtn.addEventListener("click", function ()
{
    resetDisplay();
});

function playGame(playerChoice)
{
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomIndex];
    const outcome = determineOutcome(playerChoice, computerChoice);

    if (outcome === "player")
    {
        playerWins++;
    }
    else if (outcome === "computer")
    {
        computerWins++;
    }

    showResults(playerChoice, computerChoice, outcome);
}

// returns "player", "computer", or "tie"
function determineOutcome(playerChoice, computerChoice)
{
    if (playerChoice === computerChoice)
    {
        return "tie";
    }

    if (
        (playerChoice === "Bear"   && computerChoice === "Hunter") ||
        (playerChoice === "Hunter" && computerChoice === "Ninja")  ||
        (playerChoice === "Ninja"  && computerChoice === "Bear")
    )
    {
        return "player";
    }

    return "computer";
}

function showResults(playerChoice, computerChoice, outcome)
{
    playerChoiceText.textContent = "You chose " + playerChoice + ".";
    computerChoiceText.textContent = "The computer chose " + computerChoice;

    if (outcome === "player")
    {
        outcomeText.textContent = "You win!";
    }
    else if (outcome === "computer")
    {
        outcomeText.textContent = "The computer wins!";
    }
    else
    {
        outcomeText.textContent = "It's a tie!";
    }

    playerWinsDisplay.textContent = "Your Wins: " + playerWins;
    computerWinsDisplay.textContent = "Computer Wins: " + computerWins;

    resultsSection.style.display = "block";
}

// hides results section, win counts stay
function resetDisplay()
{
    resultsSection.style.display = "none";
}
