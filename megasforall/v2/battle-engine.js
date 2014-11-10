/*
* Add this to you battle-engine.js file after line ~202
* "this.item = toId(set.item);", and before
* line ~203 "this.abilityData = {id: this.ability};"
*/
this.canMegaEvo = (this.battle.getItem(this.item).megaEvolves === this.baseTemplate.baseSpecies);
if (this.baseTemplate.tier === "M4A") {
	var itemId = this.battle.getItem(this.item).id;
	switch (itemId) {
		case "charizarditex":
			this.canMegaEvo = (this.baseTemplate.forme === "Mega-X");
		break;
		case "charizarditey":
			this.canMegaEvo = (this.baseTemplate.forme === "Mega-Y");
		break;
		case "abomasite":
			this.canMegaEvo = (this.baseTemplate.forme === "Mega");
		break;
		default:
		break;
	}
}