let groot = document.getElementById("groot1");
let count = document.getElementById("count");
let score = 0;
let counter = 1;
let multi = 1;
let price = 10;

//+1 each click
groot.addEventListener("click", (e) => {
 score += counter * multi;
 checkDisable();
 count.innerText = score;
})

//Price, score and multiplicator upgraded - display changes - disable button when price > score
Array.from(document.getElementsByClassName("btn-multiplier")).map(
 btn => {
  btn.addEventListener("click", (e) => {
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