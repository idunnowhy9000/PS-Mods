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
	"scald": {
		inherit: true,
		getEffectiveness: weakToType('Ice'),
	}
}