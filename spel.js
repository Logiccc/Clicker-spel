/* element för manipulation */
var button = document.getElementById("clickerbutton");
var wormKnapp = document.getElementById("worm");
var scoreDiv = document.getElementById("score");
var powerText = document.getElementById("powerText");
var scoreText = document.createElement("p");
var sillKnapp = document.getElementById("sill");
var laxKnapp = document.getElementById("lax");



/* spelvariabler */
var clickValue = 1;
var wormClicks = 0;
var bank = 0;
var wormCost = 15;
var sillCost = 75;
var sill = null;
var lax = null;
var laxCost = 250;



/* start */
scoreText.textContent = "Points: 0";
wormKnapp.textContent = "worm: " + Math.floor(wormCost);
sillKnapp.textContent = "sill: " + Math.floor(sillCost);
laxKnapp.textContent = "lax: " + Math.floor(laxCost);

/* click event + logic */
button.addEventListener("click", function() {
	bank += clickValue; // lägg till värdet vid click
	scoreText.textContent = "Points: " + Math.floor(bank); // sätt textvärdet i p elementet till bank.
	if (wormClicks <= 0) {
		wormClicks--;
	}
	else {
		clickValue = 1;
	}
});

scoreDiv.appendChild(scoreText); // fäst p elementet i score diven.

wormKnapp.addEventListener("click", function() {
	if (bank >= wormCost) {
		console.log("köpte worm");
		clickValue += 0.1;
		bank -= wormCost;
		wormCost *= 1.5;
		powerText.textContent = "Med lite mask ska de nog gå fortare att få upp lire fisk! :-P";
		scoreText.textContent = "Points: " + Math.floor(bank); // sätt textvärdet i p elementet till bank.
		wormKnapp.textContent = "worm: " + Math.floor(wormCost);
		
	} else {
		powerText.textContent = "Du har inte råd med worm";
	}
});

sillKnapp.addEventListener("click", function(){
	if (bank >= sillCost) {
		console.log("lidl Sill");
		bank -= sillCost;
		clickValue *= 1.2;
		sillCost *= 1.75;
		powerText.textContent = "Sicken baddare du fick upp! En liren Sill!";
		scoreText.textContent = "Points : " + Math.floor(bank);
		sillKnapp.textContent = "sill: " + Math.floor(sillCost);	
		
		} else {
			powerText.textContent = "Du har nicht råd med en litn sillfan";
		}

	scoreText.textContent = "Points: " + Math.floor(bank);	
}, true);

laxKnapp.addEventListener("click", function(){ 
	if (bank >= laxCost) {
		console.log("Stor LaxN");
		bank -=  laxCost;
		clickValue *= 77;
		laxCost *= 7;
		powerText.textContent = "Nämen Jisses sicken jäkla baddare! Stor LaxN!!! >:D";
		scoreText.textContent = "Points: " + Math.floor(bank);
		laxKnapp.textContent = "lax: " + Math.floor(laxCost);
		} else {
			powerText.textContent = "Du hast nicht das roden med das laxenfaust! D:<";
		}	
}, true)

