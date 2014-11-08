function weakToType(weakness) {
    return function(source, target, pokemon) {
        var type = source.type || source;
        var totalTypeMod = 0;
        var types = target.getTypes && target.getTypes() || target.types;
        for (var i = 0; i < types.length; i++) {
            if (!this.data.TypeChart[types[i]]) continue;
            if (types[i] === weakness) {
                totalTypeMod++;
                continue;
            }
            var typeMod = this.data.TypeChart[types[i]].damageTaken[type];
            if (typeMod === 1) { // super-effective
                totalTypeMod++;
            }
            if (typeMod === 2) { // resist
                totalTypeMod--;
            }
        }
        return totalTypeMod;
    }
}
exports.BattleMovedex = {
	"regenerativebeam": {
		num: -100,
		accuracy: 100,
		basePower: 120,
		category: "Special",
		desc: "Deals damage to one adjacent target. The user recovers half of the HP lost by the target, rounded up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down.",
		shortDesc: "User recovers 50% of the damage dealt.",
		id: "regenerativebeam",
		name: "Regenerative Beam",
		pp: 5,
		priority: 0,
		drain: [1, 2],
		secondary: false,
		target: "normal",
		type: "Grass"
	},
	"originpulse": {
		num: -101,
		accuracy: 100,
		basePower: 120,
		category: "Special",
		desc: "Super-effective against Water-type Pokemon.",
		shortDesc: "Super-effective against Water-type Pokemon.",
		id: "originpulse",
		name: "Origin Pulse",
		pp: 5,
		priority: 0,
		getEffectiveness: weakToType('Water'),
		secondary: false,
		target: "normal",
		type: "Water"
	},
	"magneticslam": {
		num: -102,
		accuracy: 100,
		basePower: 150,
		category: "Physical",
		desc: "Super-effective against Water-type Pokemon.",
		shortDesc: "Super-effective against Water-type Pokemon.",
		id: "magneticslam",
		name: "Magnetic Slam",
		pp: 5,
		priority: 0,
		getEffectiveness: weakToType('Water'),
		secondary: false,
		target: "normal",
		type: "Fire"
	},
	"cleansingrainbow": {
		num: -102,
		accuracy: 100,
		basePower: 100,
		category: "Special",
		desc: "Heals user of its status.",
		shortDesc: "Heals user of its status.",
		id: "cleansingrainbow",
		name: "Cleansing Rainbow",
		pp: 10,
		priority: 0,
		secondary: false,
		target: "normal",
		type: "Fairy"
	},
	"yinpower": {
		num: -103,
		accuracy: 95,
		basePower: 100,
		category: "Physical",
		desc: "Gets 50% boost anyway from Blitzing Ideal.",
		shortDesc: "Gets 50% boost anyway from Blitzing Ideal.",
		id: "yinpower",
		name: "Yin Power",
		pp: 5,
		priority: 0,
		secondary: false,
		target: "normal",
		type: "Dark"
	},
	"scald": {
		inherit: true,
		getEffectiveness: weakToType('Ice'),
	},
	"azurestrike": {
		num: -104,
		accuracy: 95,
		basePower: 170,
		category: "Special",
		desc: "Deals damage to one adjacent target and lowers the user's Defense and Special Defense by 1 stage. Makes contact.",
		shortDesc: "Lowers the user's Defense and Sp. Def by 1.",
		id: "azurestrike",
		name: "Azure Strike",
		pp: 5,
		priority: 0,
		self: {
			boosts: {
				def: -1,
				spd: -1
			}
		},
		secondary: false,
		target: "normal",
		type: "Flying"
	},
	"roaroftime": {
		inherit: true,
		self: false,
		isNotProtectable: true,
		isFutureMove: true,
		onTryHit: function (target, source) {
			source.side.addSideCondition('futuremove');
			if (source.side.sideConditions['futuremove'].positions[source.position]) {
				return false;
			}
			source.side.sideConditions['futuremove'].positions[source.position] = {
				duration: 3,
				move: 'roaroftime',
				targetPosition: target.position,
				source: source,
				moveData: {
					basePower: 140,
					category: "Special",
					type: 'Steel'
				}
			};
			this.add('-start', source, 'Roar of Time');
			return null;
		},
	}
}