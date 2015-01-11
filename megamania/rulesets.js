exports.BattleFormats = {
	megamania: {
		effectType: 'Banlist',
		validateSet: function (set, format, isNonstandard) {
			// validate banned abilities
			var bannedAbilities = {'Arena Trap':1,'Huge Power':1,'Imposter':1,'Parental Bond':1,'Pure Power':1,'Shadow Tag':1,'Wonder Guard':1};
			if (set.ability in bannedAbilities) {
				var template = this.getTemplate(set.species || set.name);
				var legalAbility = false;
				for (var i in template.abilities) {
					if (set.ability === template.abilities[i]) legalAbility = true;
				}
				if (!legalAbility && this.getItem(set.item).id === "megastone") return ['The ability ' + set.ability + ' is banned on Pokémon that do not naturally have it.'];
			}
		},
	}
}