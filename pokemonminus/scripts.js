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
		this.modData('Learnsets', 'xerneas').learnset.regenerativebeam = ['6L1'];
		this.modData('Learnsets', 'xerneas').learnset.psychic = ['6L1'];
		// arceus
		this.modData('Pokedex', 'arceus').baseStats['hp'] = 130;
		this.modData('Pokedex', 'arceus').baseStats['atk'] = 130;
		this.modData('Pokedex', 'arceus').baseStats['def'] = 130;
		this.modData('Pokedex', 'arceus').baseStats['spa'] = 130;
		this.modData('Pokedex', 'arceus').baseStats['spd'] = 130;
		this.modData('Pokedex', 'arceus').baseStats['spe'] = 130;
		this.modData('Pokedex', 'arceus').abilities['H'] = "Protean";
		this.modData('Learnsets', 'arceus').learnset.batonpass = ['6L1'];
		this.modData('Learnsets', 'arceus').learnset.nastyplot = ['6L1'];
		this.modData('Learnsets', 'arceus').learnset.taunt = ['6L1'];
		this.modData('Learnsets', 'arceus').learnset.bulkup = ['6L1'];
		// blaziken
		this.modData('Pokedex', 'blaziken').baseStats['hp'] = 85;
		this.modData('Pokedex', 'blaziken').baseStats['atk'] = 145;
		this.modData('Pokedex', 'blaziken').baseStats['def'] = 75;
		this.modData('Pokedex', 'blaziken').baseStats['spa'] = 145;
		this.modData('Pokedex', 'blaziken').baseStats['spd'] = 75;
		this.modData('Pokedex', 'blaziken').baseStats['spe'] = 115;
		this.modData('Pokedex', 'blaziken').abilities[0] = "Competitive";
		this.modData('Pokedex', 'blaziken').abilities[1] = "Defiant";
		this.modData('Learnsets', 'blaziken').learnset.closecombat = ['6L1'];
		this.modData('Learnsets', 'blaziken').learnset.aurasphere = ['6L1'];
		this.modData('Learnsets', 'blaziken').learnset.darkpulse = ['6L1'];
		// blaziken-mega
		this.modData('Pokedex', 'blazikenmega').baseStats['hp'] = 85;
		this.modData('Pokedex', 'blazikenmega').baseStats['atk'] = 145;
		this.modData('Pokedex', 'blazikenmega').baseStats['def'] = 75;
		this.modData('Pokedex', 'blazikenmega').baseStats['spa'] = 145;
		this.modData('Pokedex', 'blazikenmega').baseStats['spd'] = 75;
		this.modData('Pokedex', 'blazikenmega').baseStats['spe'] = 115;
		// landorus
		this.modData('Pokedex', 'landorus').baseStats['hp'] = 89;
		this.modData('Pokedex', 'landorus').baseStats['atk'] = 135;
		this.modData('Pokedex', 'landorus').baseStats['def'] = 100;
		this.modData('Pokedex', 'landorus').baseStats['spa'] = 125;
		this.modData('Pokedex', 'landorus').baseStats['spd'] = 80;
		this.modData('Pokedex', 'landorus').baseStats['spe'] = 111;
		this.modData('Pokedex', 'landorus').abilities[1] = "Mold Breaker";
		this.modData('Learnsets', 'landorus').learnset.thousandwaves = ['6L1'];
		this.modData('Learnsets', 'landorus').learnset.taunt = ['6L1'];
		this.modData('Learnsets', 'landorus').learnset.defog = ['6L1'];
		this.modData('Learnsets', 'landorus').learnset.airslash = ['6L1'];
		// landorus-therian
		this.modData('Pokedex', 'landorustherian').baseStats['hp'] = 89;
		this.modData('Pokedex', 'landorustherian').baseStats['atk'] = 165;
		this.modData('Pokedex', 'landorustherian').baseStats['def'] = 100;
		this.modData('Pokedex', 'landorustherian').baseStats['spa'] = 105;
		this.modData('Pokedex', 'landorustherian').baseStats['spd'] = 80;
		this.modData('Pokedex', 'landorustherian').baseStats['spe'] = 101;
		this.modData('Pokedex', 'landorustherian').abilities['H'] = "Sand Rush";
		// palkia
		this.modData('Pokedex', 'palkia').baseStats['hp'] = 100;
		this.modData('Pokedex', 'palkia').baseStats['atk'] = 110;
		this.modData('Pokedex', 'palkia').baseStats['def'] = 100;
		this.modData('Pokedex', 'palkia').baseStats['spa'] = 179;
		this.modData('Pokedex', 'palkia').baseStats['spd'] = 130;
		this.modData('Pokedex', 'palkia').baseStats['spe'] = 110;
		this.modData('Pokedex', 'palkia').abilities[1] = 'Lightning Rod';
		this.modData('Learnsets', 'palkia').learnset.meteormash = ['6L1'];
		this.modData('Learnsets', 'palkia').learnset.moonblast = ['6L1'];
		this.modData('Learnsets', 'palkia').learnset.moonlight = ['6L1'];
		this.modData('Learnsets', 'palkia').learnset.calmmind = ['6L1'];
		this.modData('Learnsets', 'palkia').learnset.freezedry = ['6L1'];
		// groudon
		this.modData('Pokedex', 'groudon').baseStats['hp'] = 130;
		this.modData('Pokedex', 'groudon').baseStats['atk'] = 150;
		this.modData('Pokedex', 'groudon').baseStats['def'] = 140;
		this.modData('Pokedex', 'groudon').baseStats['spa'] = 100;
		this.modData('Pokedex', 'groudon').baseStats['spd'] = 110;
		this.modData('Pokedex', 'groudon').baseStats['spe'] = 90;
		this.modData('Pokedex', 'groudon').types = ["Ground", "Fire"];
		this.modData('Learnsets', 'groudon').learnset.magneticslam = ['6L1'];
		// ho-oh
		this.modData('Pokedex', 'hooh').baseStats['hp'] = 106;
		this.modData('Pokedex', 'hooh').baseStats['atk'] = 140;
		this.modData('Pokedex', 'hooh').baseStats['def'] = 110;
		this.modData('Pokedex', 'hooh').baseStats['spa'] = 110;
		this.modData('Pokedex', 'hooh').baseStats['spd'] = 164;
		this.modData('Pokedex', 'hooh').baseStats['spe'] = 90;
		this.modData('Pokedex', 'hooh').abilities['0'] = "Rebirth";
		this.modData('Pokedex', 'hooh').abilities['1'] = "Magic Guard";
		this.modData('Pokedex', 'hooh').abilities['H'] = "Regenerator";
		this.modData('Learnsets', 'hooh').learnset.wildcharge = ['6L1'];
		this.modData('Learnsets', 'hooh').learnset.superpower = ['6L1'];
		this.modData('Learnsets', 'hooh').learnset.cleansingrainbow = ['6L1'];
		// klefki
		this.modData('Pokedex', 'klefki').baseStats['hp'] = 97;
		this.modData('Pokedex', 'klefki').baseStats['atk'] = 80;
		this.modData('Pokedex', 'klefki').baseStats['def'] = 129;
		this.modData('Pokedex', 'klefki').baseStats['spa'] = 120;
		this.modData('Pokedex', 'klefki').baseStats['spd'] = 139;
		this.modData('Pokedex', 'klefki').baseStats['spe'] = 75;
		this.modData('Learnsets', 'klefki').learnset.moonblast = ['6L1'];
		this.modData('Learnsets', 'klefki').learnset.darkpulse = ['6L1'];
		this.modData('Learnsets', 'klefki').learnset.thunderbolt = ['6L1'];
		this.modData('Learnsets', 'klefki').learnset.vacuumwave = ['6L1'];
		this.modData('Learnsets', 'klefki').learnset.taunt = ['6L1'];
		this.modData('Learnsets', 'klefki').learnset.encore = ['6L1'];
		this.modData('Learnsets', 'klefki').learnset.rapidspin = ['6L1'];
		// zekrom
		this.modData('Pokedex', 'zekrom').baseStats['hp'] = 110;
		this.modData('Pokedex', 'zekrom').baseStats['atk'] = 155;
		this.modData('Pokedex', 'zekrom').baseStats['def'] = 125;
		this.modData('Pokedex', 'zekrom').baseStats['spa'] = 120;
		this.modData('Pokedex', 'zekrom').baseStats['spd'] = 120;
		this.modData('Pokedex', 'zekrom').baseStats['spe'] = 90;
		this.modData('Pokedex', 'zekrom').abilities['H'] = "Blitzing Ideal";
		this.modData('Learnsets', 'zekrom').learnset.icepunch = ['6L1'];
		this.modData('Learnsets', 'zekrom').learnset.knockoff = ['6L1'];
		this.modData('Learnsets', 'zekrom').learnset.earthquake = ['6L1'];
		// gothitelle
		this.modData('Pokedex', 'gothitelle').baseStats['hp'] = 100;
		this.modData('Pokedex', 'gothitelle').baseStats['atk'] = 55;
		this.modData('Pokedex', 'gothitelle').baseStats['def'] = 110;
		this.modData('Pokedex', 'gothitelle').baseStats['spa'] = 110;
		this.modData('Pokedex', 'gothitelle').baseStats['spd'] = 130;
		this.modData('Pokedex', 'gothitelle').baseStats['spe'] = 95;
		this.modData('Pokedex', 'gothitelle').types = ["Psychic","Dark"];
		this.modData('Learnsets', 'gothitelle').learnset.encore = ['6L1'];
		this.modData('Learnsets', 'gothitelle').learnset.lovelykiss = ['6L1'];
		// lugia
		this.modData('Pokedex', 'lugia').baseStats['hp'] = 111;
		this.modData('Pokedex', 'lugia').baseStats['atk'] = 90;
		this.modData('Pokedex', 'lugia').baseStats['def'] = 133;
		this.modData('Pokedex', 'lugia').baseStats['spa'] = 107;
		this.modData('Pokedex', 'lugia').baseStats['spd'] = 179;
		this.modData('Pokedex', 'lugia').baseStats['spe'] = 110;
		this.modData('Pokedex', 'lugia').types = ["Flying","Water"];
		this.modData('Learnsets', 'lugia').learnset.scald = ['6L1'];
		this.modData('Learnsets', 'lugia').learnset.surf = ['6L1'];
		this.modData('Learnsets', 'lugia').learnset.hurricane = ['6L1'];
		// rayquaza
		this.modData('Pokedex', 'rayquaza').baseStats['atk'] = 160;
		this.modData('Pokedex', 'rayquaza').baseStats['spa'] = 160;
		this.modData('Pokedex', 'rayquaza').baseStats['spe'] = 115;
		this.modData('Learnsets', 'rayquaza').learnset.azurestrike = ['6L1'];
		// scizor
		this.modData('Pokedex', 'scizor').baseStats['hp'] = 100;
		this.modData('Pokedex', 'scizor').baseStats['atk'] = 140;
		this.modData('Pokedex', 'scizor').baseStats['def'] = 110;
		this.modData('Pokedex', 'scizor').baseStats['spe'] = 115;
		this.modData('Pokedex', 'scizor').abilities[1] = 'Iron Fist';
		this.modData('Learnsets', 'scizor').learnset.drainpunch = ['6L1'];
		this.modData('Learnsets', 'scizor').learnset.thunderpunch = ['6L1'];
		// scizor-mega
		this.modData('Pokedex', 'scizormega').baseStats['hp'] = 100;
		this.modData('Pokedex', 'scizormega').baseStats['atk'] = 165;
		this.modData('Pokedex', 'scizormega').baseStats['def'] = 155;
		this.modData('Pokedex', 'scizormega').baseStats['spd'] = 125;
		this.modData('Pokedex', 'scizormega').baseStats['spe'] = 115;
		this.modData('Pokedex', 'scizormega').abilities[0] = 'Tough Claws';
		// darkrai
		this.modData('Pokedex', 'darkrai').baseStats['hp'] = 90;
		this.modData('Pokedex', 'darkrai').baseStats['atk'] = 100;
		this.modData('Pokedex', 'darkrai').baseStats['spa'] = 145;
		this.modData('Learnsets', 'darkrai').learnset.nightdaze = ['6L1'];
		this.modData('Learnsets', 'darkrai').learnset.gunkshot = ['6L1'];
		this.modData('Learnsets', 'darkrai').learnset.knockoff = ['6L1'];
		// deoxys-n
		// deoxys-a
		// deoxys-d
		// deoxys-s
		// dialga
		this.modData('Pokedex', 'dialga').baseStats['atk'] = 110;
		this.modData('Pokedex', 'dialga').baseStats['def'] = 130;
		this.modData('Pokedex', 'dialga').baseStats['spa'] = 170;
		this.modData('Pokedex', 'dialga').baseStats['spe'] = 100;
		this.modData('Pokedex', 'dialga').abilities[1] = "Regenerator";
		this.modData('Learnsets', 'dialga').learnset.doomdesire = ['6L1'];
		this.modData('Learnsets', 'dialga').learnset.futuresight = ['6L1'];
		this.modData('Learnsets', 'dialga').learnset.morningsun = ['6L1'];
		this.modData('Learnsets', 'dialga').learnset.calmmind = ['6L1'];
		// yveltal
		this.modData('Pokedex', 'yveltal').baseStats['hp'] = 136;
		this.modData('Pokedex', 'yveltal').baseStats['atk'] = 136;
		this.modData('Pokedex', 'yveltal').baseStats['def'] = 100;
		this.modData('Pokedex', 'yveltal').baseStats['spa'] = 136;
		this.modData('Pokedex', 'yveltal').baseStats['spd'] = 100;
		this.modData('Pokedex', 'yveltal').baseStats['spe'] = 109;
		this.modData('Learnsets', 'yveltal').learnset.knockoff = ['6L1'];
		this.modData('Learnsets', 'yveltal').learnset.bravebird = ['6L1'];
		this.modData('Learnsets', 'yveltal').learnset.nastyplot = ['6L1'];
		this.modData('Learnsets', 'yveltal').learnset.willowisp = ['6L1'];
		// Every hidden ability becomes released
		for (var i in this.data.FormatsData) {
			this.modData('FormatsData', i).unreleasedHidden = false;
		}
	}
}