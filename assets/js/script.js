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