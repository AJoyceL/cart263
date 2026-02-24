
 window.onload = function () {
    // get the canvas
    let canvas = document.getElementById("testCanvas");
    //get the context
    let context = canvas.getContext("2d");

    let rectSize = 50
    // draw a rectangle
    context.fillStyle = "rgb(255, 0, 0, 255)";
    // draw a rect
    context.fillRect(canvas.width / 2, canvas.height / 2, rectSize, rectSize);
    // cut out a rect inside
    context.clearRect(canvas.width / 2 + rectSize/4, canvas.height / 2 + rectSize/4, rectSize/2, rectSize/2);
    
};