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

    //draws the lilypads
    draw() {
        const c = this.ctx;
        c.fillStyle = this.colour;
        c.beginPath();
        c.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        c.fill();
    }
}

class Fish {
    constructor(ctx, canvasWidth, canvasHeight) {
        this.ctx = ctx;
        this.x = Math.random() * canvasWidth;
        this.y = Math.random() * canvasHeight;
        this.size = Math.random() * 20 + 10;

        const colours = ["orange", "black", "white"]; //colour string
        this.colour = colours[Math.floor(Math.random() * colours.length)];

        // Random direction
        const angle = Math.random() * Math.PI * 2;
        this.speed = Math.random() * 2 + .5;
        this.vx = Math.cos(angle) * this.speed;
        this.vy = Math.sin(angle) * this.speed;
    }

    //updates the fish position/movement
    //reference: https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Bounce_off_the_walls
    update(canvasWidth, canvasHeight) {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off walls 
        if (this.x < this.size || this.x > canvasWidth - this.size) {
            this.vx *= -1;
        }
        if (this.y < this.size || this.y > canvasHeight - this.size) {
            this.vy *= -1;
        }
    }
    //handles fish change direction when clicked
    changeDirection() {
        this.vx *= -1;
        this.vy *= -1;
    }

    //changes the colour of the fish when clicked + changes the colour for the next click
    changeColour() {
        this.colour = generateRandomHexCode();
    }

    //makes the area around the fish clickable
    collision(mx, my) {
        const dx = mx - this.x ;
        const dy = my - this.y ;
        const clickableRadius = this.size + 30;

        return Math.sqrt(dx * dx + dy * dy) < clickableRadius;
    }   

    //draws the fishes
    drawFish() {
        const c = this.ctx;
        c.save();
        c.translate(this.x, this.y);

        const angle = Math.atan2(this.vy, this.vx);
        c.rotate(angle);

        // c.globalAlpha = .7;
        c.fillStyle = this.colour;
        c.beginPath();
        c.ellipse(0, 0, this.size, this.size * 0.6, 0, 0, Math.PI * 2);
        c.fill();
        c.restore();
    }
}

function random(min, max) {
    return Math.random() * (max - min) + min;
}

//from: https://dev.to/thecodepixi/what-the-hex-how-to-generate-random-hex-color-codes-in-javascript-21n
function generateRandomHexCode() {
    const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']

    let hexCode = "#"

    while (hexCode.length < 7) {
        hexCode += digits[Math.round(Math.random() * digits.length)]
    }

    return hexCode
}