window.onload = setup;

/** function setup */
function setup(){
console.log("we are a go!")

/*** ALL ANWSERS TO BE ADDED IN THE ALLOCATED SPACE */
/*** START PART ONE ACCESS */ 
/* 1: all paragraph elements */
/***CODE */
// console.log(document.getElementsByTagName("p"));

/***OUTPUT: 
 *  [p#1, p#2.img-descript, p#3.img-descript, p#4.img-descript, p#5.img-descript, p#6.img-descript, p#7.img-descript, p#8.img-descript, p#9.img-descript]
 */


/*************************************** */
/* 2: only the first paragraph element */
/***CODE */
// console.log(document.getElementById("1"));

/***OUTPUT: 
 * <p id="1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias perspiciatis blanditiis, et
        laborum praesentium earum. Enim facere, quia commodi voluptate, quis asperiores, pariatur ducimus
        officiis non
        quasi officia sit veniam!
    </p>
 */


/*************************************** */
/* 3: all elements with the class inner-container */
/***CODE */
// console.log(document.querySelectorAll(".inner-container"));

/***OUTPUT: 
 * [div.inner-container, div.inner-container, div.inner-container, div.inner-container, div.inner-container, div.inner-container, div.inner-container, div.inner-container]
 */


/*************************************** */
/* 4: the last image element inside the element that has the class img-container */
/***CODE */
// let imgContainers = document.querySelectorAll(".img-container");
// let lastImgInContainer = imgContainers[imgContainers.length - 1].querySelectorAll("img");
// console.log(lastImgInContainer[lastImgInContainer.length - 1]);

/***OUTPUT: 
 * <img class="img-image" src="task-2-images/seventeen.png"></img>
 */


/*************************************** */
/* 5A: all h2 elements */
/* 5B: length of the list in 5A */
/* 5C: the text content of the first element in the list from 5A */
/***CODE */
// console.log(document.querySelectorAll("h2"));
// console.log(document.querySelectorAll("h2").length);
// console.log(document.querySelectorAll("h2")[0].textContent);

/***OUTPUT: 
 * NodeList [h2]
    0: h2
    length: 1
[[Prototype]]: NodeList
    * b:1
    * c:The header of this fancy page
    */



/*************************************** */
/* 6: the element with id name parent */
/***CODE */
// console.log(document.getElementById("parent"));

/***OUTPUT: 
<section id="parent">
    <div class="inner-container"></div>
    <div class="inner-container">
    <div class="inner-container">
    <div class="inner-container">
    <div class="inner-container"></div>
    <div class="inner-container">
    <div class="inner-container"></div>
    <div class="inner-container"></div>
</section>
 */

/*************************************** */
/*** END PART ONE ACCESS */ 


/*************************************** */
/*** START PART TWO MODIFY */ 
/*************************************** */

//Part 2 visual output:
//let screenshot1 = document.createElement("img");
//screenshot1.src = "task-2-images/part2.1.png";


/* 1: Select the first paragraph and replace the text within the paragraph... */
/***CODE */
// let firstParagraph = document.querySelectorAll("p")[0];
// firstParagraph.innerHTML = "<h2>TEST 123</h2>";

/***OUTPUT: 
 * <p><h2>TEST 123</h2></p>
 */


/*************************************** */
/* 2: Select all elements in the HTML that have the class name content-container
 and change the background color ... of first and second ...*/
/***CODE */
// let contentContainers = document.querySelectorAll(".content-container");
// contentContainers[0].style.backgroundColor = "orange";
// contentContainers[1].style.backgroundColor = "purple";

/***OUTPUT: 
 * N/A - VISUAL OUTPUT
 */



/*************************************** */
/* 3: Change the src element of the first image element on the page to be ...
/***CODE */
// let firstImage = document.querySelectorAll("img")[0];
// firstImage.src = "task-2-images/seven.png";

/***OUTPUT: 
 * N/A - VISUAL OUTPUT
 */



/*************************************** */
/* 4: Select the third paragraph element on the page and 
replace the content (within the paragraph) to be an h2 element which contains the text `TEST 123`
/***CODE */
//document.querySelectorAll("p")[2].innerHTML = "<h2> TEST 123 </h2>"



/*************************************** */
/* 5: Select the fourth paragraph element on the page and 
add to the existing content an h2 element containing the text `TEST 123`
/***CODE */
// document.querySelectorAll("p")[3].innerHTML += "<h2> TEST 123 </H2>"



/*************************************** */
/* 6: Select the fifth paragraph element on the page and add to the existing content 
an img element that holds `one.png`, and add the class newStyle to said paragraph element.
/***CODE */
// let fifthParagraph = document.querySelectorAll("p")[4];
// fifthParagraph.innerHTML += '<img src="task-2-images/one.png" />';
// fifthParagraph.classList.add("newStyle");



/*************************************** */
/* 7: Add the following array variable: let colors = ['red','blue','green','orange'];, 
then access all elements with class name inner-container and save to a variable called `innerContainers`. 
Next, iterate over the colors array, and for each color: 
assign the element from innerContainers variable with the same index 
(i.e. colors[0] should be allocated to the first innerContainers element, colors[1] to the second, etc ...) 
a background using that color.
/***CODE */
// let colors = ['red','blue','green','orange'];
// let innerContainer = document.querySelectorAll(".inner-container");
// for (let i = 0; i < colors.length; i++) {
//     innerContainer[i].style.backgroundColor = colors[i];
// }



/*************************************** */
/*** END PART TWO MODIFY */ 


/*************************************** */
/*** START PART THREE CREATE */ 
/*************************************** */

//part 3 visual output:
//Q1:
//let screenshot2 = document.createElement("img");
//screenshot2.src = "task-2-images/part3.1.png";
//Q2:
//let screenshot3 = document.createElement("img");
//screenshot3.src = "task-2-images/part3.2.png";



/* 1: NEW PARAGRAPHS */
/* 1A: Access all paragraph elements, and store the result in a variable called: allPTagsThree */
/* 1B: Create a function:function customCreateElement(parent){ //body } */
/* 1C:  In the body of customCreateElement create a new parargraph element*/
/* 1D:  Set the text of this element to be : `using create Element`*/
/* 1E:  Set the background of this paragraph element to be green */
/* 1F:  Set the color of the text in this paragraph element to be white */
/* 1G: Append this new element to the parent variable within the function. */
/* 1H: Iterate through the allPTagsThree array and call customCreateElement(), 
passing the current allPTagsThree element as the parent with each iteration.*/
/***CODE */
// let allPTagsThree = document.querySelectorAll("p");

// function customCreateElement(parent){
//     let newParagraph = document.createElement("p");
//     newParagraph.textContent = "using create element";
//     newParagraph.style.background = "green";
//     newParagraph.style.color = "white";
//     parent.appendChild(newParagraph);
// }

// for (let i = 0; i < allPTagsThree.length; i++) {
//     customCreateElement(allPTagsThree[i]);
// }

/***EXPLANATION:
 * I created a function that creates a new paragraph element, sets its text and styles, and appends it to the parent element.
 * I then iterated through all paragraph elements on the page, calling the function for each to add the new paragraph with a for loop().
 * 
 */



/*************************************** */
/* 2: GRID OF BOXES */
/* 2A: Create another new function: function customNewBoxCreate(parent){ //body }*/
/* 2B: In the body of customNewBoxCreate create a new div element, that has the class testDiv. 
/* 2C:Then append this new element to the parent variable within the function. 
/* 2D:Finally, return</code> this new element */
/* 2E:Create a nested for loop (for rows and columns) to iterate through 10 columns and 10 rows (just like the JS Review :)). 
    Call the customNewBoxCreate function, in order to generate a new div -> representing each cell in the grid. 
    Ensure that the parent element for each of these new divs is the element whose id is named `new-grid`*/
/* 2F: You will see at this point that the x,y position of the resulting divs makes no sense... 
    Fix this by doing the following: every time you call customNewBoxCreate() - save the current returned element 
    in a variable i.e. returnedDiv. 
    Set the style (left and top) to the of this element to 
    the necessary x and y position (use the counter variables in the for nested for loop to 
    calculate the new positions.
/* 2G: BONUS I: Make every div in the resulting grid in an even numbered row have white background 
    and otherwise let it have a background of purple.</li>
/* 2H: BONUS II: For every div in an even numbered row make it contain the text `EVEN`, 
    otherwise lat it have the content `ODD`.*/

/***CODE */
// let colour = "purple";
// let text = "ODD";

// for(let i = 0; i < 10; i++){
//     let top = i * 40 + "px";

//     for(let j = 0; j < 10; j++){
//         let box = customNewBoxCreate(document.querySelector("#new-grid"));
//         box.style.left = j * 40 + "px";
//         box.style.top = top;
//         box.style.background = colour;
//         box.textContent = text;
//     }

//     if(colour === "purple"){
//         colour = "white";
//         text = "EVEN";
//     } else {
//         colour = "purple";
//         text = "ODD";
//     }
// }

// function customNewBoxCreate(parent){
//     let newDiv = document.createElement("div");
//     newDiv.classList.add("testDiv");
//     parent.appendChild(newDiv);
//     return newDiv;
// }


/***EXPLANATION:
 * I created a function that creates a new div element with the class "testDiv", appends it to the parent element, and returns the new div.
 * I then used a nested for loop to create a 10x10 grid of divs, calculating their positions based on the loop counters.
 * I also implemented the bonus features by alternating the background color and text content based on the row number.
 */

/*************************************** */
/* 3: GRID OF BOXES II */

/* 3A: Create ANOTHER nested for loop - in order to generate a new grid ... 
    USE the same customNewBoxCreate function..., the only difference is that the parent element 
    for each of these new divs is the element whose id is `new-grid-three`. */
/* 3B: Then: write the code to check when a column is a multiple of 3 (no remainder), 
    when it is a column where the remainder is 1 or when the remainder is 2 ... 
    HINT:: look up the % operator.. */
/* 3C: Then for each of the above cases: give the new divs in the first case a background of red, 
        then the second a background of orange and the third yellow. */
/*  3D: Finally, let each div contain the text content representing the associated remainder 
    when dividing by three. */

/***CODE */


/***EXPLANATION::
 * 
 * 
 */

/*************************************** */
/*** END PART THREE CREATE */ 
/*************************************** */
    




}