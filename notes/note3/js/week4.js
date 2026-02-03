window.onload = setup;
function setup() {
  console.log("in week 4 ;)")


  //set a time out
  // document.querySelector("#boxA"),addEventListener("click", runTimeOut); //calls for the boxA to become a btn
  // function runTimeOut() { //calls for the act
  //   window.setTimeout(addTimeoutText,2000); //2000 millie = 2sec
  // }

  window.setTimeout(addTimeoutText,2000); //2000 millie = 2sec
  function addTimeoutText(){
    let parent = document.getElementById("parent");
    parent.innerHTML+=" NEW TEXT TO APPEAR ";
  }
  
  window.setInterval(addTextRecur,2000);
    function addTextRecur(){ 
    let parent = document.getElementById("parent");
        parent.innerHTML+=" NEW TEXT TO APPEAR RECUR ";
  }

}
