/*
 * createOcean(container)
 * Appends an ocean canvas inside the provided container element.
 */

function createPond(container) {
    if (!container || !(container)) return;

    // avoid creating multiple canvases
    if (document.querySelector('#pondCanvas')) return;

    const pondCanvas = document.createElement('canvas');
    pondCanvas.id = 'pondCanvas';
    // cover the whole viewport as a background layer
    function oceanSizeCanvas() {
        pondCanvas.width = window.innerWidth;
        pondCanvas.height = window.innerHeight;
        pondCanvas.style.width = window.innerWidth + 'px';
        pondCanvas.style.height = window.innerHeight + 'px';
    }

    oceanSizeCanvas();
    pondCanvas.style.position = 'fixed';
    pondCanvas.style.left = '0';
    pondCanvas.style.top = '0';
    pondCanvas.style.pointerEvents = 'none';
    pondCanvas.style.backgroundColor = '#11b1e2';
    document.body.appendChild(pondCanvas);

    // ensure the page content sits above the canvas
    document.body.style.position = document.body.style.position || 'relative';

    const pondContext = pondCanvas.getContext('2d');


    function animate() {
        // pondContext.clearRect(0, 0, pondCanvas.width, pondCanvas.height);
        // // redraw background under the waves
        // pondContext.fillStyle = '#11b1e2';
        // pondContext.fillRect(0, 0, pondCanvas.width, pondCanvas.height);

        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
}

window.createPond = createPond;