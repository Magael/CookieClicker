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
  let count = 1;
  let autoClickMethod = setInterval(function(){
  score += counter;
  document.getElementById("count").textContent = score;
  if(count == 30) clearInterval(autoClickMethod);
  count++;
  }, 1000);
}



