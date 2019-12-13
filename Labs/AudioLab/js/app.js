var soundButtons = document.getElementById("soundButtons");


var sounds = [
    { url: "chimes_long.mp3", name: "Chimes" }, 
    { url: "click_clock_loop.mp3", name: "Click Clock" }, 
    { url: "pop_10.mp3", name: "Pop" },
    { url: "puff.mp3", name: "Puff" }, 
    { url: "rustle_5.mp3", name: "Rustle" }
];

var soundElements = [];

//loop through sounds array
sounds.forEach((sound, idx) => {
    //sound
    var newSound = new Audio("sounds/" + sound.url);
    //store into array
    soundElements.push(newSound);
    //buttons
    var newButton = document.createElement("button");
    
    newButton.innerHTML = sound.name;
    
    newButton.setAttribute("data-sound-id", idx);
    
    //add to page
    soundButtons.appendChild(newButton);

    //listen for button click
    newButton.addEventListener("click", playSoundArray);
})

function playSoundArray(event) {
    var soundIndex = Number(event.target.getAttribute("data-sound-id"));

    //get sound from array
    var selectSound = soundElements[soundIndex];
    
    selectSound.play();

} 







// var myAudio = document.getElementById("myAudio");
// //myAudio.play();

// function playAudio() {
//     myAudio.play();
// }

// function stopMainAudio() {
//     myAudio.pause();
//     myAudio.currentTime = 0;
// }