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
    entry.addEventListener("click", journalEntry());
    function journalEntry() {
        entry.contentEditable = true;
        entry
        entry.style.outline = "none";
    };

    //creates a next button
    let nextBtn = document.createElement("button");
    nextBtn.textContent = "Next";
    nextBtn.classList.add("nextBtn");
    document.querySelector("body").appendChild(nextBtn);
    
    // function nextPage() {
    //     entry.contentEditable = false;
    //     entry.classList.add("locked");
    //     let newP = document.createElement("p");
    //     newP.contentEditable = true;
    //     newP.textContent = entry.textContent;
    //     document.getElementById("parent").appendChild(newP);
    // }
    // nextBtn.addEventListener("click", nextPage);



    /*
        Save and Retrieval buttons
    */
    // creates a save button
    let saveBtn = document.createElement("button");
    saveBtn.textContent = "Save";
    saveBtn.classList.add("saveBtn");
    document.querySelector("body").appendChild(saveBtn);

    // saves the journal entry and date to local storage
    saveBtn.addEventListener("click", saveEntry);
    function saveEntry() {
        console.log(this.parentElement);
        let saveID = this.parentElement.id;
        let entryText = this.parentElement.querySelector("#entry").textContent;
        console.log(saveID);
        console.log(entryText);
        localStorage.setItem(saveID + "date", formattedDate);   //saves the date of the entry to local storage
        localStorage.setItem(saveID + "entry", entryText);  //saves the journal entry to local storage
        // alert("Journal entry saved!");
    }

    // creates a retrieve button
    let retrieveBtn = document.createElement("button");
    retrieveBtn.textContent = "Retrieve";
    retrieveBtn.classList.add("retrieveBtn");
    document.querySelector("body").appendChild(retrieveBtn);
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