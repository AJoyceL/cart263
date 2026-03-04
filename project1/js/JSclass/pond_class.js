/*
    FISH POND ANIMATION
  

*/

class LilyPad{
    constructor(ctx, x, y, r, colour) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.r = r ;
        this.colour = colour;
    }

    draw() {
        const c = this.ctx;
        c.fillStyle = this.colour;
        c.beginPath();
        c.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        c.fill();
    }
}

function random(min, max) {
    return Math.random() * (max - min) + min;
}
