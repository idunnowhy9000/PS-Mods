exports.BattleScripts = {
	init: function () {
		// All of the shit here are in the official Flavourmons thread
		// NOTES:
		// - If Pokemon Dex entries mentioned high speed, give it extreme speed
		// Page 1
		this.modData('Pokedex','garchomp').types = ['Dragon','Flying'];
		this.modData('Learnsets','escavalier').learnset.extremespeed = ['6L1'];
		this.modData('Learnsets','sharpedo').learnset.extremespeed = ['6L1'];
		this.modData('Movedex','outrage').type = 'Fire';
		this.modData('Pokedex','dragonair').abilities[1] = 'Air Lock';
		this.modData('Learnsets','pidgeot').learnset.extremespeed = ['6L1'];
		this.modData('Learnsets','sharpedo').learnset.theif = ['6L1'];
		this.modData('Pokedex','salamence').types = ['Dragon','Flying','Fire'];
		this.modData('Pokedex','salamencemega').types = ['Dragon','Flying','Fire'];
	}
}