// Functions to display/hide the Rules & Info content boxes.
function toggleRules(){
    let status = document.getElementById("rules_content");
    if (status.style.display === "inline-block") {
        status.style.display = "none";
    } else {
        status.style.display = "inline-block";
    }
}

function toggleAbout(){
    let status = document.getElementById("about_content");
    if (status.style.display === "inline-block") {
        status.style.display = "none";
    } else {
        status.style.display = "inline-block";
    }
}

// An array with possible hidden words
let hidden_words = [
    "CONSUMERISM",
    "SHOPPING",
    "WASTE",
    "MEATEATER",
    "VEGANISM",
    "VEGETARIAN",
    "COWS",
    "TRANSPORTATION",
    "COMMUTE",
    "AUTOMOBILE",
    "DIESEL",
    "PETROL",
    "HOLIDAYS",
    "AIRPLANES",
    "FLYING",
    "HEATING",
    "ELECTRICITY"
]

// Variables used accoss multiple functions
let secretWord = [];

// Function to select the secret word to guess
function selectSecretWord(){
    secretWord = hidden_words[Math.floor(Math.random() * hidden_words.length)];
    secretWord = secretWord.split("").map(letter => " _ ").join("");
    document.getElementById("secret_word").innerHTML = secretWord;
}

// Functions for the conclusions
function lostGame(){
    document.getElementById("globe").src ="assets/images/failure_image.jpg";
}

function wonGame(){

}

// Functions to handle corret & incorrest guesses
function correctGuess(){

}

function incorrectGuess(){
    let remainingGuesses = document.getElementById("remaining_guesses");
    switch (remainingGuesses) {
        case "6":
            document.getElementById("globe").src ="assets/images/stage2.jpg";
            remainingGuesses --;
            document.getElementById("remaining_guesses").innerHTML = remainingGuesses;
            break;
        case "5":
            document.getElementById("globe").src ="assets/images/stage3.jpg";
            remainingGuesses --;
            document.getElementById("remaining_guesses").innerHTML = remainingGuesses;
            break;
        case "4":
            document.getElementById("globe").src ="assets/images/stage4.jpg";
            remainingGuesses --;
            document.getElementById("remaining_guesses").innerHTML = remainingGuesses;
            break;
        case "3":
            document.getElementById("globe").src ="assets/images/stage5.jpg";
            remainingGuesses --;
            document.getElementById("remaining_guesses").innerHTML = remainingGuesses;
            break;
        case "2":
            document.getElementById("globe").src ="assets/images/stage6.jpg";
            remainingGuesses --;
            document.getElementById("remaining_guesses").innerHTML = remainingGuesses;
            break;
        default:
            lostGame();
            break;
    }
}

function checkGuess(letter){
    if (secretWord.indexOf(letter) >= 0) {

    }

    document.getElementById(letter).disabled = true;
}


// Function that transforms screen from Welcome Page & starts GameState mode
function startGame(){
    document.getElementById("globe").src ="assets/images/stage1.jpg";
    let removeIntro = document.getElementById("intro");
        removeIntro.style.display = "none";
    let addGuessCounter = document.getElementById("wrong_guesses");
        addGuessCounter.style.display = "block";
    let addGameArea = document.getElementById("game_area");
        addGameArea.style.display = "block";
    selectSecretWord();
}

// Functions that resets the GameState page when Play Again button is pressed.

    // REQUIRES BETTER SOLUTION FOR RESETTING LETTERS!
function reStartGame(){
    document.getElementById("globe").src ="assets/images/stage1.jpg";
    document.getElementById("remaining_guesses").innerHTML = 6;
    document.getElementById("A").disabled = false;
    selectSecretWord();
}


// Function to reset the page
function resetPage(){
    history.go()
}