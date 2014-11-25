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
		// hardcoded shit
		var realMegas = {'venusaurmega':1,'charizardmegax':1,'charizardmegay':1,'blastoisemega':1,'alakazammega':1,'gengarmega':1,'kangaskhanmega':1,'pinsirmega':1,'gyaradosmega':1,'aerodactylmega':1,'mewtwomegax':1,'mewtwomegay':1,'ampharosmega':1,'scizormega':1,'heracrossmega':1,'houndoommega':1,'tyranitarmega':1,'blazikenmega':1,'gardevoirmega':1,'mawilemega':1,'aggronmega':1,'medichammega':1,'manectricmega':1,'banettemega':1,'absolmega':1,'latiasmega':1,'latiosmega':1,'garchompmega':1,'lucariomega':1,'abomasnowmega':1};
		for (var i in this.data.Pokedex) {
			var template = this.getTemplate(i);
			var baseTemplate = this.getTemplate(template.baseSpecies);
			if (!i in realMegas) {
				this.modData('FormatsData', i).tier = 'M4A';
			}
			this.modData('Pokedex', i).weightkg = template.weightkg || baseTemplate.weightkg;
			this.modData('Pokedex', i).heightm = baseTemplate.weightkg;
		}
	}
}