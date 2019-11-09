//setup
var canvas = document.getElementById("renderCanvas");
var engine = new BABYLON.Engine(canvas, true);
var selectedMesh = null;
//make it exist to deal with later (makes variables global)
var camera, blueMat, pickResult, boxOne, boxTwo, boxThree;

var scene = createScene();

function createScene() {
    //create scene space
    var scene = new BABYLON.Scene(engine);
    //drop stuff in scene
    camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 4, 4, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);

    //Add and manipulate meshes in the scene
    //box 1
    boxTwo = BABYLON
            .MeshBuilder
            .CreateBox("box", {size: .5}, scene);

    //box 2
    boxOne = BABYLON
                        .MeshBuilder
                        .CreateBox("box", {size: .5}, scene);
    //left of box 1
    boxOne.position.x = 1;

    //box 3
    boxThree = BABYLON
                        .MeshBuilder
                        .CreateBox("box", {size: .5}, scene);
    //right of box 1
    boxThree.position.x = -1;


    //Add light
    var light = new BABYLON.HemisphericLight("HemLight", 
                    new BABYLON.Vector3(1, 1, 0), scene);

    //tweak colors
    blueMat = new BABYLON.StandardMaterial("blue", scene);
    blueMat.diffuseColor = new BABYLON.Color3(0.4, 0.4, 1);
    blueMat.specularColor = new BABYLON.Color3(0.4, 0.4, 0.4);
    blueMat.emissiveColor = BABYLON.Color3.Blue();

    //sphere.material = blueMat;
    return scene;
}


window.addEventListener("keydown", function(event) {
    //if w is clicked, rotate the clicked box downward 20 and check it
    if(event.keyCode == 87) {
        if(selectedMesh) {
            //rotate the sphere to x=+20
            TweenMax.to(selectedMesh.rotation, 1.5, { x: "+=20", onComplete: checkOver });
        }
    }
    //if s is clicked, rotate the clicked box upward 20 and check it
    if(event.keyCode == 83) {
        if(selectedMesh) {
            TweenMax.to(selectedMesh.rotation, 1.5, { x: "-=20", onComplete: checkOver });
        }
    }
    

});

//this will check to see if the boxes positions match
function checkOver() {
    var oneX = Math.round(boxOne.rotation.x);
    var twoX = Math.round(boxTwo.rotation.x);
    var threeX = Math.round(boxThree.rotation.x);

    console.log(oneX, twoX, threeX);

    if(oneX == twoX && oneX == threeX) {
        console.log("Unlocked!");

        greenMat = new BABYLON.StandardMaterial("green", scene);
        greenMat.diffuseColor = new BABYLON.Color3(0.4, 1, 0.4);
        greenMat.specularColor = new BABYLON.Color3(0.4, 0.4, 0.4);
        greenMat.emissiveColor = BABYLON.Color3.Green();

        boxOne.material = greenMat;
        boxTwo.material = greenMat;
        boxThree.material = greenMat;
    }

    else {
        console.log("Try again");
    }
    

    // if(oneX == twoX == threeX) {
    //     console.log("Unlocked!");
    // }

    // else {
    //     console.log("Try again");
    // }
    

}

//this listens for a click event -- turning the clicked item blue
window.addEventListener("click", function () {
    // We try to pick an object
    if(!pickResult){
        pickResult = scene.pick(scene.pointerX, scene.pointerY);
        //add material to the result
        pickResult.pickedMesh.material = blueMat;
        //put the result in the global variable
        selectedMesh = pickResult.pickedMesh;
    }
    else {
        pickResult.pickedMesh.material = null;

        pickResult = scene.pick(scene.pointerX, scene.pointerY);
        //add material to the result
        pickResult.pickedMesh.material = blueMat;
        //put the result in the global variable
        selectedMesh = pickResult.pickedMesh;

    }
 })

//Register a render loop to repeatedly render the scene
engine.runRenderLoop(function () {   
    
    scene.render();

  });