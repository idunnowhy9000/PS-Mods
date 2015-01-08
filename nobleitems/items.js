exports.BattleItems = {
	blackbelt: {
		inherit: true,
		onBasePower: function (basePower, attacker, defender, move) {
			if (move.type === 'Fighting') {
				return this.chainModify(1.3);
			}
		},
		desc: "Boosts the power of fighting moves by 30% and raises their critical hit ratio one stage."
	},
	fistplate: {
		inherit: true,
		onBasePower: function (basePower, attacker, defender, move) {
			if (move.isPunchAttack) {
				return this.chainModify(1.5);
			}
		},
		desc: "Boosts punching moves and kicking moves by 50%."
	},
	expertbelt: {
		inherit: true,
		onBasePower: function (basePower, attacker, defender, move) {
			// todo
			if (target.runEffectiveness(move) <= 0) {
				
			}
		},
		desc: "The holder's super effective hits are 50% stronger, but ineffective hits are halved in damage."
	},
	muscleband: {
		inherit: true,
		onModifyAtkPriority: 5,
		onModifyAtk: function (atk) {
			return this.chainModify(1.5);
		},
		onModifySpe: function (speMod) {
			return this.chain(speMod, 0.3);
		},
		desc: "Boosts this Pokemon's attack by 50%, but lowers speed by 33%."
	},
	icicleplate: {
		inherit: true,
		onModifyMove: function (move, pokemon) {
			if (move.isPunchAttack) {
				move.type = 'Ice';
				pokemon.addVolatile('icicleplate');
			}
		},
		effect: {
			duration: 1,
			onBasePowerPriority: 8,
			onBasePower: function (basePower, pokemon, target, move) {
				return this.chainModify(1.5);
			}
		},
		desc: "Holder's punching and kicking moves become Ice-type and have their base power multiplied by 1.5."
	},
	icyrock: {
		inherit: true,
		onImmunity: function (type, pokemon) {
			if (type === 'hail') return false;
		},
		desc: "Extends the duration of Hail weather set by the holder from 5 turns to 10. The holder is immune to Hail damage."
	},
	snowball: {
		inherit: true,
		onModifyMove: function (move, pokemon) {
			if (move.type === 'Normal' && move.id !== 'hiddenpower') {
				move.type = 'Ice';
			}
		},
		desc: "The holder's Normal type moves become Ice type moves."
	},
	nevermeltice: {
		inherit: true,
		onModifyAtkPriority: 6,
		onSourceModifyAtk: function (atk, attacker, defender, move) {
			if (move.type === 'Ice' || move.type === 'Fire') {
				return this.chainModify(0.6);
			}
		},
		onModifySpAPriority: 5,
		onSourceModifySpA: function (atk, attacker, defender, move) {
			if (move.type === 'Ice' || move.type === 'Fire') {
				return this.chainModify(0.6);
			}
		},
		desc: "The holder takes 40% less damage from Ice- and Fire-type moves."
	},
	casteliacone: {
		id: "casteliacone",
		name: "Castelia Cone",
		num: -1,
		gen: 5,
		onUpdate: function (pokemon) {
			if (pokemon.status === 'brn') {
				pokemon.cureStatus();
			}
		},
		onImmunity: function (type, pokemon) {
			if (type === 'brn') return false;
		},
		desc: "The holder cannot be Burned."
	},
	spookyplate: {
		inherit: true,
		onModifyMove: function (move, pokemon) {
			if (move.type === 'Normal' && move.category === 'Special') {
				move.type = 'Ghost';
				pokemon.addVolatile('spookyplate');
			}
		},
		effect: {
			duration: 1,
			onBasePowerPriority: 8,
			onBasePower: function (basePower, pokemon, target, move) {
				return this.chainModify(1.5);
			}
		},
		desc: "The user's Special Normal-type moves turn into Special Ghost-type moves and deal 50% more damage."
	},
	spelltag: {
		inherit: true,
		onAfterDamage: function (damage, target, source, move) {
			if (!source || source.volatiles['disable']) return;
			if (source !== target && move && move.effectType === 'Move') {
				source.addVolatile('disable');
			}
		},
		desc: "The holder's damaging Ghost type moves Disable the target's last used move if they hit."
	},
	reapercloth: {
		id: "reapercloth",
		name: "Reaper Cloth",
		num: -2,
		gen: 4,
		onSwitchInPriority: 101,
		onSwitchIn: function (pokemon) {
			pokemon.setType('Ghost', true);
		},
		onTakeItem: function (item, pokemon, source) {
			pokemon.setType('', true); // todo
			return true;
		},
		desc: "The holder becomes a Ghost type so long as they hold the item. (This replaces all their current typing) No effect if the holder is already a Ghost."
	},
	cleansetag: {
		id: "cleansetag",
		name: "Cleanse Tag",
		num: -3,
		gen: 4,
		onModifyAtkPriority: 6,
		onSourceModifyAtk: function (atk, attacker, defender, move) {
			if (move.type === 'Ghost' || move.type === 'Dark') {
				return this.chainModify(0.5);
			}
		},
		onModifySpAPriority: 5,
		onSourceModifySpA: function (atk, attacker, defender, move) {
			if (move.type === 'Ghost' || move.type === 'Dark') {
				return this.chainModify(0.5);
			}
		},
		desc: "The holder takes halved damage from moves used by Ghost and Dark type Pokemon."
	},
	silverpowder: {
		inherit: true,
		onSwitchInPriority: 101,
		onSwitchIn: function (pokemon) {
			// todo
		},
		desc: "The holder sets a Substitute when they switch in, consuming the Silver Powder in place of the normal 25% HP."
	},
	quickpowder: {
		inherit: true,
		onDamage: function (damage, target, source, effect) {
			if (effect.effectType === 'Move') {
				target.boost({spe: 1});
			}
		},
		desc: "The holder's Speed increases by one stage when they are struck by a damaging move. This does not consume the Quick Powder."
	},
	honey: {
		id: "honey",
		name: "Honey",
		num: -4,
		gen: 4,
		onStart: function (pokemon) {
			// todo
		},
		desc: "No Pokemon may use Status moves so long as the holder is on the field."
	},
}
