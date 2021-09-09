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

// Changes cursor to another look
document.body.style.cursor = "pointer";

// An array with possible hidden words
let hidden_words = [
    "Consumerism",
    "Shopping",
    "Waste",
    "Meateater",
    "Veganism",
    "Vegetarian",
    "Cows",
    "Transportation",
    "Commute",
    "Automobile",
    "Diesel",
    "Petrol",
    "Holidays",
    "Airplanes",
    "Flying",
    "Heating",
    "Electricity"
]

// Function to select the secret word to guess
function selectSecretWord(){
    let secretWord = hidden_words[Math.floor(Math.random() * hidden_words.length)];
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
    
    selectSecretWord()
}



// Function to reset the page
function resetPage(){
    history.go()
}