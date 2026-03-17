window.onload = function () {
  // FOR BUILDING THE EXAMPLES :)
  const allRows = document.querySelectorAll(".flex-row");
  let arrayOfShapes_One = [];

    //INIT ONE:
	for (let i = 0; i < 10; i++) {
		let color = {r:(255 - i * 10),g:50,b:100};
		arrayOfShapes_One.push(
		new CustomShape((i + 1) * 55, 50, "shape", "rectangle", color));
	}
	add_elements_to_dom(arrayOfShapes_One, allRows[0]);
	document
    .querySelector("#mapButtonA")
    .addEventListener("click", function() {
      mapArraysShape(arrayOfShapes_One, allRows[0])
    });
	
		function mapArraysShape(arrayOfShapes,row) {
    // MAP ONE
    let arrayOfShapesNew = arrayOfShapes.map(changeShape);
    add_elements_to_dom(arrayOfShapesNew, row);
    
    function changeShape(el){
        return (
        /* need to make a copy */
        new CustomShape(el.x, el.y+100, el.shapeClass,"circle",el.color)
        )}
    }

  	function mapArraysColor(arrayOfShapes,row) {
    // MAP TWO
    let arrayOfShapesNew = arrayOfShapes.map(changeColor);
    add_elements_to_dom(arrayOfShapesNew, row);
  

    function changeColor(el){
        //take red color
        let newColor = {r:el.color.r, g:125, b:255}
        return (
        /* need to make a copy */
        new CustomShape(el.x, el.y+200, el.shapeClass,el.customShapeClass,newColor)
        )}
    }
	document
    .querySelector("#mapButtonB")
    .addEventListener("click",  function() {
      mapArraysColor(arrayOfShapes_One, allRows[0])
    });


	//INIT TWO:
	let cshape = "";
	let arrayOfShapes_Two =[]
	for (let i = 0; i < 16; i++) {
		let color = { r: 255 - i * 10, g: 50, b: 100 };
		if (i % 2 === 0) cshape = "circle";
		else cshape = "rectangle";
		arrayOfShapes_Two.push(
		new CustomShape((i + 1) * 55, 50, "shape", cshape, color),
		);
	}
	add_elements_to_dom(arrayOfShapes_Two, allRows[1]); 
	
	function filterArraysXPos(arrayOfShapes, row){
		// FILTER ONE
		let filteredArray= arrayOfShapes.filter(greater_posX);
		
		function greater_posX(el){
			return(
				(el.x > 100)
			)
		}
		add_elements_to_dom(filteredArray, row);
		console.log(filteredArray)

		//then we can map - to change the y :)
		let arrayOfShapesYChange = filteredArray.map(
			function(el){
				return (new CustomShape(el.x, el.y+100, el.shapeClass,el.customShapeClass,el.color))

		});
		//console.log(filteredArray)
		//update
		add_elements_to_dom(arrayOfShapesYChange, row);
	}

   document
      .querySelector("#filterButtonA")
      .addEventListener("click", function(){filterArraysXPos(arrayOfShapes_Two, allRows[1])});

		
	function filterArraysByShape(arrayOfShapes, row){
		// FILTER ONE
		let filterArraysShape= arrayOfShapes.filter(shape_filter);
		
		function shape_filter(el){
			return(
				(el.customShapeClass ==='circle')
			)
		}

		//then we can map - to change the y :)
		let arrayOfShapesNew = filterArraysShape.map(
			function(el){
				return (new CustomShape(el.x, el.y+200, el.shapeClass,el.customShapeClass,el.color))

		});
		add_elements_to_dom(arrayOfShapesNew, row);
	}
	document
		.querySelector("#filterButtonB")
		.addEventListener("click", function(){filterArraysByShape(arrayOfShapes_Two, allRows[1])});
	


	//INIT THREE
	let arrayOfShapes_Three = [];
	for (let i = 0; i < 10; i++) {
		let color = { r: 255 -i*9, g: 255-i*20, b: 255- i*7};

		arrayOfShapes_Three.push(
		new CustomShape((i + 1) * 55, 50, "shape", "circle", color),
		);
		
	}
	add_elements_to_dom(arrayOfShapes_Three, allRows[2]);
	allRows[2].innerHTML+=``
		
	function forEachCallBackA() {
		document.querySelector("#pSpan").innerHTML = "";
		arrayOfShapes_Three.forEach(addPTags);

		function addPTags(el) {
		document.querySelector("#pSpan").innerHTML += ` x:${el.x} `;
		}
	}

	function forEachCallBackB(){
		document.querySelector("#pSpan").innerHTML=""
		arrayOfShapes_Three.forEach(addPTags)

		function addPTags(el){
			document.querySelector("#pSpan").innerHTML+= ` y:${el.y} `		
		}
	}
	document
      .querySelector("#forEachButtonA")
      .addEventListener("click", forEachCallBackA);

	document
		.querySelector("#forEachButtonB")
		.addEventListener("click", forEachCallBackB);


  	//INIT FOUR
  	let arrayOfShapes_Four = [];

    for (let i = 0; i < 12; i++) {
      //let color = `rgb(${255 - i * 10},0,${255 - i * 10})`;
      let color = { r: 255 -i*9, g: 255-i*20, b: 255- i*7};
      arrayOfShapes_Four.push(
        new CustomShape((i + 1) * 55, 50, "shape", 'square', color)
      );
    }
    add_elements_to_dom(arrayOfShapes_Four, allRows[3]); 

    function findCallBackA(arrayOfShapes, row) {
    //get an object back whose x> 200
    const foundObj = arrayOfShapes.find(
        function(el){
            return(el.x>200)
        })
        console.log(foundObj)
        if(foundObj)
        add_single_element_to_dom(foundObj, row) 
	}
	document
      .querySelector("#findButtonA")
      .addEventListener("click", function () {
      findCallBackA(arrayOfShapes_Four, allRows[3]);
      }); 

	function findCallBackB(arrayOfShapes, row){
      //get an object back whose y> 40
      const foundObj = arrayOfShapes.find(
        function(el){
            return(el.y>40)
        })
        console.log(foundObj)
        if(foundObj)
        add_single_element_to_dom(foundObj, row) 
    }
    document
      .querySelector("#findButtonB")
      .addEventListener("click", function () {
      findCallBackB(arrayOfShapes_Four, allRows[3]);
      });  
    
		


	const donuts = [
		{ name: 'mondays_donut', type: 'sparkly' },
		{ name: 'tuesdays_donut', type: 'shiny' },
		{ name: 'wednesdays_donut', type: 'squashy' }
	];
	
		const newObjectFromArray = donuts.reduce((accum, item) => {
			/* accumulator is the array building */
			console.log(accum)
		// add object key to our object i.e. mondays_donut: { type: 'sparkly' }
		accum[item.name] = {type: item.type };
		return accum;
		},{});
	console.log(newObjectFromArray)



}