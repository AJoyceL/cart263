"use strict";

/**
 * Create rects with different sizes and colors.
 */

//var1ables for rect 1
let x1 = 0;
let r1 = 173;
let g1 = 216;
let b1 = 230;

//variables for rect 2
let x2 = 200;
let r2 = 70;
let g2 = 130;
let b2 = 180;

//variables for rect 3
let x3 = 400;
let r3 = 0;
let g3 = 49;
let b3 = 83;

//general variables
let y = 0;
let w = 200;
let h = 600; 

function setup() {
    createCanvas(600, 600);
}

function draw() {
    background(0,0,0);
    //draw rects
    noStroke();
    fill(r2, g2, b2);
    rect(x2, y, w, h);

    fill(r3, g3, b3);
    rect(x3, y, w, h);

    fill(r1, g1, b1);
    rect(x1, y, w, h);
}
  
function mouseMoved(){
    //variable to change colour of rects when mouse move on X axis

    //rect1
    if(mouseX >= 0 && mouseX < 200){
        r1 = 255;
        g1 = 255;
        b1 = 255;
    }
    else if(mouseX >= 200){
        r1 = 173;
        g1 = 216;
        b1 = 230;
    }

    //rect2
    if(mouseX >= 200 && mouseX < 400){
        r2 = 255;
        g2 = 255;
        b2 = 255;
    }   
    else if(mouseX < 200 || mouseX >= 400){
        r2 = 70;
        g2 = 130;
        b2 = 180;
    }
 
    //rect3
    if(mouseX >= 400 && mouseX <= 600){
        r3 = 255;
        g3 = 255;
        b3 = 255;
    }
    else if(mouseX < 400){
        r3 = 0;
        g3 = 49;
        b3 = 83;
    }

}