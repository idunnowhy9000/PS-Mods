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
				if (effect.id === 'cutecharm') {
					this.add('-start', pokemon, 'Attract', '[from] ability: Cute Charm', '[of] ' + source);
				} else if (effect.id === 'destinyknot') {
					this.add('-start', pokemon, 'Attract', '[from] item: Destiny Knot', '[of] ' + source);
				} else {
					this.add('-start', pokemon, 'Attract');
				}
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
	}
};