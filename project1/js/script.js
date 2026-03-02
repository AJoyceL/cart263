window.onload = setup;

/** function setup */
function setup(){
    /*
        general setup for the journal page
    */
    //background colour change
    let bg = document.querySelector("body");
    bg.style.backgroundColor = "rgb(83, 66, 54)";

    // date https://www.geeksforgeeks.org/javascript/javascript-date-objects/
    const now = new Date();// default date constructor
    let formattedDate = now.toLocaleDateString('en-CA'); // sets the output format to YYYY-MM-DD
    document.querySelector("h3").textContent = formattedDate; 
    console.log(formattedDate); //automatically changes the date to match the day
    
    // changes the journal entry
    // contentEditable from: https://www.w3schools.com/jsref/prop_html_contenteditable.asp
    let entry = document.getElementById("entry");
    const container = entry.parentElement;
    entry.addEventListener("click", journalEntry);
    function journalEntry() {
        entry.contentEditable = true;
        entry.style.outline = "none";
    }


    /*
        themes buttons
    */

    //creates a traditional button
    let tradBtn = document.createElement("button");
    tradBtn.textContent = "basic";
    tradBtn.classList.add("tradBtn")
    container.appendChild(tradBtn);
    
    tradBtn.addEventListener("click", function(){
        const oceanCanvas = document.querySelector("#oceanCanvas");
        const flowerCanvas = document.querySelector("#flowerCanvas");
        if (oceanCanvas) {
            oceanCanvas.remove();
        }
        if (flowerCanvas) {
            flowerCanvas.remove();
        }
        tradBtn.disabled = true;
        oceanBtn.disabled = false;
        flowerBtn.disabled = false;
    });

    //creates a ocean button
    let oceanBtn = document.createElement("button");
    oceanBtn.textContent = "ocean";
    oceanBtn.classList.add("oceanBtn"); 
    container.appendChild(oceanBtn);
    
    // calls ocean.js to create a canvas element and draw on it
    oceanBtn.addEventListener("click", function () {
        // Hide flower if it's showing
        const flowerCanvas = document.querySelector("#flowerCanvas");
        if (flowerCanvas) {
            flowerCanvas.remove();
        }
        if (window.createOcean) {
            window.createOcean(container);
            oceanBtn.disabled = true;
            flowerBtn.disabled = false;
            tradBtn.disabled = false;
        }
    });


    let flowerBtn = document.createElement("button");
    flowerBtn.textContent = "flower";
    flowerBtn.classList.add("flowerBtn");
    container.appendChild(flowerBtn);

    //calls flower.js to create a canvas element and draw on it
    flowerBtn.addEventListener("click", function () {
        // hide ocean when flower is clicked
        const oceanCanvas = document.querySelector("#oceanCanvas");
        if (oceanCanvas) {
            oceanCanvas.remove();
        }
        if (window.createFlower) {
            window.createFlower(container);
            flowerBtn.disabled = true;
            oceanBtn.disabled = false;
            tradBtn.disabled = false;
        } 
    });

    /*
        Save and Retrieval buttons
    */
    // creates a save button
    let saveBtn = document.createElement("button");
    saveBtn.textContent = "Save";
    saveBtn.classList.add("saveBtn");
    container.appendChild(saveBtn);

    // saves the journal entry and date to local storage
    saveBtn.addEventListener("click", saveEntry);

    // calls the saving of the journal entry and date to local storage
    function saveEntry() {
        console.log(this.parentElement);
        let saveID = this.parentElement.id;
        let entryText = this.parentElement.querySelector("#entry").textContent;
        console.log(saveID);
        console.log(entryText);
        localStorage.setItem(saveID + "date", formattedDate);   //saves the date of the entry to local storage
        localStorage.setItem(saveID + "entry", entryText);  //saves the journal entry to local storage
    }

    // creates a retrieve button
    let retrieveBtn = document.createElement("button");
    retrieveBtn.textContent = "Retrieve";
    retrieveBtn.classList.add("retrieveBtn");
    container.appendChild(retrieveBtn);

    // retrieves the journal entry and date from local storage
    retrieveBtn.addEventListener("click", retrieveEntry);

    // calls the retrieval the journal entry from local storage
    function retrieveEntry() {
        let saveID = this.parentElement.id;
        let entryText = localStorage.getItem(saveID);
        console.log(saveID);
        console.log(entryText);
        document.getElementById(saveID).querySelector("#entry").textContent = localStorage.getItem(saveID + "entry");
        document.getElementById(saveID).querySelector("h3").textContent = localStorage.getItem(saveID + "date");
    }
    
}