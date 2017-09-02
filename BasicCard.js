
//Scope Safe basicCard Constructor
var BasicCard = function(front,back){
	//check scope of this
	if(this instanceof BasicCard){
		this.front = front;
		this.back = back;
	}else{
		return new BasicCard(front, back);
	}
};
module.exports = BasicCard;