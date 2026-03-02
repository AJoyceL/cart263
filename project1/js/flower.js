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
    flowerCanvas.style.pointerEvents = 'none';
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
    
    function createGarden() {
        drawGrass();
        drawSun();
    }

    // Animation loop
    function flowerAnimate() {

        createGarden();
        requestAnimationFrame(flowerAnimate);
    }
    
    flowerAnimate();
}

window.createFlower = createFlower;