exports.BattleStatuses = {
    raindance: {
        effectType: 'Weather',
        duration: 5,
        durationCallback: function(source, effect) {
            if (source && source.item === 'damprock') {
                return 8;
            }
            return 5;
        },
        onBasePower: function(basePower, attacker, defender, move) {
            if (move.type === 'Water') {
                this.debug('rain water boost');
                return this.chainModify(1.5);
            }
            if (move.type === 'Fire') {
                this.debug('rain fire suppress');
                return this.chainModify(0.5);
            }
        },
        onStart: function(battle, source, effect) {
            if (effect && effect.effectType === 'Ability' && this.gen <= 5) {
                this.effectData.duration = 0;
                this.add('-weather', 'RainDance', '[from] ability: ' + effect, '[of] ' + source);
            } else {
                this.add('-weather', 'RainDance');
            }
        },
        onResidualOrder: 1,
        onResidual: function() {
            this.add('-weather', 'RainDance', '[upkeep]');
            this.eachEvent('Weather');
        },
        onEnd: function() {
            this.add('-weather', 'none');
        }
    },
    sunnyday: {
        effectType: 'Weather',
        duration: 5,
        durationCallback: function(source, effect) {
            if (source && source.item === 'heatrock') {
                return 8;
            }
            return 5;
        },
        onBasePower: function(basePower, attacker, defender, move) {
            if (move.type === 'Fire') {
                this.debug('Sunny Day fire boost');
                return this.chainModify(1.5);
            }
            if (move.type === 'Water') {
                this.debug('Sunny Day water suppress');
                return this.chainModify(0.5);
            }
        },
        onStart: function(battle, source, effect) {
            if (effect && effect.effectType === 'Ability' && this.gen <= 5) {
                this.effectData.duration = 0;
                this.add('-weather', 'SunnyDay', '[from] ability: ' + effect, '[of] ' + source);
            } else {
                this.add('-weather', 'SunnyDay');
            }
        },
        onImmunity: function(type) {
            if (type === 'frz') return false;
        },
        onResidualOrder: 1,
        onResidual: function() {
            this.add('-weather', 'SunnyDay', '[upkeep]');
            this.eachEvent('Weather');
        },
        onEnd: function() {
            this.add('-weather', 'none');
        }
    },
    sandstorm: {
        effectType: 'Weather',
        duration: 5,
        durationCallback: function(source, effect) {
            if (source && source.item === 'smoothrock') {
                return 8;
            }
            return 5;
        },
        // This should be applied directly to the stat before any of the other modifiers are chained
        // So we give it increased priority.
        onModifySpDPriority: 10,
        onModifySpD: function(spd, pokemon) {
            if (pokemon.hasType('Rock') && this.isWeather('sandstorm')) {
                return this.modify(spd, 1.5);
            }
        },
        onStart: function(battle, source, effect) {
            if (effect && effect.effectType === 'Ability' && this.gen <= 5) {
                this.effectData.duration = 0;
                this.add('-weather', 'Sandstorm', '[from] ability: ' + effect, '[of] ' + source);
            } else {
                this.add('-weather', 'Sandstorm');
            }
        },
        onResidualOrder: 1,
        onResidual: function() {
            this.add('-weather', 'Sandstorm', '[upkeep]');
            if (this.isWeather('sandstorm')) this.eachEvent('Weather');
        },
        onWeather: function(target) {
            this.damage(target.maxhp / 16);
        },
        onEnd: function() {
            this.add('-weather', 'none');
        }
    },
    hail: {
        effectType: 'Weather',
        duration: 5,
        durationCallback: function(source, effect) {
            if (source && source.item === 'icyrock') {
                return 8;
            }
            return 5;
        },
        onStart: function(battle, source, effect) {
            if (effect && effect.effectType === 'Ability' && this.gen <= 5) {
                this.effectData.duration = 0;
                this.add('-weather', 'Hail', '[from] ability: ' + effect, '[of] ' + source);
            } else {
                this.add('-weather', 'Hail');
            }
        },
        onResidualOrder: 1,
        onResidual: function() {
            this.add('-weather', 'Hail', '[upkeep]');
            if (this.isWeather('hail')) this.eachEvent('Weather');
        },
        onWeather: function(target) {
            this.damage(target.maxhp / 16);
        },
        onEnd: function() {
            this.add('-weather', 'none');
        }
    },
    clearskies: {
        effectType: 'Weather',
        duration: 5,
        durationCallback: function(source, effect) {
            if (source && source.item === 'regularrock') {
                return 8;
            }
            return 5;
        },
        onBasePower: function(basePower, attacker, defender, move) {
            if (move.id === 'weatherball') {
                this.debug('Clear Skies weatherball boost');
                return this.chainModify(3);
            }
        },
        onStart: function(battle, source, effect) {
            if (effect && effect.effectType === 'Ability') {
                this.effectData.duration = 0;
                this.add('-weather', 'ClearSkies', '[from] ability: ' + effect, '[of] ' + source);
            } else {
                this.add('-weather', 'ClearSkies');
            }
        },
        onResidualOrder: 1,
        onResidual: function() {
            this.add('-weather', 'ClearSkies', '[upkeep]');
            this.eachEvent('Weather');
        },
        onEnd: function() {
            this.add('-weather', 'none');
        }
    },
    warzone: {
        effectType: 'Weather',
        duration: 5,
        durationCallback: function(source, effect) {
            if (source && source.item === 'fightingrock') {
                return 8;
            }
            return 5;
        },
        onModifyAtkPriority: 10;
        onModifyAtk: function(atk, pokemon) {
            if (pokemon.hasType('Fighting') && this.isWeather('warzone')) {
                return this.modify(atk, 1.2);
            }
        },
        onModifySpAPriority: 10;
        onModifySpA: function(spa, pokemon) {
            if (pokemon.hasType('Fighting') && this.isWeather('warzone')) {
                return this.modify(spa, 1.2);
            }
        },
        onStart: function(battle, source, effect) {
            if (effect && effect.effectType === 'Ability') {
                this.effectData.duration = 0;
                this.add('-weather', 'Warzone', '[from] ability: ' + effect, '[of] ' + source);
            } else {
                this.add('-weather', 'Warzone');
            }
        },
        onResidualOrder: 1,
        onResidual: function() {
            this.add('-weather', 'Warzone', '[upkeep]');
            this.eachEvent('Weather');
        },
        onEnd: function() {
            this.add('-weather', 'none');
        }
    },
    deltastream: {
        effectType: 'Weather',
        duration: 5,
        durationCallback: function(source, effect) {
            if (source && source.item === 'galerock') {
                return 8;
            }
            return 5;
        },
        onStart: function(battle, source, effect) {
            if (effect && effect.effectType === 'Ability') {
                this.effectData.duration = 0;
                this.add('-weather', 'DeltaStream', '[from] ability: ' + effect, '[of] ' + source);
            } else {
                this.add('-weather', 'DeltaStream');
            }
        },
        onResidualOrder: 1,
        onResidual: function() {
            this.add('-weather', 'DeltaStream', '[upkeep]');
            this.eachEvent('Weather');
        },
        onEnd: function() {
            this.add('-weather', 'none');
        }
    },
    acidrain: {
        effectType: 'Weather',
        duration: 5,
        durationCallback: function(source, effect) {
            if (source && source.item === 'toxicrock') {
                return 8;
            }
            return 5;
        },
        onStart: function(battle, source, effect) {
            if (effect && effect.effectType === 'Ability') {
                this.effectData.duration = 0;
                this.add('-weather', 'AcidRain', '[from] ability: ' + effect, '[of] ' + source);
            } else {
                this.add('-weather', 'AcidRain');
            }
        },
        onResidualOrder: 1,
        onResidual: function() {
            this.add('-weather', 'AcidRain', '[upkeep]');
            this.eachEvent('Weather');
        },
        onEnd: function() {
            this.add('-weather', 'none');
        }
    },
    sinisterfog: {
        effectType: 'Weather',
        duration: 5,
        durationCallback: function(source, effect) {
            if (source && source.item === 'cursedrock') {
                return 8;
            }
            return 5;
        },
        onStart: function(battle, source, effect) {
            if (effect && effect.effectType === 'Ability' && this.gen <= 5) {
                this.effectData.duration = 0;
                this.add('-weather', 'SinisterFog', '[from] ability: ' + effect, '[of] ' + source);
            } else {
                this.add('-weather', 'SinisterFog');
            }
        },
        onResidualOrder: 1,
        onResidual: function() {
            this.add('-weather', 'SinisterFog', '[upkeep]');
            this.eachEvent('Weather');
        },
        onEnd: function() {
            this.add('-weather', 'none');
        }
    },
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
};