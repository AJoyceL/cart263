window.onload = setup;

/** function setup */
function setup(){
    //sound effects
    //from: https://freesound.org/people/tedryniyaz/sounds/721360/
    const waves = new Audio(`audio/waves.wav`);
    waves.loop = true;

    //from: https://freesound.org/people/kevp888/sounds/575254/
    const birds = new Audio(`audio/birds.wav`);
    birds.loop = true;
    birds.volume = 1;

    //from: https://freesound.org/people/gis_sweden/sounds/409940/
    const jazz = new Audio(`audio/jazz.wav`);
    jazz.loop = true;
    jazz.volume = .5;
    jazz.play();

    //from: https://freesound.org/people/klankbeeld/sounds/664611/
    const pBackground = new Audio(`audio/background.wav`);
    pBackground.loop = true;
    //from: https://freesound.org/people/Rayo75/sounds/768868/
    const pond = new Audio(`audio/fish.mp3`);
    pond.loop = true;
    pond.volume = .3;

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
        const pondCanvas = document.querySelector("#pondCanvas");
        
        //audio
        waves.pause();
        birds.pause();
        jazz.play();
        pBackground.pause();
        pond.pause();
        if (oceanCanvas) {
            oceanCanvas.remove();
        }
        if (flowerCanvas) {
            flowerCanvas.remove();
        }
        if (pondCanvas) {
            pondCanvas.remove();
        }
        tradBtn.disabled = true;
        oceanBtn.disabled = false;
        flowerBtn.disabled = false;
        pondBtn.disabled = false;
    });

    //creates a ocean button
    let oceanBtn = document.createElement("button");
    oceanBtn.textContent = "ocean";
    oceanBtn.classList.add("oceanBtn"); 
    container.appendChild(oceanBtn);
    
    // calls ocean.js to create a canvas element and draw on it
    oceanBtn.addEventListener("click", function () {
        // Hide themes if it's showing
        const flowerCanvas = document.querySelector("#flowerCanvas");
        const pondCanvas = document.querySelector("#pondCanvas");
        
        //audio
        waves.play();
        birds.pause();
        jazz.pause();
        pBackground.pause();
        pond.pause();
        if (flowerCanvas) {
            flowerCanvas.remove();
        }
        if (pondCanvas) {
            pondCanvas.remove();
        }
        //calls ocean theme
        if (window.createOcean) {
            window.createOcean(container);
            oceanBtn.disabled = true;
            flowerBtn.disabled = false;
            tradBtn.disabled = false;
            pondBtn.disabled = false;
        }
    });

    //creates a flower button
    let flowerBtn = document.createElement("button");
    flowerBtn.textContent = "flower";
    flowerBtn.classList.add("flowerBtn");
    container.appendChild(flowerBtn);

    //calls flower.js to create a canvas element and draw on it
    flowerBtn.addEventListener("click", function () {
        // hide themes if it's showing
        const oceanCanvas = document.querySelector("#oceanCanvas");
        const pondCanvas = document.querySelector("#pondCanvas");
        
        //audio
        waves.pause();
        birds.play();
        jazz.pause();
        pBackground.pause();
        pond.pause();
        if (oceanCanvas) {
            oceanCanvas.remove();
        }
        if (pondCanvas) {
            pondCanvas.remove();
        }
        //calls flower theme
        if (window.createFlower) {
            window.createFlower(container);
            flowerBtn.disabled = true;
            oceanBtn.disabled = false;
            tradBtn.disabled = false;
            pondBtn.disabled = false;
        } 
    });

    let pondBtn = document.createElement("button");
    pondBtn.textContent = "pond";
    pondBtn.classList.add("pondBtn");
    container.appendChild(pondBtn);

    pondBtn.addEventListener("click", function() {
        //hide themes if it's shopwing
        const oceanCanvas = document.querySelector("#oceanCanvas");
        const flowerCanvas = document.querySelector("#flowerCanvas");
        
        //audio
        waves.pause();
        birds.pause();
        jazz.pause();
        pond.play();
        pBackground.play();
        if (oceanCanvas) {
            oceanCanvas.remove();
        }
        if (flowerCanvas) {
            flowerCanvas.remove();
        }
        //calls pond theme
        if(createPond) {
            window.createPond(container);
            pondBtn.disabled = true;
            flowerBtn.disabled = false;
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

    //saves the journal entry and date to local storage 
    //reference: https://stackoverflow.com/questions/65908096/how-can-i-store-multiple-values-inside-one-localstorage-key?utm_source=chatgpt.com
    function saveEntry() {
        let entryText = document.getElementById("entry").textContent;
        let entryObj = {
            text: entryText,
            date: new Date().toLocaleDateString()
        };
        let entries = JSON.parse(localStorage.getItem("entries")) || [];
        entries.push(entryObj);
        localStorage.setItem("entries", JSON.stringify(entries));

        console.log("Entry saved:", entryObj);
    };


    // creates a retrieve button
    let folderBtn = document.createElement("button");
    // folderBtn.textContent = "Retrieve";
    folderBtn.textContent = "Folder";
    folderBtn.classList.add("folderBtn");
    container.appendChild(folderBtn);

    //sends users to save.html
    folderBtn.addEventListener("click", function() {
        window.location.href = "save.html";
    });
    
}