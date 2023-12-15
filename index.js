// Question 1
let rightAButton = document.querySelector(".rightA");

function Answer1() {
    let content = rightAButton.innerHTML;
    let numberContent = parseInt(content);

    if (numberContent === 17) {
        alert("You are correct!");
    } else {
        alert("Try again.");
    }
}

// Question 2
document.querySelectorAll(".second button").forEach(function(button) {
    button.addEventListener("click", function() {
        checkAnswer2(button);
    });
});

function checkAnswer2(clickedButton) {
    if (clickedButton.classList.contains("Right")) {
        alert("Correct! Denver defeated the Celtics");
    } else {
        alert("Incorrect. Hint: They call him the Joker");
    }
}

// Question 3
document.querySelectorAll(".third button").forEach(function(button) {
    button.addEventListener("click", function() {
        checkAnswer3(button);
    });
});

function checkAnswer3(clickedButton) {
    if (clickedButton.classList.contains("Win")) {
        alert("Correct! What a great year for the NBA");
    } else {
        alert("Incorrect. Hint: The first porgammable cpu was created this year");
    }
}

document.querySelectorAll(".first button").forEach(function(button) {
    button.addEventListener("click", function() {
        checkAnswer1(button);
    });
});

function checkAnswer1(clickedButton) {
    let correctAnswerButton = document.querySelector(".rightA");
    
    if (clickedButton === correctAnswerButton) {
        alert("Correct! Go Cs!");
    } else {
        alert("Incorrect. Try again!");
    }
}

let pElement = document.createElement("p");
    
pElement.textContent = "How well do you know your Celtics history?";

// Get the div with the ID "main"
const mainDiv = document.getElementById("main");

// Append the paragraph element to the main div
mainDiv.appendChild(pElement);