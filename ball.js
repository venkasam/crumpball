class Ball{
constructor(x,y,r){
var option={
    "isStatic":false,
    'density':1.2,
    'restitution':.4

}
this.image=loadImage("paper.png")
this.body=Bodies.circle(x,y,r,option)
this.r=r
this.x=x
this.y=y
World.add(world,this.body)


}
display(){
var pos = this.body.position;
var angle = this.body.angle;
push();
translate(pos.x, pos.y);
//rotate(angle);
imageMode(CENTER);
fill("green");
image(this.image,0,0,this.r);
pop();

}
}