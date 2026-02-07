window.onload = setup;

/** function setup */
function setup(){
    // let bounds = parentCanvas.getBoundingClientRect();
    // let offset = 20;

    //changes date 
    // https://www.geeksforgeeks.org/javascript/javascript-date-objects/
    const now = new Date();// default date cnstructor
    let formattedDate = now.toLocaleDateString('en-CA'); // sets the output format to YYYY-MM-DD
    document.querySelector("h3").textContent = formattedDate; 
    console.log(formattedDate); //automatically changes the date to match the day
    
    //changes the text
    document.querySelector("p").textContent = "Hi! this is the first entry of my journal. I've been trav3eling the world :3";

}