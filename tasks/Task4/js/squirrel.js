/**TO DO:
// 1. Create a file to hold a Squirrel Class (i.e. Squirrel.js)
2. Create the Squirrel Class : a constructor which takes a position, size and color as parameters
3. Create a renderSquirrel() method -> which essentially creates a HTML element(s) - could be
an image element :) or an svg .... representing a Squirrel... (see Sun or Flower for inspiration)
4. Create an animateSquirrel() method in the Squirrel class - which will make a given Squirrel move around the garden - use the requestAnimationFrame()
5. In garden.js add 5 new Squirrels to the garden (in an array) - all different sizes and colors and in different positions
and then call the animateSquirrel() method on all the Squirrels
6. Implement a counter to keep track of how many nuts any given squirrel has picked up (SEE TEAM D for collab)  
*/

class Squirrel {
  constructor(x, y) {
    this.x = x;
  }
    
}