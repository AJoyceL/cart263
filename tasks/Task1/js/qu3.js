"use strict";

/**
 * Create rects with different sizes and colors.
 */

//var1ables for rect 1
let x1 = 25;
let y1 = 25;
let w1 = 25;
let h1 = 25;
let r1 = 200;
let g1 = 0;
let b1 = 0;

//variables for rect 2
let x2 = 50;
let y2 = 50;
let w2 = 35;
let h2 = 35;
let r2 = 0;
let g2 = 200;
let b2 = 0;

//variables for rect 3
let x3 = 85;
let y3 = 85;
let w3 = 50;
let h3 = 50;
let r3 = 0;
let g3 = 0;
let b3 = 200;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(0,0,0);

    //rect3 fall down
    y3 += 2;
    if(y3 > height){
        y3 = 85; //return to original position
    }

    //rect2 changes colour as mouse move on X axis
    r3 = map(mouseX, 0, width, 0, 255); 
    g3 = map(mouseX, 0, 255, width, 0);
    b3 = map(mouseX, 0, 0, 255, width);

    //draw rects
    noStroke();
    fill(r2, g2, b2);
    rect(x2, y2, w2, h2);

    fill(r3, g3, b3);
    rect(x3, y3, w3, h3);

    fill(r1, g1, b1);
    rect(x1, y1, w1, h1);
}

function mousePressed(){
    // redraw the rectangle in a different position when mouse is pressed
    x1 += 30;    
    y1 += 30;

    //return to original position if it goes off screen
    if(x1 > width){
        x1 = 25;
    }
    if(y1 > height){
        y1 = 25;
    }
}

function keyPressed(){
    // redraw the rectangle in a different position when a key is pressed
    if(key === ' '){
        x2 += 30;    
        y2 += 30;   
    }

    //return to original position if it goes off screen
    if(x2 > width){
        x2 = 50;
    }   
    if(y2 > height){
        y2 = 50;
    }
}    