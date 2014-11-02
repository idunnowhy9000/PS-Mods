function createWeatherSetter(id, name, weather, type){
	return {
		num: -100,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "For 5 turns, the weather becomes "+weather+". Lasts for 8 turns if the user is holding Damp Rock. Fails if the current weather is "+weather+".",
		shortDesc: "For 5 turns, "+weather+" powers "+type+" moves.",
		id: id,
		isViable: true,
		name: name,
		pp: 5,
		priority: 0,
		weather: weather,
		secondary: false,
		target: "all",
		type: type
	},
}
exports.BattleMovedex = {
	"dracometeor": {
		num: 434,
		accuracy: 90,
		basePower: (this.isWeather('meteorstorm') ? 130 : 140),
		category: "Special",
		desc: "Deals damage to one adjacent target and lowers the user's Special Attack by 2 stages.",
		shortDesc: "Lowers the user's Sp. Atk by 2.",
		id: "dracometeor",
		isViable: true,
		name: "Draco Meteor",
		pp: 5,
		priority: 0,
		onBoost: function (boost) {
			if (this.isWeather('meteorstorm')) boost = {spa:-1}
		},
		self: {
			boosts: {
				spa: -2
			}
		},
		secondary: false,
		target: "normal",
		type: "Dragon"
	},
	"gigaimpact": {
		num: 416,
		accuracy: 90,
		basePower: 150,
		category: "Physical",
		desc: "Deals damage to one adjacent target. If this move is successful, the user must recharge on the following turn and cannot make a move. Makes contact.",
		shortDesc: "User cannot move next turn.",
		id: "gigaimpact",
		name: "Giga Impact",
		pp: 5,
		priority: 0,
		isContact: true,
		onModifyMove: function (move) {
			if (this.isWeather('clearskies')) move.accuracy = 75;
			else if (this.isWeather('ominousfog')) move.accuracy = 50;
		},
		self: {
			volatileStatus: 'mustrecharge'
		},
		secondary: false,
		target: "normal",
		type: "Normal"
	},
	"hurricane": {
		num: 542,
		accuracy: 70,
		basePower: 110,
		category: "Special",
		desc: "Deals damage to one adjacent or non-adjacent target with a 30% chance to confuse it. This move can hit a target using Bounce, Fly, or Sky Drop. If the weather is Rain Dance, this move cannot miss. If the weather is Sunny Day, this move's accuracy is 50%.",
		shortDesc: "30% chance to confuse target. Can't miss in rain.",
		id: "hurricane",
		isViable: true,
		name: "Hurricane",
		pp: 10,
		priority: 0,
		onModifyMove: function (move) {
			if (this.isWeather('raindance') || this.isWeather('deltastream')) move.accuracy = true;
			else if (this.isWeather('sunnyday') || this.isWeather('sandstorm')) move.accuracy = 50;
		},
		secondary: {
			chance: 30,
			volatileStatus: 'confusion'
		},
		target: "any",
		type: "Flying"
	},
	"hyperbeam": {
		num: 63,
		accuracy: 90,
		basePower: 150,
		category: "Special",
		desc: "Deals damage to one adjacent target. If this move is successful, the user must recharge on the following turn and cannot make a move.",
		shortDesc: "User cannot move next turn.",
		id: "hyperbeam",
		name: "Hyper Beam",
		pp: 5,
		priority: 0,
		onModifyMove: function (move) {
			if (this.isWeather('clearskies')) move.accuracy = 75;
			else if (this.isWeather('ominousfog')) move.accuracy = 50;
		},
		self: {
			volatileStatus: 'mustrecharge'
		},
		secondary: false,
		target: "normal",
		type: "Normal"
	},
	"thunder": {
		num: 87,
		accuracy: 70,
		basePower: 110,
		category: "Special",
		desc: "Deals damage to one adjacent target with a 30% chance to paralyze it. This move can hit a target using Bounce, Fly, or Sky Drop. If the weather is Rain Dance, this move cannot miss. If the weather is Sunny Day, this move's accuracy is 50%.",
		shortDesc: "30% chance to paralyze target. Can't miss in rain.",
		id: "thunder",
		isViable: true,
		name: "Thunder",
		pp: 10,
		priority: 0,
		onModifyMove: function (move) {
			if (this.isWeather('raindance') || this.isWeather('thunderstorm')) move.accuracy = true;
			else if (this.isWeather('sunnyday') || this.isWeather('sandstorm')) move.accuracy = 50;
		},
		secondary: {
			chance: 30,
			status: 'par'
		},
		target: "normal",
		type: "Electric"
	},
	"weatherball": {
		num: 311,
		accuracy: 100,
		basePower: 50,
		basePowerCallback: function () {
			if (this.weather) return 100;
			return 50;
		},
		category: "Special",
		desc: "Deals damage to one adjacent target. Power doubles during weather effects and this move's type changes to match; Ice-type during Hail, Water-type during Rain Dance, Rock-type during Sandstorm, and Fire-type during Sunny Day.",
		shortDesc: "Power doubles and type varies in each weather.",
		id: "weatherball",
		isViable: true,
		name: "Weather Ball",
		pp: 10,
		priority: 0,
		isBullet: true,
		onModifyMove: function (move) {
			switch (this.effectiveWeather()) {
			case 'sunnyday':
				move.type = 'Fire';
				break;
			case 'raindance':
				move.type = 'Water';
				break;
			case 'sandstorm':
				move.type = 'Rock';
				break;
			case 'hail':
				move.type = 'Ice';
				break;
			}
		},
		secondary: false,
		target: "normal",
		type: "Normal"
	},
	"defog": {
		num: 432,
		accuracy: true,
		basePower: 0,
		category: "Status",
		desc: "Lowers one adjacent target's evasion by 1 stage. Whether or not the target's evasion was affected, the effects of Safeguard, Mist, Spikes, Toxic Spikes, Stealth Rock, and Sticky Web end for the user's and the target's sides. In addition, the effects of Reflect and Light Screen will end for the target's side. Pokemon protected by Magic Coat or the Ability Magic Bounce are unaffected and instead use this move themselves. Ignores a target's Substitute, although a Substitute will still block the evasion lowering.",
		shortDesc: "Removes hazards from field. Lowers foe's evasion.",
		id: "defog",
		name: "Defog",
		pp: 15,
		priority: 0,
		isBounceable: true,
		onHit: function (target, source) {
			if (!target.volatiles['substitute']) this.boost({evasion:-1});
			var sideConditions = {reflect:1, lightscreen:1, safeguard:1, mist:1, spikes:1, toxicspikes:1, stealthrock:1, stickyweb:1};
			for (var i in sideConditions) {
				if (target.side.removeSideCondition(i)) {
					this.add('-sideend', target.side, this.getEffect(i).name, '[from] move: Defog', '[of] ' + target);
				}
			}
			for (var i in sideConditions) {
				if (i === 'reflect' || i === 'lightscreen') continue;
				if (source.side.removeSideCondition(i)) {
					this.add('-sideend', source.side, this.getEffect(i).name, '[from] move: Defog', '[of] ' + source);
				}
			}
			if (this.isWeather('sinisterfog') || this.isWeather('pixiefog')) {
				this.setWeather('');
			}
		},
		secondary: false,
		target: "normal",
		type: "Flying"
	},
	// move setters
	clearsky: createWeatherSetter('clearsky','Clear Sky','ClearSkies','Normal'),
	warzone: createWeatherSetter('warzone','Warzone','Warzone','Fighting'),
	strongwinds: createWeatherSetter('strongwinds','Strong Winds','DeltaStream','Flying'),
	aciddance: createWeatherSetter('aciddance','Acid Dance','AcidRain','Poison'),
	plague: createWeatherSetter('plague','Plague','Plague','Bug'),
	sinisterfog: createWeatherSetter('sinisterfog','Sinister Fog','SinisterFog','Ghost'),
	metalmeteor: createWeatherSetter('metalmeteor','Metal Meteor','MetalMeteor','Steel'),
	pollenstorm: createWeatherSetter('pollenstorm','Pollen Storm','PollenStorm','Grass'),
	thunderstorm: createWeatherSetter('thunderstorm','Thunderstorm','Thunderstorm','Electric'),
	mindstorm: createWeatherSetter('mindstorm','Mindstorm','Mindstorm','Psychic'),
	meteorstorm: createWeatherSetter('meteorstorm','Meteor Storm','DragonMeteor','Dragon'),
	blackhole: createWeatherSetter('blackhole','Black Hole','BlackHole','Dark'),
	pixiedust: createWeatherSetter('pixiedust','Pixie Dust','PixieFog','Fairy'),
};
