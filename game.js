var colors = [
			 "rgb(255, 0, 0)",
			 "rgb(255, 255, 199)",
			 "rgb(255, 0, 255)",
			 "rgb(255, 255, 0)",
			 "rgb(255, 0, 255)",
			 "rgb(255, 255, 255)",
			 
			 ]

var div_color = document.querySelectorAll(".alpha_div");
var pickedColor = colors[3];

colorDisplay = document.querySelector(".colorpicked")
colorDisplay.innerHTML = pickedColor
//Logic for displaying color
for(var i = 0; i < div_color.length ; i++){
	div_color[i].style.backgroundColor = colors[i];
	div_color[i].addEventListener("click" , function(){
		var pickcolor = this.style.backgroundColor;
		//Print out if color is right
		if(pickcolor == pickedColor){
			document.querySelector(".wrong").innerHTML = "Right"
		}else{
			this.style.backgroundColor = "#285481";
			document.querySelector(".wrong").innerHTML = "Try Again"
		}
	});
} 