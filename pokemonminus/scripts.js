exports.BattleScripts = {
	init: function() {
		// gengar
		this.modData('Pokedex', 'gengar').baseStats['hp'] = 80;
		this.modData('Pokedex', 'gengar').baseStats['atk'] = 95;
		this.modData('Pokedex', 'gengar').baseStats['def'] = 95;
		this.modData('Pokedex', 'gengar').baseStats['spa'] = 95;
		this.modData('Pokedex', 'gengar').baseStats['spd'] = 100;
		this.modData('Pokedex', 'gengar').baseStats['spe'] = 130;
		this.modData('Pokedex', 'gengar').abilities = {0:'Infiltrator',1:'Prankster'};
		this.modData('Learnsets', 'gengar').learnset.encore = ['6L1'];
		// gengar-mega
		this.modData('Pokedex', 'gengarmega').baseStats['hp'] = 80;
		this.modData('Pokedex', 'gengarmega').baseStats['atk'] = 120;
		this.modData('Pokedex', 'gengarmega').baseStats['def'] = 110;
		this.modData('Pokedex', 'gengarmega').baseStats['spa'] = 180;
		this.modData('Pokedex', 'gengarmega').baseStats['spd'] = 115;
		this.modData('Pokedex', 'gengarmega').baseStats['spe'] = 140;
		// kyogre
		this.modData('Pokedex', 'kyogre').baseStats['hp'] = 130;
		this.modData('Pokedex', 'kyogre').baseStats['atk'] = 100;
		this.modData('Pokedex', 'kyogre').baseStats['def'] = 100;
		this.modData('Pokedex', 'kyogre').baseStats['spa'] = 150;
		this.modData('Pokedex', 'kyogre').baseStats['spd'] = 130;
		this.modData('Pokedex', 'kyogre').baseStats['spe'] = 90;
		this.modData('Pokedex', 'kyogre').types = ['Water', 'Ice'];
		this.modData('Learnsets', 'kyogre').learnset.originpulse = ['6L1'];
		// mewtwo
		this.modData('Pokedex', 'mewtwo').baseStats['hp'] = 116;
		this.modData('Pokedex', 'mewtwo').baseStats['atk'] = 120;
		this.modData('Pokedex', 'mewtwo').baseStats['def'] = 90;
		this.modData('Pokedex', 'mewtwo').baseStats['spa'] = 164;
		this.modData('Pokedex', 'mewtwo').baseStats['spd'] = 90;
		this.modData('Pokedex', 'mewtwo').baseStats['spe'] = 140;
		// mewtwo-mega-x
		this.modData('Pokedex', 'mewtwomegax').baseStats['hp'] = 116;
		this.modData('Pokedex', 'mewtwomegax').baseStats['atk'] = 204;
		this.modData('Pokedex', 'mewtwomegax').baseStats['def'] = 115;
		this.modData('Pokedex', 'mewtwomegax').baseStats['spa'] = 130;
		this.modData('Pokedex', 'mewtwomegax').baseStats['spd'] = 115;
		this.modData('Pokedex', 'mewtwomegax').baseStats['spe'] = 140;
		// mewtwo-mega-y
		this.modData('Pokedex', 'mewtwomegay').baseStats['hp'] = 116;
		this.modData('Pokedex', 'mewtwomegay').baseStats['atk'] = 130;
		this.modData('Pokedex', 'mewtwomegay').baseStats['def'] = 90;
		this.modData('Pokedex', 'mewtwomegay').baseStats['spa'] = 204;
		this.modData('Pokedex', 'mewtwomegay').baseStats['spd'] = 120;
		this.modData('Pokedex', 'mewtwomegay').baseStats['spe'] = 160;
		this.modData('Pokedex', 'mewtwomegay').abilities[0] = "Rational";
		// xerneas
		this.modData('Pokedex', 'xerneas').baseStats['hp'] = 136;
		this.modData('Pokedex', 'xerneas').baseStats['atk'] = 131;
		this.modData('Pokedex', 'xerneas').baseStats['def'] = 95;
		this.modData('Pokedex', 'xerneas').baseStats['spa'] = 151;
		this.modData('Pokedex', 'xerneas').baseStats['spd'] = 108;
		this.modData('Pokedex', 'xerneas').baseStats['spe'] = 99;
		this.modData('Pokedex', 'xerneas').types = ['Fairy', 'Grass'];
		this.modData('Learnsets', 'kyogre').learnset.regenerativebeam = ['6L1'];
		this.modData('Learnsets', 'kyogre').learnset.psychic = ['6L1'];
		// Every hidden ability becomes released
		for (var i in this.data.FormatsData) {
			this.modData('FormatsData', i).unreleasedHidden = false;
		}
	}
}