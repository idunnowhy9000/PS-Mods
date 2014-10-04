exports.BattleStatuses = {
	metalmeteor: {
		effectType: 'Weather',
		duration: 5,
		durationCallback: function (source, effect) {
			if (source && source.item === 'icyrock') {
				return 8;
			}
			return 5;
		},
		onStart: function (battle, source, effect) {
			if (effect && effect.effectType === 'Ability' && this.gen <= 5) {
				this.effectData.duration = 0;
				this.add('-weather', 'Metal Meteor', '[from] ability: ' + effect, '[of] ' + source);
			} else {
				this.add('-weather', 'Metal Meteor');
			}
		},
		onResidualOrder: 1,
		onResidual: function () {
			this.add('-weather', 'Metal Meteor', '[upkeep]');
			if (this.isWeather('Metal Meteor')) this.eachEvent('Weather');
		},
		onWeather: function (target) {
			this.damage(target.maxhp / 16);
		},
		onEnd: function () {
			this.add('-weather', 'none');
		}
	},
	thunderstorm: {
		effectType: 'Weather',
		duration: 5,
		durationCallback: function (source, effect) {
			if (source && source.item === 'icyrock') {
				return 8;
			}
			return 5;
		},
		onStart: function (battle, source, effect) {
			if (effect && effect.effectType === 'Ability' && this.gen <= 5) {
				this.effectData.duration = 0;
				this.add('-weather', 'Thunderstorm', '[from] ability: ' + effect, '[of] ' + source);
			} else {
				this.add('-weather', 'Thunderstorm');
			}
		},
		onResidualOrder: 1,
		onResidual: function () {
			this.add('-weather', 'Thunderstorm', '[upkeep]');
			if (this.isWeather('Thunderstorm')) this.eachEvent('Weather');
		},
		onWeather: function (target) {
			this.damage(target.maxhp / 16);
		},
		onEnd: function () {
			this.add('-weather', 'none');
		},
		onModifyAccuracyPriority: 10,
		onModifyAccuracy: function (accuracy, move) {
			if (move.id === 'thunder') {
				return this.modify(accuracy, 1);
			}
		}
	},
	pollenstorm: {
		effectType: 'Weather',
		duration: 5,
		durationCallback: function (source, effect) {
			if (source && source.item === 'icyrock') {
				return 8;
			}
			return 5;
		},
		onStart: function (battle, source, effect) {
			if (effect && effect.effectType === 'Ability' && this.gen <= 5) {
				this.effectData.duration = 0;
				this.add('-weather', 'Pollen Storm', '[from] ability: ' + effect, '[of] ' + source);
			} else {
				this.add('-weather', 'Pollen Storm');
			}
		},
		onResidualOrder: 1,
		onResidual: function () {
			this.add('-weather', 'Pollen Storm', '[upkeep]');
			if (this.isWeather('Pollen Storm')) this.eachEvent('Weather');
		},
		onWeather: function (target) {
			if (target.hasType('Grass')) this.heal(target.maxhp / 16);
			else this.damage(target.maxhp / 16);
		},
		onEnd: function () {
			this.add('-weather', 'none');
		},
	},
	blackhole: {
		effectType: 'Weather',
		duration: 5,
		durationCallback: function (source, effect) {
			if (source && source.item === 'icyrock') {
				return 8;
			}
			return 5;
		},
		onStart: function (battle, source, effect) {
			if (effect && effect.effectType === 'Ability' && this.gen <= 5) {
				this.effectData.duration = 0;
				this.add('-weather', 'Black Hole', '[from] ability: ' + effect, '[of] ' + source);
			} else {
				this.add('-weather', 'Black Hole');
			}
		},
		onResidualOrder: 1,
		onResidual: function () {
			this.add('-weather', 'Black Hole', '[upkeep]');
			if (this.isWeather('Black Hole')) this.eachEvent('Weather');
		},
		onWeather: function (target) {
			this.damage(target.maxhp / 16);
		},
		onEnd: function () {
			this.add('-weather', 'none');
		},
	},
	pixiefog: {
		effectType: 'Weather',
		duration: 5,
		durationCallback: function (source, effect) {
			if (source && source.item === 'icyrock') {
				return 8;
			}
			return 5;
		},
		onStart: function (battle, source, effect) {
			if (effect && effect.effectType === 'Ability' && this.gen <= 5) {
				this.effectData.duration = 0;
				this.add('-weather', 'Pixie Fog', '[from] ability: ' + effect, '[of] ' + source);
			} else {
				this.add('-weather', 'Pixie Fog');
			}
		},
		onResidualOrder: 1,
		onResidual: function () {
			this.add('-weather', 'Pixie Fog', '[upkeep]');
			if (this.isWeather('Pixie Fog')) this.eachEvent('Weather');
		},
		onWeather: function (target) {
			if (target.hasType('Psychic')) return;
			this.damage(target.maxhp / 16);
		},
		onEnd: function () {
			this.add('-weather', 'none');
		},
	},
}