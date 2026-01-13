"use strict";

    /**
     * Create ellipses with different sizes and colors.
     */
    //var1ables for ellipse 1
    let x1 = 25;
    let y1 = 25;
    let w1 = 25;
    let h1 = 25;
    let r1 = 200;
    let g1 = 0;
    let b1 = 0;

    //variables for ellipse 2
    let x2 = 50;
    let y2 = 50;
    let w2 = 35;
    let h2 = 35;
    let r2 = 0;
    let g2 = 200;
    let b2 = 0;

    //variables for ellipse 3
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

    //draw ellipses
    noStroke();
    fill(r1, g1, b1);
    ellipse(x1, y1, w1, h1);

    fill(r2, g2, b2);
    ellipse(x2, y2, w2, h2);

    fill(r3, g3, b3);
    ellipse(x3, y3, w3, h3);
}