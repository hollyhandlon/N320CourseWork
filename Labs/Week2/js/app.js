class Drop {
    constructor() {
        //add adjectives for a rain drop
        //position on page
        this.x = 40;
        this.y = 0;
    }

    update() {
        //add to the y position to make it move
        this.y ++;
        //color
        fill(0,0,200);
        //shape
        circle(this.x, this.y, 5);
    }
}

var d = new Drop();

//Runs once before the application starts
function setup() {
    //post the canvas on page
    createCanvas(400,300);
}
//Runs ~60 times a second
function draw() {
    d.update();
}

//create the class to manage the rain
class Cloud {
    constructor() {
        //adjective of the cloud is drops
        this.drops = [];
    }

    //create a method to create a drop
    createDrop() {
        //stub
        //TODO: complete
    }
}

