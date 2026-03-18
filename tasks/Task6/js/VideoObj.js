class VideoObj {
  constructor(x, y, w, h, videoElement, context) {
    this.videoElement = videoElement;
    this.context = context;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.shapeX = 10;
    this.shapeY =10;
    this.shapeCol = "#000000";
 
    //blur effect
    let filterButton_blur = document.getElementById("filter_button_blur");
    let blurInput = document.getElementById("blurnum");
    this.userProvidedBlur  = 0;
    let self = this;

    filterButton_blur.addEventListener("click", function () {
      //get value from input field
      self.userProvidedBlur = blurInput.value;
      console.log(self.userProvidedBlur);
    });

    //hue effect
    let filterButton_hue  = document.getElementById("filter_button_hue");
    let hueInput = document.getElementById("huenum");  
    this.userProvidedDeg = 0;

    filterButton_hue.addEventListener("click", function () {
    //get value from input field
      self.userProvidedDeg = hueInput.value;
      console.log(self.userProvidedDeg)
    });
  }

  display() {
    this.context.save();
    this.context.filter = `blur(${this.userProvidedBlur}px)`; //blur filter
    this.context.filter += `hue-rotate(${this.userProvidedDeg}deg)`; //hue rotate filter
    this.context.drawImage(this.videoElement, this.x, this.y, this.w, this.h);
    this.context.fillStyle = this.shapeCol;
    this.context.fillRect(this.shapeX, this.shapeY, 50,50)
    this.context.restore();
  }

    //called when rectangle color is to be updated
  changeColor(newCol){
   /** FILL IN */
  }
  //called when rectangle Pos is to be updated
  updatePositionRect(mx,my){
     /** FILL IN */
  }
  update(videoElement) {
    this.videoElement = videoElement;
  }
}
