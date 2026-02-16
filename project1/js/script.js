window.onload = setup;

/** function setup */
function setup(){

    // changes date to real time date
    // https://www.geeksforgeeks.org/javascript/javascript-date-objects/
    const now = new Date();// default date cnstructor
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
        // checkBounds(document.getElementById("parent"), entry);
    };

    //keeps entry within bounds of the parent div
    function checkBounds(parent, p) {
        let bounds = parent.getBoundingClientRect();
        let pBounds = p.getBoundingClientRect();

    }   

    //creates a next button
    let nextBtn = document.createElement("button");
    nextBtn.textContent = "Next";
    nextBtn.classList.add("nextBtn");
    document.getElementById("parent").appendChild(nextBtn);
    
    function nextPage() {
        // code to go to next page
        let nextPageDiv = document.createElement("div");
        nextPageDiv.classList.add("nextPage");
        document.getElementById("parent").appendChild(nextPageDiv);

        nextPageDiv.textContent = entry.textContent;
    }
    nextBtn.addEventListener("click", nextPage);

    // if(nextBtn.clicked && nextPage()) {
    //     entry.contentEditable = false;

    //     let nextPageDiv = document.querySelector(".nextPage");
    //     nextPageDiv.textContent = entry.textContent;
        
    // }

}