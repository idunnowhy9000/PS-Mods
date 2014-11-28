exports.BattleScripts = {
	runMegaEvo: function (pokemon) {
		var side = pokemon.side;
		var item = this.getItem(pokemon.item);
		if (!item.megaStone) return false;
		if (side.megaEvo) return false;
		var template = this.getTemplate(item.megaStone);
		if (!template.isMega) return false;
		if (pokemon.baseTemplate.baseSpecies !== template.baseSpecies) {
			var formTemp = false;
			for (var i in pokemon.baseTemplate.otherFormes) {
				formTemp = this.getTemplate(pokemon.baseTemplate.otherFormes[i]);
				if (formTemp.isMega) {
					if ((formTemp.forme === 'Mega-X' && item.id === 'charizarditex') || (formTemp.forme === 'Mega-Y' && item.id === 'charizarditey') || (formTemp.forme === 'Mega' && item.id === 'abomasite')) {
						template = formTemp;
						break;
					}
				}
			}
			if (!formTemp) return false;
		}

		// okay, mega evolution is possible
		pokemon.formeChange(template);
		pokemon.baseTemplate = template; // mega evolution is permanent :o
		pokemon.details = template.species + (pokemon.level === 100 ? '' : ', L' + pokemon.level) + (pokemon.gender === '' ? '' : ', ' + pokemon.gender) + (pokemon.set.shiny ? ', shiny' : '');
		this.add('detailschange', pokemon, pokemon.details);
		this.add('message', template.baseSpecies + " has Mega Evolved into Mega " + template.baseSpecies + "!");
		pokemon.setAbility(template.abilities['0']);
		pokemon.baseAbility = pokemon.ability;

		side.megaEvo = 1;
		for (var i = 0; i < side.pokemon.length; i++) side.pokemon[i].canMegaEvo = false;
		return true;
	},
	init: function () {
		// learnsets
		this.modData('Learnsets', 'accelgor').learnset.toxicspikes = ['6L1'];
		this.modData('Learnsets', 'amoonguss').learnset.darkpulse = ['6L1'];
		this.modData('Learnsets', 'arbok').learnset.dragondance = ['6L1'];
		this.modData('Learnsets', 'arbok').learnset.dragonrush = ['6L1'];
		this.modData('Learnsets', 'arbok').learnset.venomdrench = ['6L1'];
		this.modData('Learnsets', 'arcanine').learnset.batonpass = ['6L1'];
		this.modData('Learnsets', 'arcanine').learnset.healingwish = ['6L1'];
		this.modData('Learnsets', 'arcanine').learnset.nobleroar = ['6L1'];
		this.modData('Learnsets', 'arcanine').learnset.blazekick = ['6L1'];
		this.modData('Learnsets', 'articuno').learnset.aeroblast = ['6L1'];
		this.modData('Learnsets', 'articuno').learnset.waterpulse = ['6L1'];
		this.modData('Learnsets', 'articuno').learnset.shadowball = ['6L1'];
		this.modData('Learnsets', 'audino').learnset.chatter = ['6L1'];
		this.modData('Learnsets', 'audino').learnset.boomburst = ['6L1'];
		this.modData('Learnsets', 'audino').learnset.bugbuzz = ['6L1'];
		this.modData('Learnsets', 'aurorus').learnset.moonlight = ['6L1'];
		this.modData('Learnsets', 'aurorus').learnset.powergem = ['6L1'];
		this.modData('Learnsets', 'avalugg').learnset.heavyslam = ['6L1'];
		this.modData('Learnsets', 'bibarel').learnset.stealthrock = ['6L1'];
		this.modData('Learnsets', 'bibarel').learnset.slackoff = ['6L1'];
		this.modData('Learnsets', 'basculin').learnset.closecombat = ['6L1'];
		this.modData('Learnsets', 'basculin').learnset.vacuumwave = ['6L1'];
		this.modData('Learnsets', 'basculin').learnset.poisonfang = ['6L1'];
		this.modData('Learnsets', 'basculin').learnset.coil = ['6L1'];
		this.modData('Learnsets', 'basculin').learnset.icefang = ['6L1'];
		this.modData('Learnsets', 'beedrill').learnset.megahorn = ['6L1'];
		this.modData('Learnsets', 'beedrill').learnset.bravebird = ['6L1'];
		this.modData('Learnsets', 'beheeyem').learnset.flashcannon = ['6L1'];
		this.modData('Learnsets', 'bellossom').learnset.quiverdance = ['6L1'];
		this.modData('Learnsets', 'bellossom').learnset.flamethrower = ['6L1'];
		this.modData('Learnsets', 'bellossom').learnset.fireblast = ['6L1'];
		this.modData('Learnsets', 'bellossom').learnset.moonblast = ['6L1'];
		this.modData('Learnsets', 'bellossom').learnset.drainingkiss = ['6L1'];
		this.modData('Learnsets', 'blissey').learnset.moonblast = ['6L1'];
		// hardcoded shit
		for (var i in this.data.Pokedex) {
			var template = this.getTemplate(i);
			var baseTemplate = this.getTemplate(template.baseSpecies);
			this.modData('Pokedex', i).weightkg = template.weightkg || baseTemplate.weightkg;
			this.modData('Pokedex', i).heightm = baseTemplate.weightkg;
		}
	}
}