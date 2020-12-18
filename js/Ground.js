class Ground{
    constructor(x,y,width,height,tp){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.tp = tp
        this.wd = width;
        this.ht = height;
        World.add(myWorld,this.body);
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        noStroke();
        if (this.tp ===1)
            fill("brown");
            else
            fill('yellow')
        rect(pos.x,pos.y,this.wd,this.ht);
    }
}