//  Functions to display/hide the Rules & Info content boxes.

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