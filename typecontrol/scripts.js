exports.BattleScripts = {
	onSwitchInPriority: 101,
	onSwitchIn: function (pokemon) {
		var type = '';
		if(pokemon.name && pokemon.name.split("/").length){
			type = pokemon.name;
			if (type && type !== '???' && pokemon.getTypes().join() !== type) {
				if (!pokemon.setType(type)) return;
			}
		}
	}
}