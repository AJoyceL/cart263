
window.onload = function(){
    console.log("keys");

    let speedX = 5;
    let boxA = this.document.querySelector("#boxA");


    window.addEventListener("keydown", 

    function(e){
        // console.log(e);
        // console.log(this);

        if(e.keycode === "ArrowRight"){
            // console.log(parsInt(boxA.style.left));
            let currentPos = (parsInt(boxA.style.left));
            boxA.style.left = currentPos + speedX + "px";
        }

    });
}
