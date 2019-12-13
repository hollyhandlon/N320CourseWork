<template>
  <div class="container">
    <!--show logo-->
    <div class="title">
      <img width="400px" height="200px" v-bind:src="img" />
    </div>
    <!--add animation to the start button-->
    <div @mouseover.native="hover = true"
        @mouseout.native="hover = false"
        :class="{ active : hover }" 
        class="start">
        <!--link to game baord-->
        <router-link to="/board" >Click Here to Play!</router-link>
    </div> 
  </div>
</template>

<script>
//import GameData from "../GameData.js"
export default {
    name: "Start",
    data() {
        return {
            hover: false,
            img: 'http://www.twoop.com/wp-content/uploads/2015/01/Candy-Land.jpg',
        }
    }
}
</script>

<style scoped>
 /*syle the buttons and placement of everything*/
 /*add animation--maybe*/
.container {
  height: stretch;
  width: stretch;
  background-color: #FFB6C1;
}

 .start {
    margin: auto;
    margin-top: 20px;
    width: 20%;
    border: 3px solid crimson;
    padding: 5px;
    text-align: center;
    vertical-align: middle;
    line-height: 100px;
    height: 100px;
    font-family: cursive;
    font-size: 25px;
    color: crimson;
 }

 .start:hover {
    animation: startOver .7s;
    animation-fill-mode: both;
 }

 .startOut {
     animation: startOut .7s;
     animation-fill-mode: both;
 }

 @keyframes startOver {
  to{
    transform: scale(1.2);
    opacity: 1;
    background-color: crimson;
    color: white;
    border-color: #FFB6C1;
  }
}

@keyframes startOut {
  from {
    opacity: 1;
    transform: scale(1.2);
    background-color: #FFB6C1;
  }
  to {
    opacity: 1;
    transform: scale(1);
    background-color: purple;
  }
}
</style>