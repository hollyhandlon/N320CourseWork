var canvas = document.getElementById("renderCanvas");
var engine= new BABYLON.Engine(canvas, true);
var camera, scene;
var regionInfo, data;

// //gather and set city data
fetch("data/cityPoints.json", { method: 'get' })
.then(response => response.json())
.then((jsonData) => {
    //json representaion of data
    data = jsonData;
    console.log(data);
    //load in models
    data.cities.forEach((point, idx) => {
        console.log("hi");
        var mat = new BABYLON.StandardMaterial('icon', scene);
        mat.diffuseTexture = new BABYLON.Texture(point.mat);
        var cube = BABYLON.MeshBuilder.CreateBox(
             'cube',
             { size: 3, height: 3 },
             scene)
            
            cube.position = new BABYLON.Vector3(point.x, point.y, point.z);
            cube.material = mat;
    })
})

var createScene = function () {

    // Create the scene space
    var scene = new BABYLON.Scene(engine);

    // Camera
    var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0.8, 100, BABYLON.Vector3.Zero(), scene);
    camera.lowerBetaLimit = 0.1;
    camera.upperBetaLimit = (Math.PI / 2) * 0.9;
    camera.lowerRadiusLimit = 30;
    camera.upperRadiusLimit = 150;
    camera.attachControl(canvas, true);

    //SKY
    var skybox = BABYLON.MeshBuilder.CreateBox("skyBox", {size:1000.0}, scene);
    var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
    skyboxMaterial.backFaceCulling = false;
    skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("textures/skybox", scene);
    skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
    skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
    skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
    skybox.material = skyboxMaterial;

    // Add lights to the scene
    var light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), scene);

    //AVATAR WORLD
    //map material
    var groundMaterial = new BABYLON.StandardMaterial("ground", scene);
    groundMaterial.diffuseTexture = new BABYLON.Texture("textures/avatar_mat.jpg", scene);

    //create the ground using a height map
    var ground = BABYLON.Mesh.CreateGroundFromHeightMap("ground", "textures/avatar_heightmap.jpg", 200, 200, 250, 0, 10, scene, false);

    // When our new mesh is read, apply our material.
    ground.material = groundMaterial;

    //KINGDOM ICONS

    //fire nation icon
    var fmat = new BABYLON.StandardMaterial('fire', this.scene);
    fmat.diffuseTexture = new BABYLON.Texture("textures/fire.png");
    //earth nation icon
    var emat = new BABYLON.StandardMaterial('earth', this.scene);
    emat.diffuseTexture = new BABYLON.Texture("textures/earth.png");
    //water nation icon
    var wmat = new BABYLON.StandardMaterial('water', this.scene);
    wmat.diffuseTexture = new BABYLON.Texture("textures/water.jpg");
    //air nation icon
    //var amat = new BABYLON.StandardMaterial('air', this.scene);
    //amat.diffuseTexture = new BABYLON.Texture("textures/air.png");

    // //Ba Seng Sei
    // var cube = BABYLON.MeshBuilder.CreateBox(
    //     'cube',
    //     { size: 3, height: 3 },
    //     scene)
        
    //     cube.position = new BABYLON.Vector3(-18, 8, -70);
    //     //cube.position = scene.pick(790, 248);
    //     cube.material = emat;

    // //Hokage
    // var cube = BABYLON.MeshBuilder.CreateBox(
    //     'cube',
    //     { size: 3, height: 3 },
    //     scene)
        
    //     cube.position = new BABYLON.Vector3(-49, 2, 7);
    //     //cube.position.x = 770;
    //     //cube.position.y = 244;
    //     cube.material = fmat;

    return scene;


};

//add an event listener on hover to show more information in info box
window.addEventListener("mouseover", function() {
    
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

scene = createScene();
engine.runRenderLoop(function() {
    scene.render();
});

