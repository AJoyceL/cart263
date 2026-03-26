/*
 * createOcean(container)
 * Appends an ocean canvas inside the provided container element.
 */

function createOcean(container) {
    if (!container || !(container)) return;

    // avoid creating multiple canvases
    if (document.querySelector('#oceanCanvas')) return;

    const oceanCanvas = document.createElement('canvas');
    oceanCanvas.id = 'oceanCanvas';
    // cover the whole viewport as a background layer
    function oceanSizeCanvas() {
        oceanCanvas.width = window.innerWidth;
        oceanCanvas.height = window.innerHeight;
        oceanCanvas.style.width = window.innerWidth + 'px';
        oceanCanvas.style.height = window.innerHeight + 'px';
    }

    oceanSizeCanvas();
    oceanCanvas.style.position = 'fixed';
    oceanCanvas.style.left = '0';
    oceanCanvas.style.top = '0';
    oceanCanvas.style.pointerEvents = 'none';
    oceanCanvas.style.backgroundColor = '#2eceff';
    document.body.appendChild(oceanCanvas);

    // ensure the page content sits above the canvas
    document.body.style.position = document.body.style.position || 'relative';

    const oceanContext = oceanCanvas.getContext('2d');
    oceanContext.fillStyle = '#2628be';
    oceanContext.fillRect(0, 0, oceanCanvas.width, oceanCanvas.height);

    // initialize WaveGroup
    const waveGroup = new WaveGroup();
    function resizeWaves() {
        waveGroup.resize(oceanCanvas.width, oceanCanvas.height);
    }
    resizeWaves();

    function animate() {
        oceanContext.clearRect(0, 0, oceanCanvas.width, oceanCanvas.height);
        // redraw background under the waves
        oceanContext.fillStyle = '#2eceff';
        oceanContext.fillRect(0, 0, oceanCanvas.width, oceanCanvas.height);

        //draw the sun 
        oceanContext.beginPath();
        oceanContext.ellipse(100, 100, 75, 75, 0, 0, Math.PI * 2);
        oceanContext.fillStyle = '#ffdd00';
        oceanContext.fill();
        oceanContext.closePath();

        // draw the waves
        waveGroup.draw(oceanContext);
        requestAnimationFrame(animate);
    }

    // handle window resize so canvas stays full-screen
    function onResize() {
        oceanSizeCanvas();
        resizeWaves();
        // redraw immediately
        oceanContext.fillStyle = '#2eceff';
        oceanContext.fillRect(0, 0, oceanCanvas.width, oceanCanvas.height);
    }
    window.addEventListener('resize', onResize);

    requestAnimationFrame(animate);
}

window.createOcean = createOcean;