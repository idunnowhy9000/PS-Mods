exports.BattleScripts = {
	init: function () {
		// All of the shit here are in the official Flavourmons thread
		// NOTES:
		// - If Pokemon Dex entries mentioned high speed, give it extreme speed
		this.modData('Pokedex','garchomp').types = ['Dragon','Flying'];
		this.modData('Learnsets','escavalier').learnset.extremespeed = ['6L1'];
		this.modData('Learnsets','sharpedo').learnset.extremespeed = ['6L1'];
		this.modData('Movedex','outrage').type = 'Fire';
		this.modData('Pokedex','dragonair').abilities[1] = 'Air Lock';
		this.modData('Learnsets','pidgeot').learnset.extremespeed = ['6L1'];
		this.modData('Learnsets','sharpedo').learnset.theif = ['6L1'];
		this.modData('Pokedex','salamence').types = ['Dragon','Flying','Fire'];
		this.modData('Pokedex','salamencemega').types = ['Dragon','Flying','Fire'];
		this.modData('Learnsets','skarmory').learnset.extremespeed = ['6L1'];
		this.modData('Pokedex','tyranitar').abilities[1] = 'Wonder Guard';
		this.modData('Pokedex','regice').abilities[1] = 'Flash Fire';
		this.modData('Pokedex','lugia').abilities[1] = 'Drizzle';
		this.modData('Learnsets','tyranitar').learnset.rockwreaker = ['6L1'];
		this.modData('Learnsets','zapdos').learnset.hurricane = ['6L1'];
		this.modData('Pokedex','latias').abilities[1] = 'Illusion';
		this.modData('Learnsets','ampharos').learnset.tailglow = ['6L1'];
		this.modData('Pokedex','flygon').abilities[1] = 'Sand Stream';
	}
}