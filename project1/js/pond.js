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

    //LILYPADS 
    const lilyPads = [];
    const numLilypads = 25;
    const lilypadColour = [];

    //calls colours
    for (let i = 0; i < numLilypads / 2; i++) {
        lilypadColour.push("#1ba10f");
        lilypadColour.push("#116e08");
    }

    //calls lilypads
    for (let i = 0; i < numLilypads; i++) {
        const x = Math.random() * pondCanvas.width;
        const y = Math.random() * pondCanvas.height;
        const r = Math.random() * 40 + 20; 
        lilyPads.push(new LilyPad(pondContext, x, y, r, lilypadColour[i]));
    }    

    //FISHES
    const fish = [];
    const numFish = 10;

    for (let i = 0; i < numFish; i++) {
        fish.push(new Fish(pondContext, pondCanvas.width, pondCanvas.height));
    }

    function animate() {
        pondContext.clearRect(0, 0, pondCanvas.width, pondCanvas.height); // Clear entire canvas

        // Redraw water background
        pondContext.fillStyle = '#11b1e2';
        pondContext.fillRect(0, 0, pondCanvas.width, pondCanvas.height);

        //calls fishes
        fish.forEach(f => {
            f.update(pondCanvas.width, pondCanvas.height);
            f.drawFish();
        });

        lilyPads.forEach(pad => pad.draw()); //calls lilypads


        requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
}

window.createPond = createPond;