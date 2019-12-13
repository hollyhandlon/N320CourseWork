<template>
    <div class="container">
        <!--Div to hold the main card, details manipulated by current charcater index-->
        <div v-bind:style = '{ "border-color": characters[c].color, "color": characters[c].color}' 
            class="characterDiv">
            <!--Div to hold left side of main card-->
            <div class="leftSide">
                <!--Div to hold the name based on current charcater index-->
                <div class="nameDiv">{{ characters[c].name }}</div>
                <!--img to hold the main character image based on current character index-->
                <img class="imgDiv" v-bind:src = "characters[c].img" />
            </div>
            <!--Div to hold right side of the main card-->
            <div class="rightSide">
                <!--Div to hold information based on current character index-->
                <div class="textDiv">{{ characters[c].element }}</div>
            </div>
        </div>
        <!--Div to hold other characters below-->
        <div class="selectChar">
            <!-- <p class="arrowBack"> Back </p>
            <p class="arrowBack"> Front </p> -->
            <!--Loop through characters array to display a new image-->
            <img @mouseover.native="hover = true"
                @mouseout.native="hover = false"
                :class="{ active : hover }" v-on:click = selectChar(idx) v-for="(char, idx) in characters"
                class="charIcon" v-bind:key="idx" v-bind:src = "char.img" />
            
            
        </div>  
    </div>
</template>

<script>
import CharData from "../CharData.js"
export default {
    name: "Characters",

    data: function() {
        return {
            characters: CharData.characters,

            //holds the value of current character
            c: 0,

            hover: false
        }
    },
    methods: {
        //this function will change the index to the one that is clickeds
        selectChar: function(idx) {
            //check index
            window.console.log(idx);
            //make the c equal to the new index 
            this.c = idx;
            //check updated c
            window.console.log(this.c);
        },
        //change img
        changeImg: function() {
            if(this.hover == true) {
                //get the img2
            }
        }
    }
}
</script>

<style scoped>

.characterDiv {
    margin: auto;
    font-family: Herculanum;
    font-size: 50px;
    width: 800px;
    padding: 10px;
    border: 3px solid;
    border-radius: 12px;
    padding: 10px;
    height: 390px;
}

.leftSide {
    float: left;
}

.imgDiv {
    width: 300px;
    height: 300px;
    padding: 10px;
    font-family: Herculanum;
    font-size: 50px;
    color: orange;
}

.textDiv {
    text-align: left;
    font-size: 20px;
}

.charIcon {
    margin: 20px;
    height: 90px;
    width: 90px;
}

/*character selection animations*/

 .charIcon:hover {
    animation: charIconOver .2s;
    animation-fill-mode: both;
 }

 .charIconOut {
     animation: charIconOut .7s;
     animation-fill-mode: both;
 }

 @keyframes charIconOver {
  to{
    transform: scale(1.2);
    opacity: 1;
  }
}

@keyframes charIconOut {
  from {
    opacity: 1;
    transform: scale(1.2);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

</style>