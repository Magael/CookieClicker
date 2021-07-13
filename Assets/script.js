let guardianCounter=1;
let score = 0;
let multiplier = 1;
let groot = document.getElementById("groot1");
let price = 0;


//groot.addEventListener("click", e=> {
//	++guardianCounter;
//	console.log(guardianCounter);
//})
document.getElementById("groot1").src="/Assets/img/babygroot.png";
let countElement = document.getElementById("count");
groot.addEventListener("click", () => {
	score += guardianCounter * multiplier;
 console.log(score);
 x();
 countElement.innerHTML = score;
})

const callMultiplier = (m) => {
		if(score < price*m) return;
		price = price * m
		multiplier = multiplier*m;
		score = score - 10;
		countElement.innerHTML = score;
		x();

}

let x = () => {
if ( score >= 1000) {
	document.getElementById("groot1").src="/Assets/img/guardiansgroup.png";
} else if ( score >= 720) {
	document.getElementById("groot1").src="/Assets/img/peterquill3.png";
} else if ( score >= 650) {
	document.getElementById("groot1").src="/Assets/img/peterquill2.png";
} else if ( score >= 580) {
	document.getElementById("groot1").src="/Assets/img/peterquill.png";
} else if ( score >= 510) {
	document.getElementById("groot1").src="/Assets/img/gamora3.png";
} else if ( score >= 450) {
	document.getElementById("groot1").src="/Assets/img/gamora2.png";
} else if ( score >= 390) {
	document.getElementById("groot1").src="/Assets/img/gamora.png";
} else if ( score >= 330) {
	document.getElementById("groot1").src="/Assets/img/drax2.png";
} else if ( score >= 280) {
	document.getElementById("groot1").src="/Assets/img/drax1.png";
} else if ( score >= 230) {
	document.getElementById("groot1").src="/Assets/img/drax.png";
} else if ( score >= 180) {
	document.getElementById("groot1").src="/Assets/img/rocket2.png";
} else if ( score >= 140) {
	document.getElementById("groot1").src="/Assets/img/rocket1.png";
} else if ( score >= 100) {
	document.getElementById("groot1").src="/Assets/img/rocket.png";
} else if ( score >= 60) {
	document.getElementById("groot1").src="/Assets/img/babygroot2.png";
}  else if ( score >= 30) {
	document.getElementById("groot1").src="/Assets/img/groot.png";
} else {
	document.getElementById("groot1").src="/Assets/img/babygroot.png";
}}