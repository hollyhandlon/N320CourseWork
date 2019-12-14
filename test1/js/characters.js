//Access HTML elements
var characterDiv = document.getElementsByClassName("characterDiv");
var leftSide = document.getElementsByClassName("leftSide");
var nameDiv = document.querySelector(".nameDiv");
var imgDiv = document.querySelector(".imgDiv");
var rightSide = document.getElementsByClassName("rightSide");
var textDiv = document.querySelector(".textDiv");
var selectChar = document.querySelector(".selectChar");
var charIcon = document.querySelector("charIcon");

//Global variables
var newIcon;

//Get JSON data and use it
fetch("data/charData.json", { method: 'get' })
.then(response => response.json())
.then((jsonData) => {
    //json representaion of data
    data = jsonData;
    //Loop through images and append them to the imgDiv
    data.characters.forEach((character, idx) => {
        newIcon = document.createElement("img");
        newIcon.src = character.img;
        newIcon.setAttribute("style", "width: 90px; height: 90px; margin: 20px");
        newIcon.className = character.name;
        //Set the id = idx, so that idx can be passed through event
        newIcon.id = idx;
        selectChar.appendChild(newIcon);

        newIcon.addEventListener("click", function() {
            //Get the id which holds the index number
            var newChar = event.target.id;
            
            selectedChar(newChar);
            console.log("hi")
            
            
        })
    });
    
    //console.log(newChar);
    //Add event listener to newIcon divs and get idx
    

    //Add image to main div and info

    //Insert the name and color to nameDiv based on current char
    nameDiv.innerHTML = data.characters[currentCharIdx].name;
    nameDiv.style.color = data.characters[currentCharIdx].color;
    //Insert the image to imgDiv based on current char
    imgDiv.src = data.characters[currentCharIdx].img;
    //Insert the character info and color to the textDiv based on current char
    //textDiv.innerHTML = data.characters[currentCharIdx].element;
    textDiv.style.color = data.characters[currentCharIdx].color;
    console.log(data.characters[currentCharIdx].specialties);

})



function selectedChar(pickedChar) {
    //Get JSON data
    var currentCharIdx = pickedChar;
    // var selectedChar = event.target.className;
    // console.log(selectedChar);
     fetch("data/charData.json", { method: 'get' })
     .then(response => response.json())
     .then((jsonData) => {
     //json representaion of data
     data = jsonData;
    // newChar = event.target.idx;

    //Update current character
    //Insert the name and color to nameDiv based on current char
    nameDiv.innerHTML = data.characters[currentCharIdx].name;
    nameDiv.style.color = data.characters[currentCharIdx].color;
    //Insert the image to imgDiv based on current char
    imgDiv.src = data.characters[currentCharIdx].img;
    //Insert the character info and color to the textDiv based on current char
    textDiv.innerHTML = data.characters[currentCharIdx].element;
    textDiv.style.color = data.characters[currentCharIdx].color;

    })
}

console.log("hi");
    