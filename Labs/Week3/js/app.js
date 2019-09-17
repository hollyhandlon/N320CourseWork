//MODULE PATTERN
//create a class for ball
class Ball {
    //define the properties of the ball
    constructor() {
        //postion of the ball
        this.position = { x: 100, y: 380 };
        //velocity of the ball
        this.velocity = { x: 10, y: 10 };
    }
    
    //create a method to update the ball object
    update() {
        //add to the position based on velocity
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        //create a circle based on the postion and shape it
        fill(255,255,255);
        circle(this.position.x, this.position.y, 20);
        
        //when the ball gets to a certain position on the screen, inform the world class
        if(this.position.y < 0 || this.position.y > 400 || this.position.x < 0 || this.position.x > 400) {
            //pass the ball information to the ballBeyond method inside of the world class
            World.ballBeyond(this);
            b.grow(this);
            
        }    
    }   
}

//MODULE PATTERN
//class for a box
 class GrowingBox {
    //Grows in size every time a ball hits an edge and is reset
    constructor() {
        //set box color
        this.boxcolor = (0,0,0);
        //set the starting dimensions for the box
        this.x = 0;
        this.y = 0;
        this.w = 100;
        this.h = 100;

    }

    //create an update method that will draw a rectangle to the page and give it a color
    update() {
        fill(this.boxcolor);
        //draw rectangle for the box
        rect(this.x, this.y, this.w, this.h);
        
        
    }
    //create a method that adds to the dimensions of the box
    grow() {
        this.w = this.w + 5;
        this.h = this.h + 5;
    }
    // "For fun": multiple balls
}

//create a new instance of the ball object
var ball = new Ball();
//create a new instance of the box  
var b = new GrowingBox();
  
//create the canvas
function setup() {
    createCanvas(400,400);
}

//SINGLETON PATTERN
//module for functions of the canvas 
var World = {
    //set a starting color for the canvas
    bgcolor: [237, 119, 83],
    //create a function for when the ball reaches the limits
    ballBeyond: function(whichBall) {
        //change the color randomly
        this.bgcolor = [ Math.random()*255, Math.random()*255, 83 ];
        //start the ball back at a starting position
        whichBall.position.y = 200;
        whichBall.position.x = 200;
        //change the velocity randomly
        whichBall.velocity.y = (Math.random() - .5) * 20;
        whichBall.velocity.x = (Math.random() - .5) * 20;
    }
}
  

  
  //draw the ball onto the page and communicate with the update method in Ball class
  function draw() {
    //set the color of the box
    background( World.bgcolor );

    //get information from the update method in Ball
    ball.update();

    //get information for the update method in GrowingBox
    b.update();
    
  }