var canvas = document.getElementById("renderCanvas");
var engine= new BABYLON.Engine(canvas, true);
var camera, scene, sphere;
var t = 0;

function createScene() {
    var scene = new BABYLON.Scene(engine);
    // Add a camera to the scene and attach it to the canvas
    camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 4, 4, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);
    // Add lights to the scene
    var light = new BABYLON.DirectionalLight("dir01", new BABYLON.Vector3(0, -0.5, 1.0), scene);
    // Add and manipulate meshes in the scene
    //var ground = BABYLON.MeshBuilder.CreateGround("ground", {height: 4, width: 4, subdivisions: 4}, scene);

    // Add and manipulate meshes in the scene
    sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: 2}, scene);


    return scene;
}

scene = createScene();
engine.runRenderLoop(function() {
    t += .01;
    sphere.scaling.x += Math.sin(t);
    sphere.scaling.y += Math.sin(t);
    sphere.scaling.z += Math.sin(t);

    scene.render();
});