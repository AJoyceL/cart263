/*
 * createOcean(container)
 * Appends an ocean canvas inside the provided container element.
 */

function createOcean(container) {
    if (!container || !(container)) return;

    // avoid creating multiple canvases
    if (document.querySelector('#oceanCanvas')) return;

    const canvas = document.createElement('canvas');
    canvas.id = 'oceanCanvas';
    // cover the whole viewport as a background layer
    function oceanSizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        canvas.style.width = window.innerWidth + 'px';
        canvas.style.height = window.innerHeight + 'px';
    }

    oceanSizeCanvas();
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

    // initialize WaveGroup
    const waveGroup = new WaveGroup();
    function resizeWaves() {
        waveGroup.resize(canvas.width, canvas.height);
    }
    resizeWaves();

    function animate() {
        context.clearRect(0, 0, canvas.width, canvas.height);
        // redraw background under the waves
        context.fillStyle = '#2eceff';
        context.fillRect(0, 0, canvas.width, canvas.height);

        //draw the sun 
        context.beginPath();
        context.ellipse(100, 100, 75, 75, 0, 0, Math.PI * 2);
        context.fillStyle = '#ffdd00';
        context.fill();
        context.closePath();

        // draw the waves
        waveGroup.draw(context);
        requestAnimationFrame(animate);
    }

    // handle window resize so canvas stays full-screen
    function onResize() {
        oceanSizeCanvas();
        resizeWaves();
        // redraw immediately
        context.fillStyle = '#2eceff';
        context.fillRect(0, 0, canvas.width, canvas.height);
    }
    window.addEventListener('resize', onResize);

    requestAnimationFrame(animate);
}

window.createOcean = createOcean;