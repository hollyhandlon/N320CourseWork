//Access HTML elements
var characterDiv = document.getElementsByClassName("characterDiv");
var leftSide = document.getElementsByClassName("leftSide");
var nameDiv = document.getElementsByClassName("nameDiv");
var imgDiv = document.getElementsByClassName("imgDiv");
var rightSide = document.getElementsByClassName("rightSide");
var textDiv = document.getElementsByClassName("textDiv");
var selectChar = document.getElementsByClassName("selectChar");
var charIcon = document.getElementsByClassName("charIcon");
var charData;
var data;

//Get JSON data
fetch("data/charData.json", { method: 'get' })
.then(response => response.json())
.then((jsonData) => {
    //json representaion of data
    data = jsonData;
    console.log(data);

    //Load each 
    data.characters.forEach((character, idx) => {
      var newImg = document.createElement('div');
      newImg.id = character.name;
      //newImg.src = character.img;
      selectChar.appendChild(newImg);

    });
});

//console.log(charData);
//Loop through character data to 