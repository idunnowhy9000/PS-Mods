/*
* Add this to you battle-engine.js file after line ~202
* "this.item = toId(set.item);", and before
* line ~203 "this.abilityData = {id: this.ability};"
*/
this.canMegaEvo = (this.battle.getItem(this.item).megaEvolves === this.baseTemplate.baseSpecies);
for (var i in this.baseTemplate.otherFormes) {
	formTemp = this.getTemplate(this.baseTemplate.otherFormes[i]);
	if (((formTemp.forme === 'Mega-X' && this.item === 'charizarditex') || (formTemp.forme === 'Mega-Y' && this.item === 'charizarditey') || (formTemp.forme === 'Mega' && this.item === 'abomasite')) && formTemp.tier === 'M4A') {
		this.canMegaEvo = true;
	}
}