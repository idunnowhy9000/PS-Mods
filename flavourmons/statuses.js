exports.BattleStatuses = {
	victini: {
		onModifyMove: function (move, user, target) {
			move.ohko = true;
		}
	},
	venusaur: {
		onBeforeMovePriority: 2,
		onBeforeMove: function (pokemon, target, move) {
			if (this.isWeather('raindance')) {
				target.setStatus('venusaurattract');
			}
		}
	},
	venusaurattract: {
		effect: {
			noCopy: true, // doesn't get copied by Baton Pass
			onStart: function (pokemon, source, effect) {
				this.add('-start', pokemon, 'Attract');
			},
			onBeforeMove: function (pokemon, target, move) {
				if (this.effectData.source && !this.effectData.source.isActive && pokemon.volatiles['attract']) {
					this.debug('Removing Attract volatile on ' + pokemon);
					pokemon.removeVolatile('attract');
					return;
				}
				this.add('-activate', pokemon, 'Attract', '[of] ' + this.effectData.source);
				if (this.random(2) === 0) {
					this.add('cant', pokemon, 'Attract');
					return false;
				}
			}
		},
	},
	charizard: {
		onBeforeMovePriority: 2,
		onBeforeMove: function (pokemon, target, move) {
			if (target.level < pokemon.level) {
				return false;
			}
			//if (pokemon.
		},
		onModifyMove: function (move, user, target) {
			if (target.hasType('Ice')) {
				move.ohko = true;
			}
		}
	},
	slugma: {
		onImmunity: function (type, pokemon) {
			if (type === 'slp') return false;
		},
	},
	magikarp: {
		onTryHit: function (target, source, move) {
			if (!this.isWeather('raindance')) return;
			if (target === source) return;
			return null;
		},
	},
	shedinja: {
		onBeforeMove: function (pokemon, target, move) {
			return false;
		}
	},
	golduck: {
		onModifyPriority: function (priority, pokemon, target, move) {
			if (move && this.isWeather(['raindance', 'primordialsea'])) return 6;
		},
	},
	machamp: {
		onModifyMove: function (move) {
			if (move.multihit && move.multihit.length) {
				move.multihit = 4;
			}
		},
	},
	dewgong: {
		onModifySpe: function (speMod, pokemon) {
			if (this.isWeather('hail')) {
				return this.chain(speMod, 2);
			}
		},
	},
	gyarados: {
		onModifyMove: function (move, user, target) {
			if (move.id === 'rage' || move.id === 'thrash') {
				move.ohko = true;
			}
		},
		//onStart: function (
	},
};