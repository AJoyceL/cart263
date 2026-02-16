window.onload = setup;

/** function setup */
function setup(){
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


    // //creates a next button
    // let nextBtn = document.createElement("button");
    // nextBtn.textContent = "Next";
    // nextBtn.classList.add("nextBtn");
    // document.getElementById("parent").appendChild(nextBtn);
    
    // function nextPage() {
    //     entry.contentEditable = false;
    //     entry.classList.add("locked");
    //     let newP = document.createElement("p");
    //     newP.contentEditable = true;
    //     newP.textContent = entry.textContent;
    //     document.getElementById("parent").appendChild(newP);
    // }
    // nextBtn.addEventListener("click", nextPage);

}