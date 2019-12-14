//JSON Data (I know this is stupid but the fetch thing wasn't workig for me fast enough)
characterData =  [
    { 
        "name": "Aang", 
        "img": "https://upload.wikimedia.org/wikipedia/en/8/86/Avatar_Aang.png",
        "img2": "https://cdn.imgbin.com/21/23/9/imgbin-aang-sokka-zuko-katara-korra-aang-VRsF5gqyELJpa1JMH7EHc2rDq.jpg", 
        "element": "air", 
        "color": "#eb921e" 
    },
    { 
        "name": "Katara", 
        "img": "https://upload.wikimedia.org/wikipedia/en/f/fb/Katara.png", 
        "element": "water",
        "color": "#001891" 
    },
    { 
        "name": "Toph", 
        "img": "https://upload.wikimedia.org/wikipedia/en/thumb/4/46/Toph_Beifong.png/220px-Toph_Beifong.png", 
        "element": "earth",
        "color": "#25691f" 
    },
    { 
        "name": "Sokka", 
        "img": "https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/Sokka.png/220px-Sokka.png", 
        "element": "sword",
        "color": "#001891"
    },
    { 
        "name": "Zuko", 
        "img": "https://diyuehb.com/images/zuko-and-azula-5.png", 
        "element": "fire",
        "color": "#940000" 
    },
    { 
        "name": "Iroh", 
        "img": "https://vignette.wikia.nocookie.net/p__/images/7/7b/Iroh_%28Avatar%29.png/revision/latest?cb=20190214211539&path-prefix=protagonist", 
        "element": "fire",
        "color": "#940000"
    }
];

//Access HTML elements************************************************
var characterDiv = document.getElementsByClassName("characterDiv");
var leftSide = document.getElementsByClassName("leftSide");
var nameDiv = document.querySelector(".nameDiv");
var imgDiv = document.querySelector(".imgDiv");
var rightSide = document.getElementsByClassName("rightSide");
var textDiv = document.querySelector(".textDiv");
var selectChar = document.querySelector(".selectChar");
var charIcon = document.querySelector("charIcon");
var newIcon;

var currentCharId = 0;


//Loop to create character options************************************
characterData.forEach((character, idx) => {
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
        
        //console.log(currentCharIdx);
    })
});

//Set Default*****************************************************
//Insert the name and color to nameDiv based on current char
nameDiv.innerHTML = characterData[currentCharId].name;
nameDiv.style.color = characterData[currentCharId].color;
//Insert the image to imgDiv based on current char
imgDiv.src = characterData[currentCharId].img;
//Insert the character info and color to the textDiv based on current char
textDiv.innerHTML = characterData[currentCharId].element;
textDiv.style.color = characterData[currentCharId].color;

//Select Character************************************************
function selectedChar(char) {
    currentCharId = char;

    //Insert the name and color to nameDiv based on current char
    nameDiv.innerHTML = characterData[currentCharId].name;
    nameDiv.style.color = characterData[currentCharId].color;
    //Insert the image to imgDiv based on current char
    imgDiv.src = characterData[currentCharId].img;
    //Insert the character info and color to the textDiv based on current char
    textDiv.innerHTML = characterData[currentCharId].element;
    textDiv.style.color = characterData[currentCharId].color;
}




