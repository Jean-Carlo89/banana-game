//let alien = require('../sprites/alien.png') 

export default class Player{
    
   private _x:number;
    private _y:number;
    context:CanvasRenderingContext2D;
    width:number;
    height:number;
    playerDirection:string;
    
    constructor(initialx:number,initialy:number,context:CanvasRenderingContext2D){
        this.context=context
        this._x=initialx;
        this._y=initialy
        //this.context.fillStyle='red'
        
        this.width=50
        this.height=70
    }

    drawPlayer(){
       
        this.context.strokeStyle = "#FF3399";
       // console.log(typeof(alien))
        this.context.drawImage(alien ,this._x-25,this._y,this.width,this.height)
       
        this.context.strokeRect(this._x-25,this._y,this.width, this.height);
       // this.context.rect(this._x-25,this._y,this.width, this.height);
    }

    moveTo(x:number){
        if(x>0){
            alien.src="../src/sprites/alien.png"
        }else{
            alien.src="../src/sprites/alien-2.png"
        }
        console.log('move')
        this._x+= x
        console.log(this.x)
        
    }

    get x() {
        return this._x
    }
        
}

let alien = new Image()
alien.src="../src/sprites/alien.png"
 