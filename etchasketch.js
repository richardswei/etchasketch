function makeSquaresInDrawingPad(id, dimensionsXY){
	var dimOfWindowToUse = window.innerHeight>window.innerWidth ?
		window.innerWidth : window.innerHeight;
	var sizeOfDrawingPad = Math.floor(dimOfWindowToUse*0.8);
	var sizeOfSquares = sizeOfDrawingPad/dimensionsXY;
	setSizeOfDrawingContainer(id, sizeOfDrawingPad);
	var drawingPad = document.createElement("div");
		drawingPad.setAttribute("id", "drawingPad");
	document.getElementById(id).appendChild(drawingPad);
	
	for(var i = 0; i<dimensionsXY*dimensionsXY; i++) {
		var squareID = "square"+i;
		var squareDiv = document.createElement("div");
			squareDiv.setAttribute("class", "etchSquare");
			squareDiv.setAttribute("id", squareID);
		drawingPad.appendChild(squareDiv);
		squareDiv.style.height = sizeOfSquares+"px";
		squareDiv.style.width = sizeOfSquares+"px";
		squareDiv.style.transform = "translate("+100*(i%dimensionsXY)+"%, "+
			100*Math.floor(i/dimensionsXY)+"%)";
		squareDiv.style.float = "left";
		squareDiv.style.position = "absolute";
		squareDiv.style.opacity = 0.2;
		squareDiv.style.backgroundColor = "black";
		squareDiv.addEventListener("mouseover", function(){
			var opacity = parseFloat(this.style.opacity);
			this.style.opacity = (opacity>=0.9) ? 1 : opacity + 0.1;
		})
	}
}

function setSizeOfDrawingContainer(id, size){
	var drawingContainer = document.getElementById(id);
		drawingContainer.style.height = size +"px";
		drawingContainer.style.width = size +"px";
		drawingContainer.style.position = "absolute";
		drawingContainer.style.top = "50%";
		drawingContainer.style.left = "50%";
		drawingContainer.style.transform = "translate(-50%, -50%)";
		drawingContainer.style.backgroundColor = "#888";
		drawingContainer.style.boxShadow = "0px 0px 30px 5px gray"
}

