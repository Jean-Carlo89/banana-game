import Game from './entities/Game'
import Player from './entities/player'


const canvas  : HTMLCanvasElement = document.querySelector("#canvas")

 
const game = new Game(canvas)

game.start()

//player.drawPlayer()


// ===>Game mouse move
 


 window.addEventListener("keydown",(e)=>{
     game.movePlayer(e)
})

window.addEventListener("click",(e)=>{
    game.start()
})

// //game loop
// const gameIntervalId = setInterval(() => gameLoop(), 1000 / 60);

// function gameLoop(){
//     renderGame() 
   
    
// }

// function renderGame(){
    
//         clearScreen();
//         player.drawPlayer();
//        // console.log('draw and clear')
//        // enemies.forEach((enemy) => enemy.draw());
//         //friends.forEach((friend) => friend.draw());
      
// }

// function clearScreen(){
//     context.clearRect(0, 0, canvas.width, canvas.height);
// }


