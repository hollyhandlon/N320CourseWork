//setup
var canvas = document.getElementById("renderCanvas");
var engine = new BABYLON.Engine(canvas, true);


//make it exist to deal with later (makes variables global)
var camera, sphere;

var scene = createScene();

function createScene() {
    //create scene space
    var scene = new BABYLON.Scene(engine);
    //drop stuff in scene
    camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 4, 4, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);

    var gravityVector = new BABYLON.Vector3(0,-9.81, 0);
    var physicsPlugin = new BABYLON.CannonJSPlugin();
    scene.enablePhysics(gravityVector, physicsPlugin);




    var mat = new BABYLON.StandardMaterial("base", scene);
    mat.diffuseTexture = new BABYLON.Texture("textures/download.jpg", scene);
    mat.specularTexture = new BABYLON.Texture("textures/download.jpg", scene);

    var ground = BABYLON.MeshBuilder.CreateGround("ground", {height: 4, width: 4, subdivisions: 4}, scene);
    ground.physicsImpostor = new BABYLON.PhysicsImpostor(ground, BABYLON.PhysicsImpostor.BoxImpostor, { mass: 0, restitution: 0.9 }, scene);
    ground.physicsImpostor.friction = 10;


    return scene;
}

//Register a render loop to repeatedly render the scene
engine.runRenderLoop(function () {   
    
    scene.render();

  });