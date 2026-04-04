/*
    FLOWER GARDEN ANIMATION
  
  by: reference Sabine's code from HTML_5_Canvas notes
*/

class Petal {
    constructor(ctx, xPos, yPos, radius, colours) {
        this.ctx = ctx;
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius; 
        this.colours = colours;
        this.startAngle = 0;
        this.endAngle = Math.PI * 2;
    }

    //draws the petals
    drawPetal(x, y, r, fillColor) {
        const c = this.ctx;
        c.fillStyle = fillColor;
        c.strokeStyle = fillColor;
        c.beginPath();
        c.arc(x, y, r, this.startAngle, this.endAngle, true);
        c.fill();
        c.lineWidth = 2;
        c.stroke();
        c.closePath();
    }

    //draws the flowers
    draw() {
        const { xPos, yPos, radius, colours } = this;
        this.drawPetal(xPos, yPos + 3 * radius / 2, radius, colours[0]);
        this.drawPetal(xPos, yPos - 3 * radius / 2, radius, colours[0]);
        this.drawPetal(xPos - 3 * radius / 2, yPos, radius, colours[0]);
        this.drawPetal(xPos + 3 * radius / 2, yPos, radius, colours[0]);
        this.drawPetal(xPos, yPos, radius, colours[1]);
    }

    //changes the colour of the flowers
    changeColor() {
        const newCol = this.colours;
        const newPetalCol = this.colours;

        while(newPetalCol === this.colours[0]) {
            newPetalCol = generateRandomHexCode();
        }
        while(newCol === this.colours[1]) {
            newCol = generateRandomHexCode();
        }

        this.colours[0] = generateRandomHexCode();
        this.colours[1] = generateRandomHexCode();
    }

    //calls the flowers
    static createFlower(ctx, xPos, yPos, radius, colours) {
        const f = new Petal(ctx, xPos, yPos, radius, colours);
        f.draw();
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