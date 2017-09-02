//Scope Safe basicCard Constructor
var ClozeCard = function(text,cloze){
	//check scope of this
	if(this instanceof ClozeCard){

		this.cloze = cloze;
		this.fullText = text;

		//call finction createPartial
		this.partial  = createPartial(text,cloze);

		//if returned partical value is the same as text value then throw error
		if(this.partial === text){
			this.partial = "Error! - \"" + cloze + "\" does not appear in \"" + text + "\"";
		}		
	}else{
		return new ClozeCard(text, cloze);
	}
};

//pull the partical value from string
function createPartial(text, cloze){
	var clozeReplaceUnderscore  = "";

	//create an underscore to replace the cloze value
	for (var i = 0; i < cloze.length; i++){
		clozeReplaceUnderscore += "_";
	}

	//replace close value with new underscore
	var partialValue = text.replace(cloze, clozeReplaceUnderscore);
	
			
	return partialValue;
};


module.exports = ClozeCard;