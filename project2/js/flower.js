function createFlower(container) {
    if (!container || !(container)) return;

    const flowerCanvas = document.createElement('canvas');
    flowerCanvas.id = 'flowerCanvas';
    // cover the whole viewport as a background layer
    function flowerSizeCanvas() {
        flowerCanvas.width = window.innerWidth;
        flowerCanvas.height = window.innerHeight;
        flowerCanvas.style.width = window.innerWidth + 'px';
        flowerCanvas.style.height = window.innerHeight + 'px';
    }

    flowerSizeCanvas();
    flowerCanvas.style.position = 'fixed';
    flowerCanvas.style.left = '0';
    flowerCanvas.style.top = '0';
    flowerCanvas.style.pointerEvents = 'auto';
    flowerCanvas.style.backgroundColor = '#2dceff';
    document.body.appendChild(flowerCanvas);

    // ensure the page content sits above the canvas
    document.body.style.position = document.body.style.position || 'relative';

    const flowerContext = flowerCanvas.getContext('2d');
    
    //draws the sun
    function drawSun() {
        flowerContext.beginPath();
        flowerContext.ellipse(100, 100, 200, 200, 0, 0, Math.PI * 2);
        flowerContext.fillStyle = '#ffe228';
        flowerContext.fill();
        flowerContext.closePath();


    }

    //draws the grass
    function drawGrass() {
        flowerContext.fillStyle = "#1ba10f";
        flowerContext.fillRect(0, innerHeight / 2, innerWidth, innerHeight / 2);
    }

    //draws the garden
    function createGarden() {
        drawGrass();
        drawSun();
    }

    // build a fixed set of flowers on the grass
    const flowers = [];
    const numFlowers = 25;
    const petalCols = ["#ffffff", "#ffd900"]; 

    for (let i = 0; i < numFlowers; i++) {
        const x = Math.random() * flowerCanvas.width;
        const y = flowerCanvas.height / 2 + Math.random() * (flowerCanvas.height / 2);
        const r = Math.random() * 20 + 5; 
        flowers.push(new Petal(flowerContext, x, y, r, [...petalCols]));
    }

    //handles flower change when clicked
    flowerCanvas.addEventListener("click", function(event) {
        const mx = event.clientX;
        const my = event.clientY;

        for (let f of flowers) {
            const dx = mx - f.xPos;
            const dy = my - f.yPos;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < f.radius * 2) {
                f.changeColor();
                break;
            }
        }
    });
    
    //renders everyhting
    function flowerAnimate() {
        createGarden(); //calls the garden

        flowers.forEach(f => f.draw());// calls the flowers

        requestAnimationFrame(flowerAnimate);
    }

    flowerAnimate();
}

window.createFlower = createFlower;