window.onload = setup;

/** function setup */
function setup(){
    // let bounds = parentCanvas.getBoundingClientRect();
    // let offset = 20;

    // changes date to real time date
    // https://www.geeksforgeeks.org/javascript/javascript-date-objects/
    const now = new Date();// default date cnstructor
    let formattedDate = now.toLocaleDateString('en-CA'); // sets the output format to YYYY-MM-DD
    document.querySelector("h3").textContent = formattedDate; 
    console.log(formattedDate); //automatically changes the date to match the day
    
    // changes the journal entry
    // https://www.w3schools.com/jsref/prop_html_contenteditable.asp
    let entry = document.getElementById("entry");
    entry.addEventListener("click", journalEntry());
    function journalEntry() {
        entry.contentEditable = true;
        entry.style.outline = "none";
    };
    


}