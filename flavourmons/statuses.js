exports.BattleStatuses = {
	victini: {
		onSwitchIn: function (target) {
			target.faint();
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
	}
};