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
let hiddenWords = [
    "CONSUMERISM",
    "SHOPPING",
    "REUSEABLE",
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
    "HOLIDAY",
    "AIRPLANES",
    "FLYING",
    "HEATING",
    "ELECTRICITY",
    "POWER"
];

// Variables used accoss multiple functions
let secretWord;
let secretWordState;
let usedLetters = [];

// Function that alters the conclusion depending on word chosen
function setConclusion(){
    if (secretWord == "CONSUMERISM" || secretWord == "SHOPPING" || secretWord == "WASTE" || secretWord =="REUSEABLE"){
        document.getElementById("conclusion").innerHTML = "The production of goods is a large part of the average consumers climate impact. Don't replace stuff that still works, buy 2nd hand items, be critical of what you would like and what you actually need, dispose of reuseables in an appropriate manner.";
    } else if (secretWord == "MEATEATER" || secretWord == "VEGANISM" || secretWord == "VEGETARIAN" || secretWord == "COWS"){
        document.getElementById("conclusion").innerHTML = "Eating habits matter! Whilst going vegan might be a daunting first step, you can greatly reduce your footprint by cutting cows and dairy products from your diet.";
    } else if (secretWord == "TRANSPORTATION" || secretWord == "COMMUTE"){
        document.getElementById("conclusion").innerHTML = "Consider public transportation or get on your bike if the distance is manageable. Long term you could consider ways of reducing the distance you need to commute.";
    } else if (secretWord == "AUTOMOBILE" || secretWord == "DIESEL" || secretWord == "PETROL"){
        document.getElementById("conclusion").innerHTML = "Use public transportation if available, get on that bike. If you are deeply reliant on a car, then changing to an electric vehicle will decrease your footprint";
    } else if (secretWord == "AIRPLANES" || secretWord =="FLYING" || secretWord =="HOLIDAY"){
        document.getElementById("conclusion").innerHTML = "Fly less, if at all. Just one short return trip is more than double the emissions an average person can produce yearly if we want to sustain an habitable planet. It sucks, I know!";
    } else {
        document.getElementById("conclusion").innerHTML = "Switch to renewable energy sources if possible, turn unused items/lightning off, turn down the heat and wear a sweater!";
    }
}

function setAnswerWas(){
    document.getElementById("answer_was").innerHTML = secretWord;
}

// Function to select the secret word to guess
function selectSecretWord(){
    if (hiddenWords.length == 0){
        alert ("You've tried all the words this game has to offer. Click the back button to restock the list of words")
    } else {
    secretWord = hiddenWords[Math.floor(Math.random() * hiddenWords.length)];
    setConclusion();
    setAnswerWas();
    hiddenWord();
}

// Function to display the secret word in a hidden way, and also to update it during the game
function hiddenWord(){
    secretWordState = secretWord.split("").map(letter => (usedLetters.indexOf(letter) >=0 ? letter : " _ ")).join("");
    document.getElementById("secret_word").innerHTML = secretWordState;
}

// Function that creates the letter buttons. This portion of code is heavily inspired by https://www.youtube.com/watch?v=dgvyE1sJS3Y
function letterButtons(){
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('').map(letter =>
        `
            <button id='` + letter + `'onClick="checkGuess('` + letter + `')">
            ` + letter + `
            </button>
        `).join('');
    document.getElementById("letters").innerHTML = alphabet;
  }

// Function that transforms screen from Welcome Page & starts GameState mode
function startGame(){
    document.getElementById("globe").src ="assets/images/stage1.jpg";
    document.getElementById("intro").style.display = "none";
    document.getElementById("popup_wrap").style.display = "none";
    document.getElementById("wrong_guesses").style.display = "block";
    document.getElementById("game_area").style.display = "block";
    letterButtons();
    selectSecretWord();
}

// Functions for the conclusions
function lostGame(){
    document.getElementById("globe").src ="assets/images/failure_image.jpg";
    document.getElementById("wrong_guesses").style.display = "none";
    document.getElementById("answer_box").style.display = "block";
    document.getElementById("game_area_heading").innerHTML = "FAILURE!";
    document.getElementById("secret_word").innerHTML = "You have failed, a string of poor choices has led humans to the brink of extinction. Find solace in knowning that the planet will probably better off without us!";
    document.getElementById("letters").style.display = "none";
    document.getElementById("conclusion").style.display = "block";
}

function wonGame(){
    document.getElementById("globe").src ="assets/images/succes_image.jpg";
    document.getElementById("wrong_guesses").style.display = "none";
    document.getElementById("answer_box").style.display = "block";
    document.getElementById("game_area_heading").innerHTML = "SUCCESS!";
    document.getElementById("secret_word").innerHTML = "Congratulations hero! You excellent choices has saved the human race. Now it's time to apply your superpowers to reduce your own climate footprint! Go now hero, I believe in you.";
    document.getElementById("letters").style.display = "none";
    document.getElementById("conclusion").style.display = "block";
}

// Functions to handle corret & incorrest guesses
function correctGuess(){
    hiddenWord();
    if (secretWordState === secretWord){
        wonGame();
    }
}

function incorrectGuess(){
    let remainingGuesses = document.getElementById("remaining_guesses").textContent;
    switch (remainingGuesses) {
        case "6":
            document.getElementById("globe").src ="assets/images/stage2.jpg";
            remainingGuesses--;
            document.getElementById("remaining_guesses").innerHTML = remainingGuesses;
            break;
        case "5":
            document.getElementById("globe").src ="assets/images/stage3.jpg";
            remainingGuesses--;
            document.getElementById("remaining_guesses").innerHTML = remainingGuesses;
            break;
        case "4":
            document.getElementById("globe").src ="assets/images/stage4.jpg";
            remainingGuesses--;
            document.getElementById("remaining_guesses").innerHTML = remainingGuesses;
            break;
        case "3":
            document.getElementById("globe").src ="assets/images/stage5.jpg";
            remainingGuesses--;
            document.getElementById("remaining_guesses").innerHTML = remainingGuesses;
            break;
        case "2":
            document.getElementById("globe").src ="assets/images/stage6.jpg";
            remainingGuesses--;
            document.getElementById("remaining_guesses").innerHTML = remainingGuesses;
            break;
        default:
            lostGame();
            break;
    }
}

function checkGuess(letter){
    usedLetters.push(letter);
    document.getElementById(letter).disabled = true;
   
    if (secretWord.indexOf(letter) >= 0){
        correctGuess();
    } else {
        incorrectGuess();
    }
}

// Functions that resets the GameState page when Play Again button is pressed.
function reStartGame(){
    document.getElementById("globe").src ="assets/images/stage1.jpg";
    document.getElementById("wrong_guesses").style.display = "block";
    document.getElementById("remaining_guesses").innerHTML = 6;
    document.getElementById("answer_box").style.display = "none";
    document.getElementById("game_area_heading").innerHTML = "Good luck - You can do it!";
    document.getElementById("letters").style.display = "block";
    document.getElementById("conclusion").style.display = "none";
    hiddenWords.splice(hiddenWords.indexOf(secretWord), 1); // Removes the hidden word from the list before the game is reset.
    usedLetters = [];
    letterButtons();
    selectSecretWord();
    alert(hiddenWords);
}



// Function to reset the page
function resetPage(){
    history.go();
}