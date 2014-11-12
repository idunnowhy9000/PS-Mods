Array.min = function( array ){
    return Math.min.apply( Math, array );
};
Array.max = function( array ){
    return Math.max.apply( Math, array );
};
exports.BattleScripts = {
	init: function() {
		for (var i in this.data.Pokedex) {
			var template = this.getTemplate(i);
			var newStats = {};
			var stats = [];
			for (var j in template.baseStats) {
				stats.push(template.baseStats[j]);
			}
			var bestStatVal = stats.max();
			var worstStatVal = stats.min();
			var bestStat = [];
			var worstStat = [];
			for (var j in template.baseStats) {
				newStats[j] = template.baseStats[j];
				if (template.baseStats[j] === bestStatVal) {
					newStats[j] = worstStatVal;
				}
				if (template.baseStats[j] === worstStatVal) {
					newStats[j] = bestStatVal;
				}
			}
			this.modData('Pokedex', i).baseStats = newStats;
		}
	}
};