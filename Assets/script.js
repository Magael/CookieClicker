let guardianCounter=1;
let score = 0;
let multiplier = 1;
let groot = document.getElementById("groot1");
let price = 10;

let countElement = document.getElementById("count");
groot.addEventListener("click", () => {
	score += guardianCounter * multiplier;
 console.log(score);
 countElement.innerHTML = score;
})

const callMultiplier = (m) => {
		if(score < price*m) return;
		price = price * m
		multiplier = multiplier*m;
		score = score - 10;
		countElement.innerHTML = score;
		
}
 





