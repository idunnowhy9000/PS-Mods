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
		self: {
			if (this.isWeather('meteorstorm')) boosts: {
				spa: -1
			}
			else if (!this.isWeather('meteorstorm')) boosts: {
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
			if (!this.isWeather('clearskies')) volatileStatus: 'mustrecharge'
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
			if (!this.isWeather('clearskies')) volatileStatus: 'mustrecharge'
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
	}
};
