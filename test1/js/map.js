var canvas = document.getElementById("renderCanvas");
var infoBox = document.getElementById("infoBox")
var engine= new BABYLON.Engine(canvas, true);
var camera, scene;
var regionInfo, data, ground, cube;

// //gather and set city data
fetch("data/cityPoints.json", { method: 'get' })
.then(response => response.json())
.then((jsonData) => {
    //json representaion of data
    data = jsonData;
    console.log(data);
    //load in models
    data.cities.forEach((point, idx) => {
        //make icon material based on current city
        var mat = new BABYLON.StandardMaterial('icon', scene);
        mat.diffuseTexture = new BABYLON.Texture(point.mat);
        //make cube based on current city position
        cube = BABYLON.MeshBuilder.CreateBox(
             'cube',
             { size: 3, height: 3 },
             scene)
            
        cube.position = new BABYLON.Vector3(point.x, point.y, point.z);
        cube.material = mat;

        //set the current cube id based on current idx
        //cube.dataId = idx;

        cube.actionManager = new BABYLON.ActionManager(scene);
        
        cube.actionManager.registerAction(
            new BABYLON.ExecuteCodeAction(
                {
                    trigger: BABYLON.ActionManager.OnPointerOverTrigger,
                    
                },
                function () { 
                    cube.dataId = idx;
                    //console.log(cube.dataId);
                    regionInfo = data.cities[cube.dataId];
                    //console.log(regionInfo);
                    infoBox.innerHTML = regionInfo.name


                }
            )
        );

            
    })
})

var createScene = function () {

    // Create the scene space
    var scene = new BABYLON.Scene(engine);

    //Camera
    var camera = new BABYLON.ArcRotateCamera("Camera", 0, 0.8, 100, BABYLON.Vector3.Zero(), scene);
    camera.lowerBetaLimit = 0.1;
    camera.upperBetaLimit = (Math.PI / 2) * 0.9;
    camera.lowerRadiusLimit = 30;
    camera.upperRadiusLimit = 150;
    camera.attachControl(canvas, true);

    //Sky
    var skybox = BABYLON.MeshBuilder.CreateBox("skyBox", {size:1000.0}, scene);
    var skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
    skyboxMaterial.backFaceCulling = false;
    skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("textures/skybox", scene);
    skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
    skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
    skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
    skybox.material = skyboxMaterial;

    //Light
    var light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), scene);

    /******************************************************************************************* */
    //AVATAR WORLD
    //map material
    var groundMaterial = new BABYLON.StandardMaterial("ground", scene);
    groundMaterial.diffuseTexture = new BABYLON.Texture("textures/avatar_mat.jpg", scene);

    //create the ground using a height map
    ground = BABYLON.Mesh.CreateGroundFromHeightMap("ground", "textures/avatar_heightmap.jpg", 200, 200, 250, 0, 10, scene, false);

    //apply material
    ground.material = groundMaterial;

    //Ba Seng Sei
    // var wow = BABYLON.Mesh.CreateBox(
    //     'cube',
    //     { size: 3, height: 3 },
    //     scene)
        
    //     wow.position = new BABYLON.Vector3(-12, 3, 36);
    // //     //cube.position = scene.pick(790, 248);
    // //     cube.material = emat;


    return scene;
};

//add an event listener on click to show more information in info box
// window.addEventListener("mouseover", function() {
//     //get the pick result and save the picked mesh
//     var pickResult = scene.pick(scene.pointerX, scene.pointerY);
//     var selectedObject = pickResult.pickedMesh;
    
//     //check if a mesh is picked
//     if(selectedObject) {
//         //save the dataId associated with mesh
//         var dataId = selectedObject.dataId;
        
//         regionInfo = data.cities[dataId];
//         console.log(regionInfo);
//         console.log(regionInfo.name);
        
//     }
// })

scene = createScene();
engine.runRenderLoop(function() {
    scene.render();
});

