let groot = document.getElementById("groot1");
let count = document.getElementById("count");
let score = 0;
let counter = 1;
let multi = 1;
let price = 10;

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

x();

//+1 each click
groot.addEventListener("click", (e) => {
	x();
 score += counter * multi;
 checkDisable();
 count.innerText = score;
})

//Price, score and multiplicator upgraded - display changes - disable button when price > score
Array.from(document.getElementsByClassName("btn-multiplier")).map(
 btn => {
  btn.addEventListener("click", (e) => {
			x();
   let myPrice = price * e.target.dataset.multiplier;
   price += score; 
   score -= myPrice;
   multi *= e.target.dataset.multiplier;
   checkDisable();
   pricing();
   count.previousSibling.textContent = `x${multi} :`;
  });
 }
)

//if score > price => button is displayed
const checkDisable = () => {
 Array.from(document.getElementsByClassName("btn-multiplier")).map(btn => {
  if(score < price * btn.dataset.multiplier) return btn.disabled = true;
  btn.disabled = false;
 })
}


//uprage the price of all multipliers
const pricing = () => {
 Array.from(document.getElementsByClassName("btn-multiplier")).map(btn => btn.previousSibling.textContent = `Price: ${price * btn.dataset.multiplier}`)
}

pricing();

const autoClick = () => {
	pricing();
  let count = 1;
  let autoClickMethod = setInterval(function(){
			x();
		document.getElementById("btn-auto").value = 30 - count;
  score += counter;
  document.getElementById("count").textContent = score;
  if(count == 30) {
			clearInterval(autoClickMethod);
			return document.getElementById("btn-auto").value = "auto click";
		}
  count++;
  }, 1000);
}

const bonusClick = () => {
	pricing();
  let count = 1;
  let autoClickMethod = setInterval(function(){
			x();
		document.getElementById("btn-scoreBonus").value = 30 - count;
  counter = score;
  document.getElementById("count").textContent = score;
  if(count == 30) {
			clearInterval(autoClickMethod);
			counter = 1;
			return document.getElementById("btn-scoreBonus").value = "bonus clicker"
		};
  count++;
  }, 1000);

	}

