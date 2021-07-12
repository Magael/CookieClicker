let guardianCounter=0;
let groot = document.getElementById("groot1");

//groot.addEventListener("click", e=> {
//	++guardianCounter;
//	console.log(guardianCounter);
//})

let countElement = document.getElementById("count");
    groot.addEventListener("click", e=> {
    ++guardianCounter;
    console.log(guardianCounter);
    countElement.innerHTML = guardianCounter;
})

/*var cps = 0;
var cursorCount = 0;
var cursorCost = 0;

document.getElementById("buyCursorBtn").onclick = function() {
	if (guardianCounter >= cursorCost) {
		guardianCounter -= cursorCost;
		cursorCount++;
		cps++;
	}
}
setInterval(function() {
	guardianCounter += cps;
},1000);

cursorCountElement = document.getElementById("cursorCount");
setInterval(function() {
	guardianCounter += cps;
	countElement.innerHTML = guardianCounter;
},1000);

document.getElementById("buyCursorBtn").onclick = function() {
	guardianCounter -= cursorCost;
	countElement.innerHTML = guardianCounter;
	cursorCount++;
	cursorCountElement.innerHTML = cursorCount;
	cps++;
}*/


