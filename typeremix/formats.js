{
	name: "Type Remix",
	section: "Other Metagames",
	
	mod: 'typeremix',
	ruleset: ['OU'],
	validateSet: function (set) {
		var template = this.getTemplate(set.species);
		var lset = template.learnset;
		var countType = [];
		for (var i = 0; i < set.moves.length; i++){
			if (!lset[set.moves[i]]) countType[this.getMove(set.moves).type]++;
		}
		for (var i in countType){
			if (countType[i].length > 1) return [(set.name || set.species) + "has more than 1 new move per type."];
		}
	}
}