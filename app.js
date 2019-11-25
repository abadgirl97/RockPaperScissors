let userScore = 0; 
let compScore = 0;
/* UNDERSCORE DIFFERENTIATES FROM NORMAL AND DOM */
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreboard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
/* BUTTONS */
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

/*RESET BUTTON */
const reset_span = document.getElementById("reset");

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(userChoice, compChoice) {
    userScore++;
    userChoice = userChoice[0].toUpperCase() + userChoice.slice(1);
    const smallComp = "comp".fontsize(3).sub();
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = userChoice + " beats " + compChoice + smallComp + ". You win.";
}

function lose(userChoice, compChoice) {
    compScore++;
    compChoice = compChoice[0].toUpperCase() + compChoice.slice(1);
    const smallComp = "comp".fontsize(3).sub();
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = compChoice + smallComp + " beats " + userChoice + ". You lose.";
}

function draw(userChoice, compChoice) {
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_div.innerHTML = "It's a draw! You both chose " + userChoice + ".";
}

function game(userChoice) {
    const compChoice = getComputerChoice();
    switch (userChoice + compChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            win(userChoice, compChoice);
            break;
        case "scissorsrock":
        case "rockpaper":
        case "paperscissors":
            lose(userChoice, compChoice);
            break;
        case "scissorsscissors":
        case "paperpaper":
        case "rockrock":
            draw(userChoice, compChoice);
            break;
    }
}

function reset() {
    userScore = 0;
    compScore = 0;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
}

function main() {
    rock_div.addEventListener('click', function() {
        game("rock");
    })

    paper_div.addEventListener('click', function() {
        game("paper");
    })

    scissors_div.addEventListener('click', function() {
        game("scissors");
    })
    
    reset_span.addEventListener('click', function() {
        reset();
    })
}

main(); 
