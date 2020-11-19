class Mango{
    constructor(x,y,r){
        var options={
            isStatic:true,
            restitution:0,
            
            density:1
        }
        this.body=Bodies.circle(x,y,r,options);
        this.x=x;
        this.y=y;
        this.r=r;
        
        World.add(world,this.body)
        this.image=loadImage("mango.png");

    }

    display(){

        var pos=this.body.position;

        imageMode(RADIUS);
        image(this.image,pos.x,pos.y,this.r*2,this.r*2);

    }
}