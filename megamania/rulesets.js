exports.BattleFormats = {
	megamania: {
		validateSet: function (set, format, isNonstandard) {
			// validate names
			if (!set.name) return;
			set.name = set.name.replace(/[^\u0000-\u007F]/g, ''); // use only ascii chars for name
			// set ability to nickname's (ignore illegal abilities)
			var abilities = set.name.split("/"),
				baseAbility = abilities[0],
				megaAbility = abilities[1];
			// check abilities exists (mega abilities are checked when mega evolving)
			if (this.getAbility(baseAbility).exists) {
				set.ability = baseAbility;
			} else {
				if (!set.ability) set.ability = template.abilities[0];
			}
			// validate banned abilities
			var bannedAbilities = {'Arena Trap':1,'Huge Power':1,'Imposter':1,'Parental Bond':1,'Pure Power':1,'Shadow Tag':1,'Wonder Guard':1};
			if (megaAbility in bannedAbilities) {
				return ['The ability ' + set.ability + ' is banned on all Mega Pokémon'];
			}
		},
	}
}
