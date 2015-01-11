exports.BattleFormats = {
	megamania: {
		effectType: 'Banlist',
		validateSet: function (set, format, isNonstandard) {
			// validate abilities
			var template = this.getTemplate(set.species || set.name),
				legalAbility = false;
			for (var i in template.abilities) {
				if (set.ability === template.abilities[i]) legalAbility = true;
			}
			if (this.getItem(set.item).id !== "megastone" && !legalAbility) return [(set.name || set.species) + " cannot have " + set.ability + "."];
			else {
				// validate banned abilities
				var bannedAbilities = {'Arena Trap':1,'Huge Power':1,'Imposter':1,'Parental Bond':1,'Pure Power':1,'Shadow Tag':1,'Wonder Guard':1};
				if (set.ability in bannedAbilities) {
					
					
					for (var i in template.abilities) {
						
					}
					if (!legalAbility && ) return ['The ability ' + set.ability + ' is banned on Pokémon that do not naturally have it.'];
				}
			}
		},
	}
}