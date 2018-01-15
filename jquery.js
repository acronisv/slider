function $(some){
	var elements = document.querySelectorAll(some);
	return new jquery(elements);
}


function jquery(elements){
	this.elements = elements;

	this.on = function (){
		console.log('on')
	}
	this.addClass = function (classname){
		for (var i=0; i<this.elements.length; i++){
			this.elements[i].classList.add(classname);
		}
	}
}