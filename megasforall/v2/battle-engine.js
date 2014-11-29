/*
* Add this to your battle-engine.js file
* Replace it with line ~205 "this.canMegaEvo..."
* With this line
*/
this.canMegaEvo = ((this.battle.getItem(this.item).megaEvolves === this.baseTemplate.baseSpecies) || (forme && forme.isMega && forme.requiredMove && this.set.moves.indexOf(toId(forme.requiredMove)) > -1) || (this.battle.getTemplate(this.baseTemplate.baseSpecies + this.battle.getItem(this.item).m4aEvolves).tier === 'M4A'));