class Particle{
    constructor(x,y){
        var op={
            restitution:0.4,
            isStatic:false,
        }
      
        this.body=Bodies.circle(x,y,10,op);
       
        this.color=color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var an=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(an);

        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,5,5);
        pop();
    }
}