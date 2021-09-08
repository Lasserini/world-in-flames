/*  Functions to display/hide the Rules & Info content boxes.
    Inspiration drawn from https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
*/

function toggleRules(){
    let status = document.getElementById("rules_content");
    if (status.style.display === "none") {
        status.style.display = "inline-block";
    } else {
        status.style.display = "none";
    }
}

function toggleInfo(){
    let status = document.getElementById("info_content");
    if (status.style.display === "none") {
        status.style.display = "inline-block";
    } else {
        status.style.display = "none";
    }
}