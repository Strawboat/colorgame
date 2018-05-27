var colors = [
			 "rgb(255, 0, 0)",
			 "rgb(255, 255, 199)",
			 "rgb(255, 0, 255)",
			 "rgb(255, 255, 0)",
			 "rgb(255, 0, 255)",
			 "rgb(255, 255, 255)",
			 
			 ]

var div_color = document.querySelectorAll(".alpha_div");
var pickedColor = pickColor();

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