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
		name: "rational",
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
		desc: "If this Pokemon is Arceus, its type and sprite change to match its held Plate. Either way, this Pokemon is holding a Plate, the Plate cannot be taken (such as by Trick or Thief). This ability cannot be Skill Swapped, Role Played or Traced.",
		shortDesc: "If this Pokemon is Arceus, its type changes to match its held Plate.",
		// Multitype's type-changing itself is implemented in statuses.js
		onTakeItem: function (item) {
			if (item.onPlate) return false;
		},
		onResidualOrder: 5,
		onResidualSubOrder: 2,
		onResidual: function (pokemon) {
			if (this.getItem(pokemon.item).onPlate) {
				this.heal(pokemon.maxhp / 16);
			}
		},
		id: "multitype",
		name: "Multitype",
		rating: 4,
		num: 121
	},
}