let groot = document.getElementById("groot1");
let count = document.getElementById("count");
let score = 0;
let counter = 1;
let multi = 1;
let price = 10;

let x = () => {
if ( score >= 4915200) {
	document.getElementById("groot1").src="Assets/img/guardiansgroup.png";

} else if ( score >= 2457600) {
	document.getElementById("groot1").src="Assets/img/peterquill3.png";
} else if ( score >= 1228800) {
	document.getElementById("groot1").src="Assets/img/peterquill2.png";
} else if ( score >= 614400) {
	document.getElementById("groot1").src="Assets/img/peterquill.png";
} else if ( score >= 307200) {
	document.getElementById("groot1").src="Assets/img/gamora3.png";
} else if ( score >= 153600) {
	document.getElementById("groot1").src="Assets/img/gamora2.png";
} else if ( score >= 76800) {
	document.getElementById("groot1").src="Assets/img/gamora.png";
} else if ( score >= 38400) {
	document.getElementById("groot1").src="Assets/img/drax2.png";
} else if ( score >= 19200) {
	document.getElementById("groot1").src="Assets/img/drax1.png";
} else if ( score >= 9600) {
	document.getElementById("groot1").src="Assets/img/drax.png";
} else if ( score >= 4800) {
	document.getElementById("groot1").src="Assets/img/rocket2.png";
} else if ( score >= 2400) {
	document.getElementById("groot1").src="Assets/img/rocket1.png";
} else if ( score >= 1200) {
	document.getElementById("groot1").src="Assets/img/rocket.png";
} else if ( score >= 600) {
	document.getElementById("groot1").src="Assets/img/babygroot2.png";
}  else if ( score >= 300) {
	document.getElementById("groot1").src="Assets/img/groot.png";
} else {
	document.getElementById("groot1").src="Assets/img/babygroot.png";
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
   let myPrice = price * e.target.dataset.multiplier/10;
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
 Array.from(document.querySelectorAll("input")).map(btn => {
  if(score < price * btn.dataset.multiplier) return btn.disabled = true;
  btn.disabled = false;
 })
}


//uprage the price of all multipliers
const pricing = () => {
 Array.from(document.querySelectorAll("input")).map(btn => btn.previousSibling.textContent = `Price: ${price * btn.dataset.multiplier}`)
}

pricing();

const autoClick = () => {
	checkDisable();
	pricing();
  let count = 1;
  let autoClickMethod = setInterval(function(){
			document.getElementById("btn-auto").disabled = true;
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
	checkDisable();
	pricing();
  let count = 1;
  let autoClickMethod = setInterval(function(){
			document.getElementById("btn-scoreBonus").disabled = true;
			x();
		document.getElementById("btn-scoreBonus").value = 30 - count;
  counter = score;
  document.getElementById("count").textContent = score;
  if(count == 30) {
			clearInterval(autoClickMethod);
			counter = 1;
			return document.getElementById("btn-scoreBonus").value = "bonus clicker";
		};
  count++;
  }, 1000);

	}

const bonusPrice = () => {

}