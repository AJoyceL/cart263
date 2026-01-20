"use strict";

function setup() {
    createCanvas(400, 400);
    background(0,0,0);

    // Create ellipses with different sizes and colors.
    drawEllipse(25, 25, 25, 25, 200, 0, 0);
    drawEllipse(50, 50, 35, 35, 0, 200, 0);
    drawEllipse(85, 85, 50, 50, 0, 0, 200);
}

function draw() {

}

function drawEllipse(x,y,w,h,r,g,b){ 
    push();
    fill(r, g, b);
    noStroke();
    ellipse(x, y, w, h);
    pop();
}