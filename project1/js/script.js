window.onload = setup;

/** function setup */
function setup(){
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

    //creates a next button
    let oceanBtn = document.createElement("button");
    oceanBtn.textContent = "ocean";
    oceanBtn.classList.add("oceanBtn"); 
    container.appendChild(oceanBtn);
    
    // calls ocean.js to create a canvas element and draw on it
    oceanBtn.addEventListener("click", function () {
        // create the ocean canvas inside the entry container (placed after buttons)
        if (createOcean === 'function') {
            createOcean(container);
            oceanBtn.disabled = true;
            oceanBtn.textContent = 'ocean';
        } else if (window.createOcean) {
            window.createOcean(container);
            oceanBtn.disabled = true;
            oceanBtn.textContent = 'ocean';
        } else {
            console.warn('createOcean() not available');
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