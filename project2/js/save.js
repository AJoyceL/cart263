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