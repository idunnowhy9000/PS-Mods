exports.BattleAbilities = {
	"vampiricblade": {
		desc: "When this Pokemon uses a contact move, it will recover 1/6 of it's damage. Liquid Ooze affects this.",
		shortDesc: "1/6 recovery on contact moves.",
		id: "vampiricblade",
		isNonstandard: true,
		name: "Vampiric Blade",
		onModifyMove: function (move) {
			if(move.isContact) move.drain = [1, 6];
		},
		rating: 4,
		num: -5
	},
	"unadaptable": {
		desc: "This Pokemon's attacks that doesn't recieve STAB hits for 66%",
		shortDesc: "This Pokemon's attacks that doesn't recieve STAB hits for 66%",
		isNonstandard: true,
		onBasePowerPriority: 8,
		onBasePower: function (basePower, attacker, defender, move) {
			if(!move.hasSTAB){
				this.debug('Unadaptable weaken');
				return this.chainModify(0.66);
			}
		},
		id: "unadaptable",
		name: "Unadaptable",
		rating: 2,
		num: -6
	},
	"awareness": {
		desc: "This Pokemon is immune to entry hazards (Stealth Rock, Spikes,...) damage.",
		shortDesc: "This Pokemon is immune to entry hazards damage.",
		id: "awareness",
		name: "Awareness",
		isNonstandard: true,
		onDamage: function (damage, target, source, effect) {
			var entryHazards = {'stealthrock':1,'spikes':1};
			if (effect && effect.id in entryHazards) {
				return false;
			}
		},
		rating: 4,
		num: -7
	},
	"castrophany": {
		desc: "When this Pokemon uses a sound-based attack, the move's Base Power receives a 50% boost.",
		shortDesc: "This Pokemon's sound-based attack gets boosted by 1.5x",
		isNonstandard: true,
		onBasePowerPriority: 8,
		onBasePower: function (attacker, defender, move) {
			if (move.isSoundBased) {
				return this.chainModify(1.5);
			}
		},
		id: "castrophany",
		name: "Castrophany",
		rating: 4,
		num: -8
	},
	"gritpower": {
		desc: "When this Pokemon is poisoned (including Toxic), burned, paralyzed or asleep (including self-induced Rest), its Sp. Attack stat receives a 50% boost",
		shortDesc: "If this Pokemon is statused, its Sp. Attack is 1.5x",
		isNonstandard: true,
		onModifySpAPriority: 5,
		onModifySpA: function (spa, pokemon) {
			if (pokemon.status) {
				return this.chainModify(1.5);
			}
		},
		id: "gritpower",
		name: "Grit Power",
		rating: 4,
		num: -9
	},
}