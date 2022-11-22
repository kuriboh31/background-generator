var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
// to test the code if it is working by using the developer's tool
// console.log(css);
// console.log(color1);
// console.log(color2);
var body = document.getElementById("gradient");


// color1.addEventListener("input", function(){
// 	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
// })
// color2.addEventListener("input", function(){
// 	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
// })

// OR to make it short

function setGradient(){
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background + ";";
}
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);