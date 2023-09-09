//your JS code here. If required.
let button = document.getElementById("incrementBtn");
let numbers = document.getElementById("counter");
var count = 0;

counter.innerHTML = count;
button.addEventListener("click",myfunction);
function myfunction(){
	alert(count);
	count++;
	counter.innerHTML = count;
}