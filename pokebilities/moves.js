exports.BattleMovedex = {
	roleplay: {
		inherit: true,
		onTryHit: function (target, source) {
			var bannedAbilities = {flowergift:1, forecast:1, illusion:1, imposter:1, multitype:1, trace:1, wonderguard:1, zenmode:1};
			for (var i in target.abilities){
				if (bannedAbilities[target.abilities[i]]) return false;
			}
			for (var i in source.abilities){
				if (bannedAbilities[source.abilities[i]]) return false;
			}
		},
		onHit: function (target, source) {
			for (var i in target.abilities){
				if (target.abilities[i] && source.setAbilitySlot(i, target.abilities[i])) {
					this.add('-ability', source, source.ability, '[from] move: Role Play', '[of] ' + target);
					return;
				}
			}
			return false;
		}
	},
	entrainment: {
		inherit: true,
		onTryHit: function (target, source) {
			if (target === source) return false;
			var bannedTargetAbilities = {multitype:1, stancechange:1, truant:1};
			for (var i in target.abilities){
				if (bannedTargetAbilities[target.abilities[i]]) return false;
			}
			var bannedSourceAbilities = {flowergift:1, forecast:1, illusion:1, imposter:1, multitype:1, stancechange:1, trace:1, zenmode:1};
			for (var i in source.abilities){
				if (bannedSourceAbilities[source.abilities[i]]) return false;
			}
		},
		onHit: function (target, source) {
			for (var i in target.abilities){
				if (source.abilities[i] && target.setAbilitySlot(i, source.abilities[i])) {
					this.add('-ability', target, target.abilities[i]);
					return;
				}
			}
			return false;
		}
	},
	skillswap: {
		inherit: true,
		onTryHit: function (target, source) {
			var bannedAbilities = {illusion:1, multitype:1, stancechange:1, wonderguard:1};
			for (var i in target.abilities){
				if (bannedAbilities[target.abilities[i]]) return false;
			}
			for (var i in source.abilities){
				if (bannedAbilities[source.abilities[i]]) return false;
			}
		},
		onHit: function (target, source, move) {
			for (var i in target.abilities){
				var targetAbility = target.abilities[i];
				var sourceAbility = source.abilities[i];
				if (!(targetAbility && sourceAbility) || targetAbility.id === sourceAbility.id) continue;
				if (!target.setAbilitySlot(i, sourceAbility, source, move, true) || !source.setAbilitySlot(i, targetAbility, source, move, true)) {
					target.abilities[i] = targetAbility;
					source.abilities[i] = sourceAbility;
					continue;
				}
				this.add('-activate', source, 'move: Skill Swap', this.getAbility(targetAbility), this.getAbility(sourceAbility), '[of] ' + target);
			}
		}
	},
	worryseed: {
		inherit: true,
		onTryHit: function (pokemon) {
			var bannedAbilities = {multitype:1, stancechange:1, truant:1};
			for (var i in pokemon.abilities[i]){
				if (bannedAbilities[pokemon.abilities[i]]) {
					return false;
				}
			}
		},
		onHit: function (pokemon) {
			if (pokemon.setAbilitySlot(0,'insomnia')) {
				this.add('-ability', pokemon, 'Insomnia', '[from] move: Worry Seed');
				pokemon.setAbilitySlot('1','');
				pokemon.setAbilitySlot('H','');
				if (pokemon.status === 'slp') {
					pokemon.cureStatus();
				}
				return;
			}
			return false;
		}
	},
	simplebeam: {
		inherit: true,
		onTryHit: function (pokemon) {
			var bannedAbilities = {multitype:1, stancechange:1, truant:1};
			for (var i in pokemon.abilities[i]){
				if (bannedAbilities[pokemon.abilities[i]]) {
					return false;
				}
			}
		},
		onHit: function (pokemon) {
			if (pokemon.setAbilitySlot(0,'simple')) {
				this.add('-ability', pokemon, 'Simple', '[from] move: Simple Beam');
				pokemon.setAbilitySlot('1','');
				pokemon.setAbilitySlot('H','');
				return;
			}
			return false;
		}
	},
	gastroacid: {
		inherit: true,
		onTryHit: function (pokemon) {
			var bannedAbilities = {multitype:1, stancechange:1};
			for (var i in pokemon.abilities){
				if (bannedAbilities[pokemon.abilities[i]]) {
					return false;
				}
			}
		},
		effect: {
			onStart: function (pokemon) {
				this.add('-endability', pokemon);
			},
			onModifyPokemonPriority: 2,
			onModifyPokemon: function (pokemon) {
				pokemon.ignore['Ability'] = true;
			}
		}
	}
};