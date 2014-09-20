exports.BattleFormats = {
	typeremix: {
		effectType: 'Banlist',
        name: 'Type Remix',
		validateSet: function (set) {
			var template = this.getTemplate(set.species);
			var lset = template.learnset;
			var countType = [];
			for (var i = 0; i < set.moves.length; i++){
				if (!lset[set.moves[i]]) countType[this.getMove(set.moves[i]).type]++;
			}
			for (var i in countType){
				if (countType[i].length > 1) return [(set.name || set.species) + "has more than 1 new "+i+"-type move."];
			}
		}
	}
}