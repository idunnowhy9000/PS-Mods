exports.BattleScripts = {
	runMegaEvo: function (pokemon) {
		var side = pokemon.side;
		var item = this.getItem(pokemon.item);
		if (!item.megaStone) return false;
		if (side.megaEvo) return false;
		var template = this.getTemplate(item.megaStone);
		if (!template.isMega) return false;
		if (pokemon.baseTemplate.baseSpecies !== template.baseSpecies) {
			for (var i in pokemon.baseTemplate.otherFormes) {
				var formTemp = this.getTemplate(pokemon.baseTemplate.otherFormes[i]);
				if (formTemp.isMega) {
					if ((formTemp.forme === 'Mega-X' && item.id === 'charizarditex') || (formTemp.forme === 'Mega-Y' && item.id === 'charizarditey') || (formTemp.forme === 'Mega' && item.id === 'abomasite')) {
						template = formTemp;
					}
				}
			}
			return false;
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
}