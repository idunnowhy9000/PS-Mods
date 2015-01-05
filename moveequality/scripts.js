exports.BattleScripts = {
	init: function () {
		for (var i in this.data.Moves) {
			if (this.data.Moves[i].priority === 0) {
				var basePower = this.data.Moves[i].basePower;
				if (this.data.Moves[i].multihit === 2) {
					basePower = 45;
				} else if (this.data.Moves[i].multihit === [2, 5]) {
					basePower = 25;
				} else {
					basePower = 90;
				}
				
				var basePowerCallback;
				if (this.data.Moves[i].id === 'triplekick') {
					basePower = 15;
					basePowerCallback = function (pokemon) {
						pokemon.addVolatile('triplekick');
						return 15 * pokemon.volatiles['triplekick'].hit;
					};
				} else if (this.data.Moves[i].id === 'beatup') {
					// todo
					basePowerCallback = function (pokemon) {
						pokemon.addVolatile('beatup');
						if (!pokemon.side.pokemon[pokemon.volatiles.beatup.index]) return null;
						return 5 + Math.floor(pokemon.side.pokemon[pokemon.volatiles.beatup.index].template.baseStats.atk / 10);
					};
				}
				
				this.modData('Moves', i).basePower = basePower;
				this.modData('Moves', i).accuracy = 100;
				if (basePowerCallback) this.modData('Moves', i).basePowerCallback = undefined;
				this.modData('Moves', i).onBasePower = undefined;
			}
		}
	}
}