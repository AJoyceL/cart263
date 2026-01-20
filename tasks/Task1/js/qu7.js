"use strict";

/**
 * variabbles
 */
let circlegrid = {
    x: 0,
    d: 50,
    r: 255,
    g: 255,
    b: 255,
}

let squaresgrid = false;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(0,0,0);
    
    let d = circlegrid.d; //diameter for the circles and grid size

    for(let i = 0; i<10; i++){
        const x = d * i + 25;

        for(let j = 0; j<10; j++){
            const y = d * j + 25;   
            fill(circlegrid.r, circlegrid.g, circlegrid.b);
            if(squaresgrid){
                const x = d *i;
                const y = d *j;
                rect(x, y, circlegrid.d, circlegrid.d);
            } else {
                ellipse(x, y, circlegrid.d, circlegrid.d);
            }
        }
    }    
}

function keyPressed(){
    if(key === ' '){
        circlegrid.r = random(0,255);
        circlegrid.g = random(0,255);
        circlegrid.b = random(0,255);
    }   
}

function mousePressed(){
    if(mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height){
        squaresgrid = !squaresgrid;
    }
}