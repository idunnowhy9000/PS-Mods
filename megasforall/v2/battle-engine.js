/*
* Add this to you battle-engine.js file after line ~202
* "this.item = toId(set.item);", and before
* line ~203 "this.abilityData = {id: this.ability};"
*/
this.canMegaEvo = ((this.battle.getItem(this.item).megaEvolves === this.baseTemplate.baseSpecies) || (forme && forme.isMega && forme.requiredMove && this.set.moves.indexOf(toId(forme.requiredMove)) > -1) || (this.battle.getTemplate(this.baseTemplate.baseSpecies + this.battle.getItem(this.item).m4aEvolves).tier === 'M4A'));
