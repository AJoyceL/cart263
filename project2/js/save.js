window.onload = setup;

/** function setup */
function setup(){
    /*
        general setup for the journal page
    */
    //background colour change
    let bg = document.querySelector("body");
    bg.style.backgroundColor = "rgb(83, 66, 54)";

    let indexP = document.getElementById("indexParent");
    const saveContainer = indexP.parentElement;


    /*
        Saved entries
    */

    //reference: https://stackoverflow.com/questions/65908096/how-can-i-store-multiple-values-inside-one-localstorage-key?utm_source=chatgpt.com
    let container = document.getElementById("indexParent");

    //get entries
    let entries = JSON.parse(localStorage.getItem("entries")) || [];
    //display entries
    entries.forEach(function(entry) {
        let entryDiv = document.createElement("div");
        entryDiv.classList.add("entryDiv");
        entryDiv.textContent = entry.date + ": " + entry.text;
        container.appendChild(entryDiv);
    });

    /*
        Buttons
    */
    // creates a retrieve button
    let indexBtn = document.createElement("button");
    indexBtn.textContent = "Diary";
    indexBtn.classList.add("indexBtn");
    saveContainer.appendChild(indexBtn);

    //sends users to save.html
    indexBtn.addEventListener("click", function() {
        window.location.href = "index.html";
    });
}