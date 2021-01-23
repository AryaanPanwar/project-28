class Tree{

constructor(x,y,w,h){

this.x=x;
this.y=y;
this.w=w;
this.h=h;
this.image=loadImage("tree.jpg");
this.body=Bodies.rectangle(this.x,this.y,this.w,this.h,{isStatic:true});
World.add(world,this.body);

}

display(){
var treepos=this.body.position;

push();
translate(treepos.x,treepos.y);
fill("green");
tree.scale=1.5;
image(this.image,0,0,this.w,this.h);
pop();

}










}