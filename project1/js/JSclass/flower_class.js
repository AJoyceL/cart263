/*
    FLOWER GARDEN ANIMATION
  
  by: reference Sabine's code
*/

class Petal {
    constructor(xPos, yPos, radius, colours) {
        this.petal(xPos, yPos + 3 * radius / 2, radius, colours[0]);
        this.petal(xPos, yPos - 3 * radius / 2, radius, colours[0]);
        this.petal(xPos - 3 * radius / 2, yPos, radius, colours[0]);
        this.petal(xPos + 3 * radius / 2, yPos, radius, colours[0]);
        this.petal(xPos, yPos, radius, colours[1])
    } 

}