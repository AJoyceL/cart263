"use strict";

/**
 * Create rects with different sizes and colors.
 */

// object variables for rect 1
let btn1 = {
    x: 25,
    y: 25,
    w: 25,
    h: 25,
    r: 190,
    g: 165,
    b: 25
}

// object variables for rect 2
let btn2 = {
    x: 60,
    y: 25,
    w: 25,
    h: 25,
    r: 190,
    g: 0,
    b: 25
}

// object variables for circle
// let circle = {
//     x: 200,
//     y: 200,
//     r: 255,
//     g: 255,
//     b: 255,
// }

let radius = 50;
let ellipseAlpha = 25;

//counter variable
let counter = 0;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(0,0,0);

    //display ellipse loop
    if(counter >= 1 && counter <= 10){
        let i = 0; //tracks circles
        let currentRadius = radius; //sets current radius to initial radius
        let currentAlpha = ellipseAlpha; //sets current alpha to initial alpha

        while(i < counter){
            drawEllipse(width/2, height/2, currentRadius, currentAlpha, currentAlpha); //calls draw ellipse function
            currentAlpha += 15; //increases transparency
            currentRadius += 25; //increases radius
            i++; //increments i
        }
    }

    checkCollisionWithSquare(); //calls collision function
    displaySquare(); //calls square btn

}

/** 
* Functions for the square buttons. 
*/

function displaySquare() {
    push();
    noStroke();
    //square 1
    fill(btn1.r, btn1.g, btn1.b);
    rect(btn1.x, btn1.y, btn1.w, btn1.h);

    //square 2
    fill(btn2.r, btn2.g, btn2.b);
    rect(btn2.x, btn2.y, btn2.w, btn2.h);
    pop();
}

function mousePressed() {
    //check if mouse is clicking on the square
    if(mouseX > btn1.x && mouseX < btn1.x + btn1.w && mouseY > btn1.y && mouseY < btn1.y + btn1.h){
        counter ++;
        if (counter > 10) {
            counter = 10;
        }
    }

    if(mouseX > btn2.x && mouseX < btn2.x + btn2.w && mouseY > btn2.y && mouseY < btn2.y + btn2.h){
        counter --;
        if (counter < 0) {
            counter = 0;
        }
    }
}

function checkCollisionWithSquare() {
    let collision = false;
    
    //check if mouse is over square
    //change colour of rects when mouse move on X and Y axis
    if(mouseX > btn1.x && mouseX < btn1.x + btn1.w && mouseY > btn1.y && mouseY < btn1.y + btn1.h){
        btn1.r = 255;
        btn1.b = 0;
        collision = true;
    }
    else if(mouseX > btn1.x - btn1.w || mouseY > btn1.y - btn1.h){
        btn1.r = 190;
        btn1.b = 25;
        collision = false;
    }

    //change colour of rects when mouse move on X and Y axis
    if(mouseX > btn2.x && mouseX < btn2.x + btn2.w && mouseY > btn2.y && mouseY < btn2.y + btn2.h){
        btn2.r = 255;
        btn2.b = 0;
        collision = true;
    }
    else if(mouseX > btn2.x - btn2.w || mouseY > btn2.y - btn2.h){
        btn2.r = 190;
        btn2.b = 25;
        collision = false;
    }
    console.log(counter);
}


/**
 * Functions for the ellipse.
 */

function drawEllipse(x, y, r, a) {
    push();
    noStroke();
    fill(255, a);
    ellipse(x, y, r, r);
    pop();
}
