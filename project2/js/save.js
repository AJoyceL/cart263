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

        //click to downlaod entry as text file
        entryDiv.addEventListener("click", function() {
            downloadEntry(entries.indexOf(entry), entry.text);
        });
    });

    //save entry as text file
    //reference: https://coreui.io/answers/how-to-download-a-file-in-javascript/
    function downloadEntry(index, text) {
        let blob = new Blob([text], {type: "text/plain"});
        let data = window.URL.createObjectURL(blob);
        let a = document.createElement("a");
        a.href = data;
        a.download = "entry_" + index + ".txt";
        a.click();
        window.URL.revokeObjectURL(data);
    }



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