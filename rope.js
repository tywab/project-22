class Rope{
	constructor(body1,body2,pointA,pointB){
		this.pointA=pointA;
		this.pointB=pointB;
		var option={
			pointA:pointA,
			bodyA:body1, 
			bodyB:body2,
			pointB:pointB
		}
		console.log(option)
		this.body=Constraint.create(option);
		World.add(world,this.body);
	}
	display(){
			var pointA=this.pointA;
			var pointB=this.pointB;
			strokeWeight(2);
			line(pointA.x,pointA.y,pointB.x,pointB.y);	
	}

}
