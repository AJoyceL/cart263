window.onload = function(){
    console.log("move");

    let box = document.querySelector("#draw-box-a");
    box.addEventListener("mousemove", drawBoxCallBack);

    let particle = document.createElement("div");
    particle.classList.add("point");
    box.appendChild(particle);

    function drawBoxCallBack(e){
        console.log("moving");
        // console.log(this);
        console.log(e.target); //same thing as (thing)
        console.log(this.getBoundingClientRect());//gets me the exact coordinates
        let offsetX = e.clientX - this.getBoundingClientRect().x;
        let offsetY = e.clientY - this.getBoundingClientRect().y;

        //calculates the mouse position withing the canvas
        // this.innerHTML = `x:${offsetX} y:${offsetY}`;

        //moves the square within the canvas
        particle.style.left = offsetX +"px";
        particle.style.top = offsetY + "px";

    }
}