class Bob{
    constructor(x,y,r){
        var option={
            restitution:1.4,
            friction:1.0,
            density:0.1,
            isStatic:false
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x,this.y,(this.r-20)/2,option);
        World.add(world,this.body);
    }
    display(){
        var bobpos=this.body.position;
        push()
        translate(bobpos.x,bobpos.y);
        ellipseMode(RADIUS);
        fill("white");
        ellipse(0,0,this.r,this.r)
        pop()
    }
}