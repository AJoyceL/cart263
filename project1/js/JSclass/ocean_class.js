/*
  OCEAN WAVE ANIMATION
  
  by: reference https://youtu.be/LLfhY4eVwDY?si=1RROuFFVRUxol5FM
*/

// Point class represents a single point in the wave
class Point {
    constructor(index, x, y) {
        this.x = x;
        this.y = y;
        this.fixedY = y;
        this.speed = 0.02;
        this.cur = index;
        this.max = Math.random() * 100 + 100;
    }

    update() {
        this.cur += this.speed;
        this.y = this.fixedY + Math.sin(this.cur) * this.max;
    }
}

// Wave class represents a single wave, which consists of multiple points
class Wave {
    constructor(index, totalPoints, color) {
        this.index = index;
        this.totalPoints = totalPoints;
        this.color = color;
        this.points = [];
    }

    resize(stageWidth, stageHeight) {
        this.stageWidth = stageWidth;
        this.stageHeight = stageHeight;
        
        this.centerX = stageWidth / 2;
        this.centerY = stageHeight / 2;

        this.pointGap = this.stageWidth / (this.totalPoints - 1);

        this.init();
    }

    init(){
        // this.points = new Point(
        //     this.centerX, 
        //     this.centerY
        // );
        this.points = [];
        for(let i = 0; i < this.totalPoints; i++) {
            const point = new Point(
                this.index + 1,
                this.pointGap * i,
                this.centerY,    
            );
            this.points[i] = point;
        }
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = this.color;

        let prevX = this.points[0].x;
        let prevY = this.points[0].y;

        ctx.moveTo(prevX, prevY);

        for(let i = 1; i < this.totalPoints; i++) {
            if(i < this.points.length - 1) {
                this.points[i].update();    
            }

            const cx = (prevX + this.points[i].x) / 2;
            const cy = (prevY + this.points[i].y) / 2;

            ctx.quadraticCurveTo(prevX, prevY, cx, cy);
            prevX = this.points[i].x;
            prevY = this.points[i].y;
        }    
        ctx.lineTo(prevX, prevY);
        ctx.lineTo(this.stageWidth, this.stageHeight);
        ctx.lineTo(this.points[0].x, this.stageHeight);
        ctx.fill();
        ctx.closePath();
    }
}

// WaveGroup class represents a group of waves, which consists of multiple Wave instances
class WaveGroup {
    constructor() {
        this.totalWaves = 3;
        this.totalPoints = 4;
        this.waves = [];
        this.color = ["#003c72", "#1061b0", "#3585da"];

        for(let i = 0; i < this.totalWaves; i++) {
            const wave = new Wave(
                i,
                this.totalPoints,
                this.color[i]
            );
            this.waves[i] = wave;
        }
    }

    resize(stageWidth, stageHeight) {
        for(let i = 0; i < this.totalWaves; i++) {
            const wave = this.waves[i];
            wave.resize(stageWidth, stageHeight);
        }
    }

    draw(ctx) {
        for(let i = 0; i < this.totalWaves; i++) {
            const wave = this.waves[i];
            wave.draw(ctx);
        }
    }    
}