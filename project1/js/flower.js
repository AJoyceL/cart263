function createFlower(container) {
    if (!container || !(container)) return;

    // Remove old flower canvas if it exists
    const existingFlower = document.querySelector('#flowerCanvas');
    if (existingFlower) {
        existingFlower.remove();
    }

    const canvas = document.createElement('canvas');
    canvas.id = 'flowerCanvas';
    // cover the whole viewport as a background layer
    function flowerSizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.style.width = window.innerWidth + 'px';
        canvas.style.height = window.innerHeight + 'px';
    }

    flowerSizeCanvas();
    canvas.style.position = 'fixed';
    canvas.style.left = '0';
    canvas.style.top = '0';
    canvas.style.zIndex = '-1';
    canvas.style.pointerEvents = 'none';
    canvas.style.backgroundColor = '#2eceff';
    document.body.appendChild(canvas);

    // ensure the page content sits above the canvas
    document.body.style.position = document.body.style.position || 'relative';

    const context = canvas.getContext('2d');
    context.fillStyle = '#2628be';
    context.fillRect(0, 0, canvas.width, canvas.height);

    // handle window resize
    function onResize() {
        flowerSizeCanvas();
        context.fillStyle = '#2eceff';
        context.fillRect(0, 0, canvas.width, canvas.height);    
    }
    window.addEventListener('resize', onResize);
}

window.createFlower = createFlower;