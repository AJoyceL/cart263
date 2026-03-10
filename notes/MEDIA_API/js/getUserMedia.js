window.onload = getLiveVideo;

async function getLiveVideo() {
  console.log("loaded");
  let video = document.getElementById("video");
  console.log(video.srcObject);

  //this accesses the webcam, but can also access anything that is not localised within the website.
  try {
    let stream = await navigator.mediaDevices.getUserMedia({
      video: {
        width: 320,
        height: 240,
      },
    });
    video.srcObject = stream;
    console.log(video.srcObject) //here there is something
  } catch (err) { //err = error
    /* handle the error */
    console.log("had an error getting the camera");
  }
}
