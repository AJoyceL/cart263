"use strict";

function setup() {
    console.log("go")

}

function draw() {
    createCanvas(400, 400);
    background(0,0,0);

    /**
     * Create ellipses with different sizes and colors.
     */
    //var1ables for ellipse 1
    let x1 = 25;
    let y1 = 25;
    let w1 = 25;
    let h1 = 25;

    //variables for ellipse 2
    let x2 = 50;
    let y2 = 50;
    let w2 = 35;
    let h2 = 35;

    //variables for ellipse 3
    let x3 = 85;
    let y3 = 85;
    let w3 = 50;
    let h3 = 50;

    //draw ellipses
    noStroke();
    fill(255, 0, 0);
    ellipse(x1, y1, w1, h1);

    fill(0, 255, 0);
    ellipse(x2, y2, w2, h2);

    fill(0, 0, 255);
    ellipse(x3, y3, w3, h3);


    // ellipse(10, 10, 50, 50);
    // ellipse(50, 50, 75, 75);
    // ellipse(75, 75, 100, 100);
}