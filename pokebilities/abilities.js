exports.BattleAbilities = {
	"trace": {
		inherit: true,
		onUpdate: function (pokemon) {
			var trace = -1;
			for (var i in pokemon.baseAbilities){
				this.debug("Ability " + i + " is " + pokemon.baseAbilities[i]);
				if (pokemon.baseAbilities[i] === 'Trace'){
					this.debug("Found Trace in ability " + i);
					trace = i;
					break;
				}
			}
			if (trace === -1){
				this.debug("Did not find Trace");
				return;
			}
			var possibleTargets = [];
			for (var i = 0; i < pokemon.side.foe.active.length; i++) {
				if (pokemon.side.foe.active[i] && !pokemon.side.foe.active[i].fainted) possibleTargets.push(pokemon.side.foe.active[i]);
			}
			var ability = null;
			while (possibleTargets.length) {
				var rand = 0;
				if (possibleTargets.length > 1) rand = this.random(possibleTargets.length);
				var target = possibleTargets[rand];
				ability = target.abilities[trace];
				this.debug("Trace wants to copy Ability " + ability + " in its Slot " + trace);
				var bannedAbilities = {flowergift:1, forecast:1, illusion:1, imposter:1, multitype:1, stancechange:1, trace:1, zenmode:1};
				if (bannedAbilities[ability]) {
					possibleTargets.splice(rand, 1);
					continue;
				}
				this.add('-ability', pokemon, ability, '[from] ability: Trace', '[of] ' + target);
				pokemon.setAbilitySlot(trace,ability);
				return;
			}
		}
	},
	"mummy": {
		onAfterDamage: function (damage, target, source, move) {
			if (source && source !== target && move && move.isContact) {
				var bannedAbilities = {multitype:1, stancechange:1};
				for (var i in source.abilities){
					if (bannedAbilities[source.abilities[i]]) {
						return;
					}
					if (source.abilities[i] === this){
						continue;
					}
					var oldAbility = source.setAbilitySlot(i, '', source, '', true);
					if (oldAbility) {
						this.add('-endability', source, oldAbility, '[from] Mummy')
						this.add('-ability', source, 'Mummy', '[from] Mummy');
					}
				}
				source.setAbilitySlot(0, 'mummy', source, 'mummy', true);
			}
		},
	}
};