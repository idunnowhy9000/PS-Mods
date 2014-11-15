exports.BattleAbilities = {
	"normalize": {
		inherit: true,
		onModifyMove: function (move, pokemon) {
			if (move.id !== 'struggle') {
				move.type = pokemon.types[0];
			}
		},
	},
	"pixilate": {
		inherit: true,
		onModifyMove: function (move, pokemon) {
			if (!move.id in {'hiddenpower':1,'struggle':1}) {
				move.type = "Fairy";
				pokemon.addVolatile('pixilate');
			}
		},
	},
	"refrigerate": {
		inherit: true,
		onModifyMove: function (move, pokemon) {
			if (!move.id in {'hiddenpower':1,'struggle':1}) {
				move.type = "Ice";
				pokemon.addVolatile('refrigerate');
			}
		},
	},
	"aerilate": {
		inherit: true,
		onModifyMove: function (move, pokemon) {
			if (!move.id in {'hiddenpower':1,'struggle':1}) {
				move.type = "Flying";
				pokemon.addVolatile('aerilate');
			}
		},
	},
	"scrappy": {
		inherit: true,
		onModifyMove: function (move) {
			if (move.type === 'Fighting') {
				move.affectedByImmunities = false;
			}
		},
	}
}