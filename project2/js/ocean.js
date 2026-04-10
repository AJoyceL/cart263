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

    //bird
    const bird = new birds();
    bird.init(oceanCanvas.width, oceanCanvas.height);

    //skyvalue
    let sky = `rgb(46, 206, 255)`; 

    //night value
    let nightTime = 0; //0 = day, 1 = night
    let nightSpeed = 0.0005; //speed of time
    let nightDirection = 1; // makes it darker or lighter


  //handles night and day cycle
    function nightCycle() {
        //night time
        nightTime += nightSpeed * nightDirection;
    
        //handles night and day cycle
        if(nightTime >= .9) {
            nightDirection = -1;
        }
        if(nightTime <= 0) {
            nightDirection = 1;
        }

        //colour overlay that gets stronger over time
        let r = Math.floor(46 + (5 - 46) * nightTime);
        let g = Math.floor(206 + (10 - 206) * nightTime);
        let b = Math.floor(255 + (60 - 255) * nightTime);
        sky = `rgb(${r}, ${g}, ${b})`;  

        // console.log(nightTime,);
    }

    //calls star to appear when night falls
    const starrySky = new stars();
    starrySky.init(oceanCanvas.width, oceanCanvas.height);

    resizeWaves();

    function animate() {
        nightCycle();

        oceanContext.clearRect(0, 0, oceanCanvas.width, oceanCanvas.height);
        // redraw background under the waves
        oceanContext.fillStyle = sky;
        oceanContext.fillRect(0, 0, oceanCanvas.width, oceanCanvas.height);

        //handles night and day cycle
        const fade = 0.5 * nightTime; //fade value
        oceanContext.fillStyle = `rgba(0, 0, 0, ${fade})`;
        oceanContext.fillRect(0, 0, oceanCanvas.width, oceanCanvas.height);

        // draw the waves
        waveGroup.draw(oceanContext);

        // draw stars if night time
        if (nightTime > 0.5) {
            starrySky.draw(oceanContext, nightTime);
        }

        // update and draw birds
        bird.update(oceanCanvas.width, oceanCanvas.height);
        bird.draw(oceanContext);

        requestAnimationFrame(animate);
    }

    // handle window resize so canvas stays full-screen
    function onResize() {
        //handles waves
        oceanSizeCanvas();
        resizeWaves();
        
        //handles stars
        starrySky.init(oceanCanvas.width, oceanCanvas.height);

        //handles birds
        bird.init(oceanCanvas.width, oceanCanvas.height);

        nightCycle();
        // redraw sky immediately
        oceanContext.fillStyle = sky;
        oceanContext.fillRect(0, 0, oceanCanvas.width, oceanCanvas.height);
    }
    window.addEventListener('resize', onResize);

    requestAnimationFrame(animate);
}

window.createOcean = createOcean;