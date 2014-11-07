exports.BattleAbilities = {
	"rational": {
		desc: "Will raise the user's Sp.Atk stat one level when hit by any Dark-type moves. Unlike other abilities with immunity to certain typed moves, the user will still receive damage from the attack. Justified will raise Attack one level for each hit of a multi-hit move like Beat Up.",
		shortDesc: "This Pokemon's Sp.Atk is boosted by 1 after it is damaged by a Dark-type attack.",
		onAfterDamage: function (damage, target, source, effect) {
			if (effect && effect.type === 'Dark') {
				this.boost({spa:1});
			}
		},
		id: "rational",
		name: "Rational",
		rating: 2,
		num: -100
	},
	"unnerve": {
		inherit: true,
		onFoeEatItem: true,
		desc: "When this Pokemon enters the field, the Sp. Attack stat of each of its opponents lowers by one stage.",
		shortDesc: "On switch-in, this Pokemon lowers adjacent foes' Sp. Attack by 1.",
		onStart: function (pokemon) {
			var foeactive = pokemon.side.foe.active;
			for (var i = 0; i < foeactive.length; i++) {
				if (!foeactive[i] || !this.isAdjacent(foeactive[i], pokemon)) continue;
				if (foeactive[i].volatiles['substitute']) {
					// does it give a message?
					//this.add('-activate', foeactive[i], 'Substitute', 'ability: Unnerve', '[of] ' + pokemon);
					this.add('-activate', foeactive[i], 'Substitute', 'ability: Unnerve', '[of] ' + pokemon);
				} else {
					//this.add('-ability', pokemon, 'Unnerve', '[of] ' + foeactive[i]);
					this.add('-message', foeactive[i].name + '\'s Sp. Attack fell!');
					this.boost({spa: -1}, foeactive[i], pokemon);
				}
			}
		},
	},
	"multitype": {
		inherit: true,
		onResidualOrder: 5,
		onResidualSubOrder: 2,
		onResidual: function (pokemon) {
			if (this.getItem(pokemon.item).onPlate) {
				this.heal(pokemon.maxhp / 16);
			}
		},
	},
	"rebirth": {
		desc: "When user faints, the pokemon switched in will be healed completely.",
		shortDesc: "When user faints, the pokemon switched in will be healed completely.",
		id: "rebirth",
		name: "Rebirth",
		rating: 2,
		num: -101
	},
	"blitzingideal": {
		desc: "Electric moves get 50% boost, gives 25% boost to all other physical moves",
		shortDesc: "Electric moves get 50% boost, gives 25% boost to all other physical moves",
		id: "blitzingideal",
		name: "Blitzing Ideal",
		onBasePowerPriority: 8,
		onBasePower: function (basePower, pokemon, target, move) {
			if (move.type === 'Electric' || move.id === 'yinblast') {
				return this.chainModify(1.5);
			}
			if (move.isContact) {
				return this.chainModify(1.25);
			}
		}
		rating: 2,
		num: -102
	},
	"magician": {
		inherit: true,
		onBasePowerPriority: 4,
		onBasePower: function (basePower, pokemon, target) {
			var item = target.getItem();
			var noKnockOff = ((item.onPlate && target.baseTemplate.baseSpecies === 'Arceus') ||
				(item.onDrive && target.baseTemplate.baseSpecies === 'Genesect') || (item.onTakeItem && item.onTakeItem(item, target) === false));
			if (item.id && !noKnockOff) {
				return this.chainModify(1.5);
			}
		},
		onAfterHit: function (target, source) {
			if (source.hp) {
				var item = target.getItem();
				if (item.id === 'mail') {
					target.setItem('');
				} else {
					item = target.takeItem(source);
				}
				if (item) {
					this.add('-enditem', target, item.name, '[from] move: Knock Off', '[of] ' + source);
				}
			}
		},
	}
}