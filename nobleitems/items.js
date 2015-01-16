exports.BattleItems = {
	blackbelt: {
		inherit: true,
		onBasePower: function (basePower, attacker, defender, move) {
			if (move.type === 'Fighting') {
				return this.chainModify(1.3);
			}
		},
		onModifyMove: function (move, user) {
			if (move.type === 'Fighting') {
				move.critRatio += 1;
			}
		},
		desc: "Boosts the power of fighting moves by 30% and raises their critical hit ratio one stage."
	},
	fistplate: {
		inherit: true,
		onBasePower: function (basePower, attacker, defender, move) {
			if (move.isPunchAttack || move.isKickAttack) {
				return this.chainModify(1.5);
			}
		},
		desc: "Boosts punching moves and kicking moves by 50%."
	},
	expertbelt: {
		inherit: true,
		onModifyDamage: function (damage, source, target, move) {
			if (target.runEffectiveness(move) > 0) {
				return this.chainModify(1.5);
			} else if (target.runEffectiveness(move) < 0) {
				return this.chainModify(0.5);
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
			return this.chain(speMod, 0.67);
		},
		desc: "Boosts this Pokemon's attack by 50%, but lowers speed by 33%."
	},
	icicleplate: {
		inherit: true,
		onModifyMove: function (move, pokemon) {
			if (move.isPunchAttack || move.isKickAttack) {
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
		desc: "The holder cannot be burned."
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
			if (!target || target.volatiles['disable']) return;
			if (source !== target && move && move.effectType === 'Move') {
				target.addVolatile('disable');
			}
		},
		desc: "The holder's damaging Ghost type moves Disable the target's last used move if they hit."
	},
	reapercloth: {
		id: "reapercloth",
		name: "Reaper Cloth",
		num: -2,
		gen: 4,
		onStart: function (pokemon) {
			if (!pokemon.hasType("Ghost")) pokemon.setType("Ghost", true);
		},
		onTakeItem: function (item, pokemon, source) {
			var oldType = pokemon.template.types;
			pokemon.typesData = oldType.map(function (type) {
				return {
					type: type,
					suppressed: false,
					isAdded: false
				};
			});
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
		effect: {
			onStart: function (target) {
				this.add('-start', target, 'Substitute');
				this.effectData.hp = Math.floor(target.maxhp / 4);
				delete target.volatiles['partiallytrapped'];
				
				target.takeItem();
			},
			onTryPrimaryHitPriority: -1,
			onTryPrimaryHit: function (target, source, move) {
				if (target === source) {
					this.debug('sub bypass: self hit');
					return;
				}
				if (move.notSubBlocked || move.isSoundBased && this.gen >= 6) {
					return;
				}
				if (move.category === 'Status') {
					var SubBlocked = {
						block:1, embargo:1, entrainment:1, gastroacid:1, healblock:1, healpulse:1, leechseed:1, lockon:1, meanlook:1, mindreader:1, nightmare:1, painsplit:1, psychoshift:1, simplebeam:1, skydrop:1, soak: 1, spiderweb:1, switcheroo:1, topsyturvy:1, trick:1, worryseed:1, yawn:1
					};
					if (move.status || move.boosts || move.volatileStatus === 'confusion' || SubBlocked[move.id]) {
						return false;
					}
					return;
				}
				var damage = this.getDamage(source, target, move);
				if (!damage) {
					return null;
				}
				damage = this.runEvent('SubDamage', target, source, move, damage);
				if (!damage) {
					return damage;
				}
				if (damage > target.volatiles['substitute'].hp) {
					damage = target.volatiles['substitute'].hp;
				}
				target.volatiles['substitute'].hp -= damage;
				source.lastDamage = damage;
				if (target.volatiles['substitute'].hp <= 0) {
						target.removeVolatile('substitute');
				} else {
					this.add('-activate', target, 'Substitute', '[damage]');
				}
				if (move.recoil) {
					this.damage(Math.round(damage * move.recoil[0] / move.recoil[1]), source, target, 'recoil');
				}
				if (move.drain) {
					this.heal(Math.ceil(damage * move.drain[0] / move.drain[1]), source, target, 'drain');
				}
				this.runEvent('AfterSubDamage', target, source, move, damage);
				return 0;
			},
			onEnd: function (target) {
				this.add('-end', target, 'Substitute');
			},
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
		onStart: function (target, source, sourceEffect) {
			pokemon.addVolatile("honey");
		},
		effect: {
			onStart: function (target, source) {
				var movesTarget = target.moveset, movesSource = source.moveset;
				
				for (var i = 0; i > movesTarget.length; i++) {
					var move = this.battle.getMove(movesTarget[i].id);
					if (move.category === 'Status') pokemon.disableMove(movesTarget[i].id, false);
				}
				
				for (var i = 0; i > movesSource.length; i++) {
					var move = this.battle.getMove(movesSource[i].id);
					if (move.category === 'Status') pokemon.disableMove(movesSource[i].id, false);
				}
			},
			onBeforeMove: function (pokemon, target, move) {
				if (move.category === 'Status') return false;
			},
			onEnd: function (pokemon) {
				for (var m = 0; m < pokemon.moves.length; m++) {
					if (this.battle.getMove(pokemon.moves[m]).category === 'Status') pokemon.moves[m].disabled = false;
				}
				for (var i = 0; i < this.sides.length; i++) {
					for (var j = 0; j < this.sides[i].active.length; j++) {
						var target = this.sides[i].active[j];
						for (var m = 0; m < target.moves.length; m++) {
							if (this.battle.getMove(target.moves[m]).category === 'Status') target.moves[m].disabled = false;
						}
					}
				}
			}
		},
		desc: "No Pokemon may use Status moves so long as the holder is on the field."
	},
	nugget: {
		id: "nugget",
		name: "Nugget",
		num: -5,
		gen: 1,
		onModifySpDPriority: 2,
		onModifySpD: function (def, pokemon) {
			return this.chainModify(1.3);
		},
		onAfterMoveSecondary: function (target, source, move) {
			if (target && target !== source && move.type === 'Fire') {
				target.takeItem();
			}
		},
		desc: "Boosts a Pokemon's Special Defense by 30%. Fire-type attack consumes it."
	},
	bignugget: {
		id: "bjgnugget",
		name: "Big Nugget",
		num: -6,
		gen: 5,
		onModifySpDPriority: 2,
		onModifySpD: function (def, pokemon) {
			return this.chainModify(1.5);
		},
		onModifySpe: function (speMod, pokemon) {
			return this.chainModify(0.76);
		},
		onAfterMoveSecondary: function (target, source, move) {
			if (target && target !== source && move.type === 'Fire') {
				target.item = "nugget";
			}
		},
		desc: "Boosts a Pokemon's Special Defense by 50%, but lowers Speed by 33%. Fire-type attack turns it into Nugget."
	},
	relicgold: {
		id: "relicgold",
		name: "Relic Gold",
		num: -7,
		gen: 5,
		onModifyDefPriority: 2,
		onModifyDef: function (def, pokemon) {
			if (pokemon.baseTemplate === 'Regirock' || pokemon.baseTemplate === 'Registeel' || pokemon.baseTemplate === 'Regice' || pokemon.baseTemplate === 'Regigigas') {
				return this.chainModify(1.5);
			}
		},
		onModifySpDPriority: 2,
		onModifySpD: function (spd, pokemon) {
			if (pokemon.baseTemplate === 'Regirock' || pokemon.baseTemplate === 'Registeel' || pokemon.baseTemplate === 'Regice' || pokemon.baseTemplate === 'Regigigas') {
				return this.chainModify(1.5);
			}
		},
		desc: "When held by Regirock, Registeel, Regice, or Regigigas, the holder's defenses are increased by 50%."
	},
	amuletcoin: {
		id: "amuletcoin",
		name: "Amulet Coin",
		num: -8,
		gen: 2,
		effect: {
			duration: 1,
			onModifyMove: function (move) {
				move.accuracy = true;
			}
		},
		desc: "On the first turn being sent in, the holder's moves have perfect accuracy."
	},
}
