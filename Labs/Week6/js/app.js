var app = new Vue({
    el: "#app",
    data: {
        gameOver: false,
        playerTurn: 1,
        grid: [
            [ 0,0,0,0,0,0,0 ],
            [ 0,0,0,0,0,0,0 ],
            [ 0,0,0,0,0,0,0 ],
            [ 0,0,0,0,0,0,0 ],
            [ 0,0,0,0,0,0,0 ],
            [ 0,0,0,0,0,0,0 ]
        ]
    },
    methods: {
        selectCell: function(row, col) {
            
            var moveRow = this.lowestMove(col);

            if(moveRow >= 0) {

                //copy grid to a temp var
                //returns a subarray, but this one will be identical to the grid
                var tempGrid = this.grid.slice(0);
                //modify cloned version
                tempGrid[moveRow][col] = this.playerTurn;
                //kill original and replace with the clone
                this.grid = tempGrid;

                //swap player turn
                this.playerTurn = (this.playerTurn == 1) ? 2 :1;

                //check for win
                this.checkWin();
            }
        },
        checkWin: function() {
            
            var message = ""
            //check verticle matches
            for (let col = 0; col < 7; col++) {
                if(this.grid[5][col] == 1 && this.grid[4][col] == 1 && this.grid[3][col] == 1 && this.grid[2][col] == 1 ){
                    console.log("Player 1 wins!");
                    
                    message = "Game over: Player 1 wins!";
                    
                }
                else if(this.grid[5][col] == 2 && this.grid[4][col] == 2 && this.grid[3][col] == 2 && this.grid[2][col] == 2 ){
                    console.log("Player 2 wins!");
                    message = "Game over: Player 2 wins!"
                    
                }
                
    
                //scenario 2
                if(this.grid[4][col] == 1 && this.grid[3][col] == 1 && this.grid[2][col] == 1 && this.grid[1][col] == 1){
                    console.log("Player 1 wins!");
                    message = "Game over: Player 1 wins!";
                    
                    
                }
                else if(this.grid[4][col] == 2 && this.grid[3][col] == 2 && this.grid[2][col] == 2 && this.grid[1][col] == 2) {
                    console.log("Player 2 wins!");
                    message = "Game over: Player 2 wins!"
                    
                }
                
    
                //scenario 3
                if(this.grid[3][col] == 1 && this.grid[2][col] == 1 && this.grid[1][col] == 1 && this.grid[0][col] == 1 ){
                    console.log("Player 1 wins!");
                    message = "Game over: Player 1 wins!";
                    
                }
                else if(this.grid[3][col] == 2 && this.grid[2][col] == 2 && this.grid[1][col] == 2 && this.grid[0][col] == 2 ){
                    console.log("Player 2 wins!");
                    message = "Game over: Player 2 wins!"
                    
                }

            }
    
            //check horizontal
            for(let row = 5; row > 0; row--) {
                //scenario 1
                if(this.grid[row][0] == 1 && this.grid[row][1] == 1 && this.grid[row][2] == 1 && this.grid[row][3] == 1){
                    console.log("Player 1 wins!");
                    
                    message = "Game over: Player 1 wins!";
                    
                }
                else if(this.grid[row][0] == 2 && this.grid[row][1] == 2 && this.grid[row][2] == 2 && this.grid[row][3] == 2) {
                    console.log("Player 2 wins!");
                    message = "Game over: Player 2 wins!"
                    
                }
                

                //scenario 2
                if(this.grid[row][1] == 1 && this.grid[row][2] == 1 && this.grid[row][3] == 1 && this.grid[row][4] == 1){
                    console.log("Player 1 wins!");
                    message = "Game over: Player 1 wins!";
                    
                    
                }
                else if(this.grid[row][1] == 2 && this.grid[row][2] == 2 && this.grid[row][3] == 2 && this.grid[row][4] == 2) {
                    console.log("Player 2 wins!");
                    message = "Game over: Player 2 wins!"
                    
                }
                

                //scneario 3
                if(this.grid[row][2] == 1 && this.grid[row][3] == 1 && this.grid[row][4] == 1 && this.grid[row][5] == 1){
                    console.log("Player 1 wins!");
                    message = "Game over: Player 1 wins!";
                    
                }
                else if(this.grid[row][2] == 2 && this.grid[row][3] == 2 && this.grid[row][4] == 2 && this.grid[row][5] == 2) {
                    console.log("Player 2 wins!");
                    message = "Game over: Player 2 wins!"
                    
                }

                //scenario 4
                if(this.grid[row][3] == 1 && this.grid[row][4] == 1 && this.grid[row][5] == 1 && this.grid[row][6] == 1){
                    console.log("Player 1 wins!");
                    message = "Game over: Player 1 wins!";
                    
                }
                else if(this.grid[row][3] == 2 && this.grid[row][4] == 2 && this.grid[row][5] == 2 && this.grid[row][6] == 2) {
                    console.log("Player 2 wins!");
                    message = "Game over: Player 2 wins!"
                    
                }
            }

            document.getElementById("message").innerHTML = message;
            
        },
        lowestMove: function(col) {
            //start at bottom row
            for(var row = 5; row >= 0; row--) {
                //check to see if current row is free
                if(this.grid[row][col] == 0) {
                    //if it is free, return the row index
                    return(row);
                }
            }
        }

    }

})
