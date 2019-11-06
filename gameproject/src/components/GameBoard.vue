<template>
    <div class="container">
        <div v-show="toggle">
            Click on the deck below to choose a card. <br />Current Player: {{ playerTurn }}
        </div>
        <div v-show="!toggle">Enter Player Names</div>
        <input v-show="!toggle" v-model="playerOneName" placeholder="Player 1">
        <input v-show="!toggle" v-model="playerTwoName" placeholder="Player 2">
        <br />
        <div @mouseover.native="hover = true"
            @mouseout.native="hover = false"
            :class="{ active : hover }"
            v-on:click="toggle = !toggle"
            v-show="!toggle"  
                class="submit">Submit
        </div>
        <span v-show="toggle">
            <div v-on:click="click" class="card">
                <!--when div above is clicked bind the new card color to the style-->
                <div v-bind:style= '{ "background-color": card.color }' 
                    class="cardFill"></div>    
            </div>
            <!-- this div will hold a button that, when clicked, will display a certain card in the deck -->
            <div class="one">Player 1: <br /> {{ playerOneName }}</div>
            <div class="two">Player 2: <br /> {{ playerTwoName }}</div>
                <div class="gameSpace">
                    <div v-show="!end">Player {{ playerTurn }}<br />{{ winner }}</div>
                    <span v-show="end">

                        <!--TODO create the look of the board-->
                        <!--Loop through tiles to display-->
                        <div v-on:click="placePlayer(tile)"
                            v-for="(tile, idx) in tiles1"
                            class="tile" v-bind:key="idx"
                            v-bind:style= '{ "background-color": tile.color }'>
                            {{ tile.player1 }}<br />{{ tile.player2 }}{{ tile.text }}
                        </div>
                        <!--second set so they can go horizontally-->
                        <div v-on:click="placePlayer(tile)"
                            v-for="(tile, idx) in tiles2"
                            class="tile2" v-bind:key="idx"
                            v-bind:style= '{ "background-color": tile.color }'>
                            {{ tile.player1 }}<br />{{ tile.player2 }}{{ tile.text }}
                        </div>               
                    </span>   
                </div>
            
        </span>
    </div>
</template>

<!--execute-->
<!--import game data-->
<script>
import GameData from "../GameData.js"
export default {
    name: "Board",
    //pull external data
    data: function() {
        return {
            tiles1: GameData.tiles1,
            tiles2: GameData.tiles2,
            card: {  },
            winner: "",
            playerTurn: 1,
            toggle: false,
            end: true
            
        }
    },
    methods: {
        pullRandom: function() {
            //pull a random card in the cards array
            return GameData.cards[Math.floor(Math.random() * GameData.cards.length)];    
        },
        //when deck is clicked the random function is called
        click: function() {
            //overwrite card object in data to random card pulled
            this.card = this.pullRandom();    
        },
        //create a function that places the spaces on the board
        placePlayer: function(tile) {
            //add player 1 data to current tile if the colors match
            if(this.card.color == tile.color) {
                if(this.playerTurn == 1) {
                    tile.player1 = this.playerTurn;
                }
                //add player 2 when it is player 2's turn
                else if(this.playerTurn == 2) {
                    tile.player2 = this.playerTurn;
                }    
            }
            //when the castle is click keep the current player and display message
            else if(tile.color == "#FFF") {
                this.winner = "You win!";
                window.console.log(this.winner);
                this.playerTurn = (this.playerTurn == 1) ? 2 :1;
                this.end = !this.end;
            }

            //switch the player after each tile click
            this.playerTurn = (this.playerTurn == 1) ? 2 :1;  
        }
    }
}
</script>

<style scoped>
/*style container*/
.container {
    font-family: cursive;
    font-size: 20px;
}
/*center the area of game space and style*/
.gameSpace {
    margin: auto;
    width: 650px;
    border: 3px solid black;
    padding: 10px;
    height: 400px;
    overflow:hidden;
}

/*TODO*/

/*style the tiles: vertical*/
.tile {
    width: 60px;
    height: 45px;
    position: relative;
    color: #000;
    font-family: cursive;
    font-size: 15px;
    
}

/*style the tiles: horizontal*/
.tile2 {
    font-size: 15px;
    width: 60px;
    height: 45px;
    position: relative;
    color: #000;
    font-family: cursive;
    float: left;
}


/*style the button for stack*/
.button {
    width: 20px;
    height: 10px;
    font-family: cursive;

}

.submit {
    margin: auto;
    margin-top: 20px;
    width: 80px;
    height: 40px;
    background-color: #FFB6C1;
    font-family: cursive;
    color: crimson;
    font-display: bold;
    font-size: 15px;
    text-align: center;
    vertical-align: middle;
    line-height: 40px;
}

.submit:hover {
    animation: submitOver .5s;
    animation-fill-mode: both;
 }

 @keyframes submitOver {
  to{
    transform: scale(1.2);
    opacity: 1;
    background-color: crimson;
    color: white;
    border-color: #FFB6C1;
  }
}

/*style the card fill*/
.cardFill {
    width: 50px;
    height: 50px;
    /*background-color: #00ff00;*/
    border: 8px solid #ffffff;
    padding: 5px;
}

/*style the card*/
.card {
    width: 150px;
    height: 80px;
    border: 3px solid #000;
    margin: auto;
    margin-top: 10px; 
    margin-bottom: 10px;
}

.one{
    float: left;
    margin-left: 90px;
    margin-top: 60px;
}
.two {
    float: right;
    margin-right: 80px;
    margin-top: 60px;
}
</style>