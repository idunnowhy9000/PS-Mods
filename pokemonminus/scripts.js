exports.BattleScripts = {
	init: function() {
		// gengar
		this.modData('Pokedex', 'gengar').baseStats = {hp:80,atk:95,def:95,spa:95,spd:100,spe:130};
		this.modData('Pokedex', 'gengar').abilities = {0:'Infiltrator',1:'Prankster'};
		this.modData('Learnsets', 'gengar').learnset.encore = ['6L1'];
		// gengar-mega
		this.modData('Pokedex', 'gengarmega').baseStats = {hp:80,atk:120,def:110,spa:180,spd:115,spe:140};
		// kyogre
		this.modData('Pokedex', 'kyogre').baseStats = {hp:130,atk:100,def:100,spa:150,spd:130,spe:90};
		this.modData('Pokedex', 'kyogre').types = ['Water', 'Ice'];
		this.modData('Learnsets', 'kyogre').learnset.originpulse = ['6L1'];
		// mewtwo
		this.modData('Pokedex', 'mewtwo').baseStats = {hp:116,atk:120,def:90,spa:164,spd:90,spe:140};
		// mewtwo-mega-x
		this.modData('Pokedex', 'mewtwomegax').baseStats = {hp:116,atk:204,def:115,spa:130,spd:115,spe:140};
		// mewtwo-mega-y
		this.modData('Pokedex', 'mewtwomegay').baseStats = {hp:116,atk:130,def:90,spa:204,spd:120,spe:160};
		this.modData('Pokedex', 'mewtwomegay').abilities[0] = "Rational";
		// xerneas
		this.modData('Pokedex', 'xerneas').baseStats = {hp:136,atk:131,def:95,spa:151,spd:108,spe:99};
		this.modData('Pokedex', 'xerneas').types = ['Fairy', 'Grass'];
		this.modData('Learnsets', 'kyogre').learnset.regenerativebeam = ['6L1'];
		this.modData('Learnsets', 'kyogre').learnset.psychic = ['6L1'];
		// Every hidden ability becomes released
		for (var i in this.data.FormatsData) {
			this.modData('FormatsData', i).unreleasedHidden = false;
		}
	}
}