

var canvas = document.getElementById("renderCanvas");
var engine= new BABYLON.Engine(canvas, true);
var camera, scene, ball, goal, timeoutId, particleSystem;


var createScene = function () {

    // Create the scene space
    var scene = new BABYLON.Scene(engine);

    camera = new BABYLON.UniversalCamera("UC", new BABYLON.Vector3(0,0,-10), scene);
    var light = new BABYLON.DirectionalLight(
        "l", new BABYLON.Vector3(0, -.2, .2), scene
    );

    //enable physics
    var gravityVector = BABYLON.Vector3(0, -9.81, 0);
    var physicsPlugin = new BABYLON.CannonJSPlugin();
    scene.enablePhysics(gravityVector, physicsPlugin);


    ball = BABYLON.MeshBuilder.CreateSphere("sphero", { diameter: 1 }, scene);
    
    ball.physicsImpostor = new BABYLON.PhysicsImpostor(
                                    ball, BABYLON.PhysicsImpostor.SphereImpostor,
                                    { mass: 1, restitution: .2 }, scene
    );

    //ground
    var ground = BABYLON.MeshBuilder.CreateGround("ground", { height: 20, width: 20, subdivisions: 4 }, scene);
    ground.position.y = -3;
    ground.position.z = 9;
    ground.physicsImpostor = new BABYLON.PhysicsImpostor(
                    ground, BABYLON.PhysicsImpostor.BoxImpostor,
                    { mass: 0, restitution: .9 }, scene
    );
    
    //make goal
    goal = new BABYLON.MeshBuilder.CreateBox("goal", { height: 5, width: 5 }, scene);
    goal.position.z = 7;
    goal.position.x = (Math.random() * 8) - 4;

    particleSystem = new BABYLON.ParticleSystem("particles", 2000, scene);
    particleSystem.emitter = new BABYLON.Vector3(0,0,0);
    particleSystem.minEmitPower = 1;
    particleSystem.maxEmitPower = 3;
    particleSystem.addVelocityGradient(0,2);

    //load texture
    particleSystem.particleTexture = new BABYLON.Texture("images/particle.png", scene);


    return scene;
};

function resetBall() {
    //position
    ball.position = new BABYLON.Vector3();
    //velocity
    ball.physicsImpostor.setLinearVelocity(new BABYLON.Vector3());
    ball.physicsImpostor.setAngularVelocity(new BABYLON.Vector3());

    clearTimeout( timeoutId );
}

window.addEventListener("click", function() {
    
    var pickResult = scene.pick(scene.pointerX, scene.pointerY);
    var selectedObject = pickResult.pickedMesh;

    //null check
    if(selectedObject) {

        //get direction
        var surfaceNormal = pickResult.getNormal(true);
        var forcecDirection = surfaceNormal.scale(-1000);
        //kick the object
        selectedObject.physicsImpostor.applyForce(
            forcecDirection,
            selectedObject.getAbsolutePosition()
        )

        //reset ball
        timeoutId = setTimeout(resetBall, 3000);
    }
})

scene = createScene();
engine.runRenderLoop(function() {
    scene.render();
})

scene.registerAfterRender(function() {
    if(ball.intersectsMesh(goal, false)) {
        goal.position.x = (Math.random() * 8) - 4;

        //burst
        particleSystem.manualEmitCount = 21;
        particleSystem.start();

        //position
        particleSystem.minEmitBox = ball.position;
        particleSystem.maxEmitBox = ball.position;

        resetBall();
    }
})
