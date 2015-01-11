exports.BattleScripts = {
	canMegaEvo: function (pokemon) {
		var side = pokemon.side;
		if (side.megaEvo) return false;
		
 		var otherForme;
		var template;
		if (pokemon.baseTemplate.otherFormes) otherForme = this.getTemplate(pokemon.baseTemplate.otherFormes[0]);
		if (otherForme && otherForme.isMega && otherForme.requiredMove) {
			if (pokemon.moves.indexOf(toId(otherForme.requiredMove)) < 0) return false;
			template = otherForme;
		} else {
			var item = this.getItem(pokemon.item);
			if (item.id === 'megastone') {
				if (pokemon.side.sideConditions["megamania"].megas[pokemon.id]) return false;
			} else {
				if (!item.megaStone) return false;
				template = this.getTemplate(item.megaStone);
				if (pokemon.baseTemplate.baseSpecies !== template.baseSpecies) return false;
			}
		}
		if (!template.isMega) return false;
		var foeActive = side.foe && side.foe.active;
		if (foeActive) {
			for (var i = 0; i < foeActive.length; i++) {
				if (!foeActive[i] || !foeActive[i].volatiles['skydrop'] || foeActive[i].volatiles['skydrop'].source !== pokemon) continue;
				return false;
			}
		}
		
		return template;
	},
	
	runMegaEvo: function (pokemon) {
		if (!pokemon.canMegaEvo) return false;

		var otherForme;
		var template;
		var item;
		if (pokemon.baseTemplate.otherFormes) otherForme = this.getTemplate(pokemon.baseTemplate.otherFormes[0]);
		if (otherForme && otherForme.isMega && otherForme.requiredMove) {
			if (pokemon.moves.indexOf(toId(otherForme.requiredMove)) < 0) return false;
			template = otherForme;
		} else {
			item = this.getItem(pokemon.item);
			if (item.id !== 'megastone') {
				if (!item.megaStone) return false;
				template = this.getTemplate(item.megaStone);
				if (pokemon.baseTemplate.baseSpecies !== template.baseSpecies) return false;
			}
		}
		
		if (!template.isMega) return false;

		var side = pokemon.side;
		var foeActive = side.foe.active;
		for (var i = 0; i < foeActive.length; i++) {
			if (foeActive[i].volatiles['skydrop'] && foeActive[i].volatiles['skydrop'].source === pokemon) {
				return false;
			}
		}

		// okay, mega evolution is possible
		
		if (item.id === 'megastone') {
			// check previous mega evolution
			if (pokemon.side.sideConditions["megamania"].megas[pokemon.id]) return false;
			// change stat
			for (var statName in pokemon.baseStats) {
				var stat = pokemon.baseStats[statName], newStat = stat;
				if (pokemon.set.shiny) {
					if (statName === 'atk') newStat += 30;
					if (statName === 'spa') newStat += 10;
				} else {
					if (statName === 'atk') newStat += 10;
					if (statName === 'spa') newStat += 30;
				}
				if (statName === 'spe'
					|| statName === 'def'
					|| statName === 'spd') newStat += 20;
				stat = newStat;
			}
			// add mega to team data
			if (!pokemon.side.sideConditions["megamania"]) pokemon.side.addSideCondition("megamania");
			pokemon.side.sideConditions["megamania"].megas[pokemon.id] = true;
			// make mega
			this.add('-mega', pokemon, template.baseSpecies, item);
		} else {
			pokemon.formeChange(template);
			pokemon.baseTemplate = template; // mega evolution is permanent :o
			pokemon.details = template.species + (pokemon.level === 100 ? '' : ', L' + pokemon.level) + (pokemon.gender === '' ? '' : ', ' + pokemon.gender) + (pokemon.set.shiny ? ', shiny' : '');
			this.add('detailschange', pokemon, pokemon.details);
			this.add('-mega', pokemon, template.baseSpecies, item);
			var oldAbility = pokemon.ability;
			pokemon.setAbility(template.abilities['0']);
			pokemon.baseAbility = pokemon.ability;
		}

		for (var i = 0; i < side.pokemon.length; i++) side.pokemon[i].canMegaEvo = false;
		return true;
	},
};