"use strict";

/**
 * Create rects with different sizes and colors.
 */

//var1ables for rect 1
let btn1 = {
    x: 25,
    y: 25,
    w: 25,
    h: 25,
    r: 200,
    g: 0,
    b: 0
}

let btn2 = {
    x: 50,
    y: 25,
    w: 25,
    h: 25,
    r: 200,
    g: 0,
    b: 0
}


//variables for rect 2
let x2 = 50;
let y2 = 50;
let w2 = 35;
let h2 = 35;
let r2 = 0;
let g2 = 200;
let b2 = 0;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(0,0,0);

    //draw rects
    noStroke();
    fill(r2, g2, b2);
    rect(x2, y2, w2, h2);

    fill(r1, g1, b1);
    rect(x1, y1, w1, h1);
}
