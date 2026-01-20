
window.onload = setup
function setup(){
    //*check elements in the console*/

    // console.log(document.getElementById("one"));
    // console.log(document.querySelector("#one"));

    // console.log(document.getElementsByTagName("div"));

    // let allDivs = document.getElementsByTagName("div");
    // console.log(allDivs.length);
    // // console.log(document.getElementsByTagName("div").length);
    // // console.log(document.getElementsByTagName("div")[0]);
  
    // console.log(document.querySelectorAll("div"));

    // console.log(document.getElementsByClassName(".square_shape"));
    // console.log(document.querySelectorAll(".square_shape"));
    // console.log("running setup");




    // //modifying elements
    console.log(document.querySelectorAll("span")[0].parentElement)
    console.log(document.querySelector(".wrapper_flex_box").children)
    document.querySelector("#two").children[0].innerHTML = "<h2> this is now a header</h2>";

    //how to apply the change to all children if you haev multiple

    // let childrenOfTwo = document.getElementById("two").children;
    // for(let i = 0; i < childrenOfTwo.length; i++){
    //     childrenOfTwo[i].innerHTML = "<h2>changed from JS</h2>";
    // }

    



// //get the group
// let allSquareShapes = document.querySelectorAll(".square_shape");
// //go through each element
// for(let  singleSquareShape of allSquareShapes){
//     //get children
//    console.log(singleSquareShape.children[0])
//    singleSquareShape.children[0].textContent+="adding content"
// }


// //get the group
// let allSquareShapes = document.querySelectorAll(".square_shape");
// //go through each element
// for(let  singleSquareShape of allSquareShapes){
//     //get children
//     if(singleSquareShape.querySelector("p span")!== null){
//     singleSquareShape.querySelector("p span").textContent+= " other Content"
//     }
// }





  //new element
let newDiv = document.createElement("div");
newDiv.classList.add("square_shape");
newDiv.innerHTML = " NEW ELEMENT ";
newDiv.style.backgroundColor = "purple";
// access parent element
let parentElement = document.querySelector(".wrapper_flex_box")
parentElement.appendChild(newDiv)


let newDivTwo = document.createElement("div");
newDivTwo.classList.add("square_shape");
newDivTwo.innerHTML = " NEW ELEMENT TWO ";
newDivTwo.style.backgroundColor = "yellow";
newDivTwo.querySelector("p").style.color = "black"
// access parent element
// let sibling = document.querySelector("#three")
// let parentElementAgain = document.querySelector(".wrapper_flex_box")
// parentElementAgain.insertBefore(newDivTwo,sibling);

let parentElementToRemoveFrom = document.querySelector(".wrapper_flex_box")
let toRemove = document.getElementById("six");
parentElementToRemoveFrom.removeChild(toRemove);


}

