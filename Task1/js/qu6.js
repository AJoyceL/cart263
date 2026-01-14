"use strict";

/**
 * variabbles
 */
const test = "test";

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(0,0,0);
    

    let d = 20;
    for(let i = 0; i<10; i++){
        const x = d * i + 20;
        let y = 20;

        fill(255);
        textSize(16);
        text(i, x, y);
    }

    for(let j = 0; j<16; j++){
        const y = d * j + 20;
        let x = 20; 

        fill(255);
        textSize(16);
        text(j, x, y);
    }    

    // fill(255);
    // textSize(28);
    // text(test, 200, 200);
}


//Ask emile what the text is supposed to do, confused