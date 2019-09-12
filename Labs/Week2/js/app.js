//create an application that makes raindrops appear on a page and hit the "ground"
//when drops hit the ground make it so the ground gets bluer


//CLASS FOR GROUND
class Ground {
    constructor() {
        //starting color of ground
        this.r = 0;
        this.g = 0;
        //5% blueness
        this.b = 5;
        //set the drops count at 0
        this.count = 0;
    }


    //create an update method that will draw a rctangle to the screen
    update() {
        //use variables from constructor
        fill(this.r, this.g, this.b);
        //draw rectangle for the ground
        rect(0, 200, 400, 200);
    }

    //this method will add color to the ground
    dropHit() {
        //add to the counter
        this.count++;
        //when the count has 10 drops in it...
        if(this.count >= 10) {
            //add to the blue color
            this.b++;
            //restart the count at zero so the blue can be added EVERY 10 DROPS
            this.count = 0;
        }
    }

}

//CLASS FOR RAINDROPS
class Drop {
    constructor() {
        //define position on screen
        //random x values
        this.x = Math.random() * 400
        //start at top
        this.y = 0;
    }

    //create a function that will update the properties of a new raindrop object
    update() {
        //add to the y position to make it move down the screen
        this.y ++;
        //color for raindrop (always put fill() before the shape)
        fill(0,0,255);
        //shape
        circle(this.x, this.y, 5);

        //when the position of the drop is low enough... 
        //the drop will be passed to the dropHit method in Ground class
        if(this.y >=200) {
            ground.dropHit(this);
        }
        

    }
}

//create an instance for ground
var ground = new Ground();

//CLASS FOR RAIN MANAGER
class Cloud {
    constructor() {
        //make an empty array that will store the raindrop instances
        this.drops = [];
    }

    //create a method to create a raindrop instance
    createDrop() {
        //make a new drop instance
        var newDrop = new Drop();

        //add the new drop to the drops array
        this.drops.push(newDrop);
    }

    //update drops in array
    update() {
        for(var i = 0; i < this.drops.length; i++) {
            //update the drop using function from Drop class
            this.drops[i].update();
        }
    }
}


//make a new cloud object to start the rain
var cloud = new Cloud();


//Runs once before the application starts
function setup() {
    //post the canvas on page
    createCanvas(400,300);
}

//Runs ~60 times a second
function draw() {

    //clear background by making it white
    background(255);

    //create a new drop on a 1% chance
    if(Math.random() < 0.15) {
        //call on createDrop method in Cloud class
        cloud.createDrop();
    }

    //call on the update method in Cloud class
    cloud.update();

    //call the update method in Ground class
    ground.update();

    
}
