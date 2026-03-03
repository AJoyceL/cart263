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

    draw() {
        const { xPos, yPos, radius, colours } = this;
        this.drawPetal(xPos, yPos + 3 * radius / 2, radius, colours[0]);
        this.drawPetal(xPos, yPos - 3 * radius / 2, radius, colours[0]);
        this.drawPetal(xPos - 3 * radius / 2, yPos, radius, colours[0]);
        this.drawPetal(xPos + 3 * radius / 2, yPos, radius, colours[0]);
        this.drawPetal(xPos, yPos, radius, colours[1]);
    }

    static createFlower(ctx, xPos, yPos, radius, colours) {
        const f = new Petal(ctx, xPos, yPos, radius, colours);
        f.draw();
    }
}

if (typeof window !== 'undefined') {
    window.Petal = Petal;
}