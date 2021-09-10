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

// Function that alters the conclusion depending on word chosen
function setConclusion(){
    if (secretWord == "CONSUMERISM" || secretWord == "SHOPPING" || secretWord == "WASTE"){
        document.getElementById("conclusion").innerHTML = "The production of goods is a large part of the average consumers climate impact. Don't replace stuff that still works, buy 2nd hand items, be critical of what you would like and what you actually need, dispose of reuseables in an appropriate manner."
    } else if (secretWord == "MEATEATER" || secretWord == "VEGANISM" || secretWord == "VEGETARIAN" || secretWord == "COWS"){
        document.getElementById("conclusion").innerHTML = "Eating habits matter! Whilst going vegan might be a daunting first step, you can greatly reduce your footprint by cutting cows and dairy products from your diet."
    } else if (secretWord == "TRANSPORTATION" || secretWord == "COMMUTE"){
        document.getElementById("conclusion").innerHTML = "Consider public transportation or get on your bike if the distance is manageable. Long term you could consider ways of reducing the distance you need to commute."
    } else if (secretWord == "AUTOMOBILE" || secretWord == "DIESEL" || secretWord == "PETROL"){
        document.getElementById("conclusion").innerHTML = "Use public transportation if available, get on that bike. If you are deeply reliant on a car, then changing to an electric vehicle will decrease your footprint"
    } else if (secretWord == "AIRPLANES" || secretWord =="FLYING"){
        document.getElementById("conclusion").innerHTML = "Fly less, if at all. Just one short return trip is more than double the emissions an average person can produce yearly if we want to sustain an habitable planet. It sucks, I know!"
    } else {
        document.getElementById("conclusion").innerHTML = "Switch to renewable energy sources if possible, turn unused items/lightning off, turn down the heat and wear a sweater!"
    }
    alert(secretWord);
}

function setAnswerWas(){
    document.getElementById("answer_was").innerHTML = secretWord;
}

// Function to select the secret word to guess
function selectSecretWord(){
    secretWord = hidden_words[Math.floor(Math.random() * hidden_words.length)];
    setConclusion()
    setAnswerWas()
    secretWord = secretWord.split("").map(letter => " _ ").join("");
    document.getElementById("secret_word").innerHTML = secretWord;
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



// Functions for the conclusions
function lostGame(){
    document.getElementById("globe").src ="assets/images/failure_image.jpg";
    document.getElementById("wrong_guesses").style.display = "none";
    document.getElementById("answer_box").style.display = "block";
    document.getElementById("game_area_heading").innerHTML = "FAILURE!";
    document.getElementById("secret_word").innerHTML = "You have failed, a string of poor choices has led humans to the brink of extinction. Find solace in knowning that the planet will probably better off without us!"
    document.getElementById("letters").style.display = "none";
    document.getElementById("conclusion").style.display = "block";
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
            remainingGuesses --;
            document.getElementById("remaining_guesses").innerHTML = remainingGuesses;
            lostGame();
            break;
    }
}


function checkGuess(letter){
    if (secretWord.indexOf(letter) >= 0) {

    }
    lostGame();
    document.getElementById(letter).disabled = true;
}



// Functions that resets the GameState page when Play Again button is pressed.

    // REQUIRES BETTER SOLUTION FOR RESETTING LETTERS!
function reStartGame(){
    document.getElementById("globe").src ="assets/images/stage1.jpg";
    document.getElementById("wrong_guesses").style.display = "block";
    document.getElementById("remaining_guesses").innerHTML = 6;
    document.getElementById("answer_box").style.display = "none";
    document.getElementById("game_area_heading").innerHTML = "Can you do better this time around?";
    document.getElementById("letters").style.display = "block";
    document.getElementById("conclusion").style.display = "none";
    document.getElementById("A").disabled = false;
    selectSecretWord();
}


// Function to reset the page
function resetPage(){
    history.go()
}