exports.BattleAbilities = {
	"vampiricblade": {
		desc: "When this Pokemon uses a contact move, it will recover 1/6 of it's damage. Liquid Ooze affects this.",
		shortDesc: "1/6 recovery on contact moves.",
		id: "vampiricblade",
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
	"amplifier": {
		desc: "When this Pokemon uses a sound-based attack, the move's Base Power receives a 30% boost.",
		shortDesc: "User's sound moves deal 1.3x damage",
		onBasePowerPriority: 8,
		onBasePower: function (attacker, defender, move) {
			if (move.isSoundBased) {
				return this.chainModify(1.3);
			}
		},
		id: "amplifier",
		name: "Amplifier",
		rating: 4,
		num: -10
	},
	"awakenedpower": {
		desc: "User's in-game Special Attack stat is doubled. When user uses a move with secondary effects, those secondary effects are guaranteed to activate.",
		shortDesc: "User's Special Attack stat is doubled. When user uses a move with secondary effects, those secondary effects are guaranteed to activate.",
		onModifySpAPriority: 5,
		onModifySpA: function (spa, pokemon) {
			return this.chainModify(2);
		},
		onModifyMove: function (move) {
			if (move.secondaries) {
				this.debug('awakenedpower');
				for (var i = 0; i < move.secondaries.length; i++) {
					move.secondaries[i].chance = 100;
				}
			}
		},
		id: "awakenedpower",
		name: "Awakened Power",
		rating: 4,
		num: -11
	},
	"bruteforce": {
		desc: "User's special attacks are calculated using its physical Attack stat.",
		shortDesc: "User's special attacks are calculated using its physical Attack stat.",
		// todo: add here
		id: "bruteforce",
		name: "Brute Force",
		rating: 4,
		num: -12
	},
	"bugjuice": {
		desc: "Immunity to Bug. User's HP is healed by 25% when hit by a Bug-type move.",
		shortDesc: "Immunity to Bug. User's HP is healed by 25% when hit by a Bug-type move.",
		onTryHit: function (target, source, move) {
			if (target !== source && move.type === 'Bug') {
				if (!this.heal(target.maxhp / 4)) {
					this.add('-immune', target, '[msg]');
				}
				return null;
			}
		},
		id: "bugjuice",
		name: "Bug Juice",
		rating: 4,
		num: -13
	},
	"capacitance": {
		desc: "When user uses a contact move, the opponent has a 30% chance of becoming paralyzed.",
		shortDesc: "When user uses a contact move, the opponent has a 30% chance of becoming paralyzed.",
		onModifyMove: function (move) {
			if (!move || !move.isContact) return;
			if (!move.secondaries) {
				move.secondaries = [];
			}
			move.secondaries.push({
				chance: 30,
				status: 'par'
			});
		},
		id: "capacitance",
		name: "Capacitance",
		rating: 4,
		num: -14
	},
}