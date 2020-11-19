class Stone{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:1,
            friction:0.1,
            density:1
        }
        this.body=Bodies.circle(x,y,r,options);
        this.x=x;
        this.y=y;
        this.r=r;
        
        World.add(world,this.body)
        this.image=loadImage("stone.png");

    }

    display(){

        var pos=this.body.position;
        //pos.x=mouseX
        //pos.y=mouseY
        

        imageMode(RADIUS);
        image(this.image,pos.x,pos.y,this.r*2,this.r*2);

    }
}