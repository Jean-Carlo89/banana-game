import { clear } from "console";
import Player from "./player";

export default class Game{
    
  
  canvas: HTMLCanvasElement;
  context:CanvasRenderingContext2D;
  player:Player;
  gameIntervalId:number;
  

    constructor(canvas:HTMLCanvasElement) {
       
        this.canvas = canvas;
        this.context = canvas.getContext("2d");
      }

    start(){
      console.log('aqui')
      
      this.canvas.width=350
      this.canvas.height=500
     
      this.player = new Player(this.canvas.width/2,420,this.context)
      this.drawLine()
      this.player.drawPlayer()

      clearInterval(this.gameIntervalId)

      this.gameIntervalId = window.setInterval(() => this.gameLoop(), 1000 / 60);
    }

    gameLoop(){
      this.clearScreen();
      this.player.drawPlayer()
      this.drawLine()
    }

    drawLine(){
      this.context.beginPath();
      this.context.moveTo(25, 450);
      this.context.lineTo(325, 450);
      this.context.strokeStyle = "white";
      this.context.stroke();
    }
    clearScreen(){
         this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
     }

    movePlayer(e:KeyboardEvent){
     
      if(e.key === "ArrowRight" && this.player.x+5<=300) {
    
        this.player.moveTo(5)
        
        console.log('direita')
      } 

      if(e.key !== "ArrowRight" && this.player.x-5>-5){
          this.player.moveTo(-5)
          
          console.log('esquerda')
      }
        

    }
}