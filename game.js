var colors = generate(6);

var div_color = document.querySelectorAll(".alpha_div");
var pickedColor = pickColor();
h1ee = document.querySelector("h1")
colorDisplay = document.querySelector(".colorpicked")
colorDisplay.innerHTML = pickedColor
//Logic for displaying color
for(var i = 0; i < div_color.length ; i++){
	div_color[i].style.backgroundColor = colors[i];
	div_color[i].addEventListener("click" , function(){
		var pickcolor = this.style.backgroundColor;
		//Print out if color is right
		if(pickcolor == pickedColor){
			document.querySelector(".wrong").innerHTML = "Right";
			changeColors(pickedColor);
			h1ee.style.backgroundColor = pickedColor;
		}else{
			this.style.backgroundColor = "#285481";
			document.querySelector(".wrong").innerHTML = "Try Again"
		}
	});
} 

function changeColors(color) {
	//loop through all squares
	for(var i = 0; i < div_color.length; i++) {
		//change each color to match given color
		div_color[i].style.background = color;
	}
};
function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}
 function generate(num){
 	var earr = []
 	for(var i = 0;i< num;i++){
 		earr.push(randomColor());
 	}
 	return earr;
 }

 function randomColor(){
 	var r = Math.floor(Math.random()*256);
 	var g = Math.floor(Math.random()*256);
 	var y = Math.floor(Math.random()*256);
 	return "rgb(" + r + ", " + g + ", " + y + ")";
 }