export default class Player{
    
   private _x:number;
    private _y:number;
    context:CanvasRenderingContext2D;
    constructor(width:number,height:number,context:CanvasRenderingContext2D){
        this.context=context
        this._x=width;
        this._y=height
        this.context.fillStyle='red'
    }

    drawPlayer(){
       
        this.context.fillRect(this._x,this._y, 50, 30);
    }

    moveTo(x:number){
        console.log('move')
        this._x+= x
        console.log(this.x)
        
    }

    get x() {
        return this._x
    }
        
}

