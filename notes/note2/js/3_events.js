
window.onload = setup;
function setup(){
    console.log("events!")
    // A function which will be called by the browser when the event in question occurs. This function is also known as a callback.

/* MOUSE CLICK EVENTS*/
//makes the intro section change color when clicked
    let introSection = document.getElementById("intro");
    introSection.addEventListener("click", mouseIntroHandler);

    function mouseIntroHandler(e){
        console.log("hello");
        this.classList.add("intro-section-clicked");
        // console.log(e);//calls for the event object
        // console.log(this);//calls for the element that triggered the event
        // this.style.background = `rgba(214, 110, 239, 0.5)`

        // //this keeps the paragraph from changing color when clicked
        // console.log(document.querySelector(`#${this.id} p`));
        // document.querySelector(`#${this.id} p`).style.background = `rgba(214, 110, 239 ,.5)`;

        //changes  only the opacity of the intro section when clicked
        this.style.setProperty("opacity",".5");
    }

//makes all section change opacity when clicked
    let allSections = document.querySelectorAll(".mouseclick-active-section");

    for(let element of allSections){
        element.addEventListener("click", changeOpacityOfSection);
    }

    function changeOpacityOfSection(e){
        console.log(this);

        if(this.getAttribute("custom-bool") === "inactive"){
            
            let classToAdd = `${this.id}-section-clicked`;
            let classToAddP = `${this.id}-section-p-active`;
            this.classList.add(classToAdd);
            document.querySelector(`#${this.id} p`).classList.add(classToAddP);
            this.setAttribute("custom-bool", "active");
        }
        else{
            let classToAdd = `${this.id}-section-active`;
            let classToAddP = `${this.id}-section-p-active`;
            this.classList.remove(classToAdd);
            document.querySelector(`#${this.id} p`).classList.remove(classToAddP);
            this.setAttribute("custom-bool", "inactive");
        }
    } 
}


