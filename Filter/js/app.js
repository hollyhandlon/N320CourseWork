var canvas = document.getElementById("renderCanvas");
var rgCost = document.getElementById("rgCost");
var engine= new BABYLON.Engine(canvas, true);
var filterButtons = document.querySelectorAll(".filterNav")
var infoBox = document.getElementById("infoBox");
var camera, scene, data, selectedPieces;
var selectedType = "all";




//app setup
fetch("data/furniture.json", { method: 'get' })
.then(response => response.json())
.then((jsonData) => {
    //json representaion of data
    data = jsonData;
    //load in models
    data.furniture.forEach((piece, idx) => {
        var p = BABYLON.SceneLoader.ImportMesh(
            "", "./models/house/", piece.asset, scene,
            (meshes) => {
                var containerNode = new BABYLON.TransformNode("root");
                piece.asset = containerNode;
                piece.asset.dataId = idx;

                meshes.forEach((mesh) => {
                    mesh.parent = containerNode;
                })
                //animate container
                //TweenMax.to(piece.asset.position, 10, {y: 4});
            }
        );

        
    })
})

var createScene = function () {

    // Create the scene space
    var scene = new BABYLON.Scene(engine);

    camera = new BABYLON.ArcRotateCamera(
        "c", Math.PI / 2, Math.PI /4,
        4, BABYLON.Vector3.Zero(), scene
        );

    var light = new BABYLON.DirectionalLight(
        "l", new BABYLON.Vector3(0, -.5, 1.0), scene
    );


    return scene;
};


//call scene function
scene = createScene();
engine.runRenderLoop(function() {
    scene.render();
})

//application
function selectType(event) {
    //remember what was selected
    selectedType = event.target.getAttribute("data-type");

    filterButtons.forEach((button) => { button.classList.remove("selected") });

    //add the selected class to the item that was clicked
    event.target.classList.add("selected");
}

function showAvailable() {
    //get the slider cost value
    var amount = Number(rgCost.value);

    //filter data
    selectedPieces = data.furniture.filter((piece) => {
        if (selectedType == "all"){
            return piece.price < amount;
        }
        else {
            return (piece.price < amount) && (piece.type == selectedType);
        }
    })

    //do something with the data
    //hide all pieces
    data.furniture.forEach((piece) => {
        TweenLite.to(piece.asset.position, .7, {y: 5, onComplete: showFiltered})
    })

}

function showFiltered(){
    //let only the filtered data come back
    selectedPieces.forEach((piece, idx) => {
        TweenLite.to(piece.asset.position, .7, {y: 0, x: idx})
    })
}

window.addEventListener("click", function() {
    
    var pickResult = scene.pick(scene.pointerX, scene.pointerY);
    
    var selectedObject = pickResult.pickedMesh;

    //lazy check
    if(selectedObject) {
        var dataId = selectedObject.parent.dataId;
        
        var itemInfo = data.furniture[dataId];
        console.log(itemInfo);
        infoBox.innerHTML = `${itemInfo.style} ${itemInfo.type} : $${itemInfo.price}`;
    }
})