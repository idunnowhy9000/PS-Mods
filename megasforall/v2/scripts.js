exports.BattleScripts = {
	init: function () {
		for (var i in this.data.FormatsData) {
			if(this.data.FormatsData[i].tier === "M4A") {
				this.modData('FormatsData', i).isNonstandard = false;
			}
		}
		// moves are implemented here
		this.modData('Learnsets', 'accelgor').learnset.toxicspikes = ['6L1'];
		this.modData('Learnsets', 'amoonguss').learnset.darkpulse = ['6L1'];
		this.modData('Learnsets', 'arbok').learnset.dragondance = ['6L1'];
		this.modData('Learnsets', 'arbok').learnset.dragonrush = ['6L1'];
		this.modData('Learnsets', 'arbok').learnset.venomdrench = ['6L1'];
		this.modData('Learnsets', 'arcanine').learnset.batonpass = ['6L1'];
		this.modData('Learnsets', 'arcanine').learnset.healingwish = ['6L1'];
		this.modData('Learnsets', 'arcanine').learnset.nobleroar = ['6L1'];
		this.modData('Learnsets', 'arcanine').learnset.blazekick = ['6L1'];
		this.modData('Learnsets', 'articuno').learnset.aeroblast = ['6L1'];
		this.modData('Learnsets', 'articuno').learnset.waterpulse = ['6L1'];
		this.modData('Learnsets', 'articuno').learnset.shadowball = ['6L1'];
		this.modData('Learnsets', 'audino').learnset.chatter = ['6L1'];
		this.modData('Learnsets', 'audino').learnset.boomburst = ['6L1'];
		this.modData('Learnsets', 'audino').learnset.bugbuzz = ['6L1'];
		this.modData('Learnsets', 'aurorus').learnset.moonlight = ['6L1'];
		this.modData('Learnsets', 'aurorus').learnset.powergem = ['6L1'];
		this.modData('Learnsets', 'avalugg').learnset.heavyslam = ['6L1'];
		this.modData('Learnsets', 'bibarel').learnset.stealthrock = ['6L1'];
		this.modData('Learnsets', 'bibarel').learnset.slackoff = ['6L1'];
		this.modData('Learnsets', 'basculin').learnset.closecombat = ['6L1'];
		this.modData('Learnsets', 'basculin').learnset.vacuumwave = ['6L1'];
		this.modData('Learnsets', 'basculin').learnset.poisonfang = ['6L1'];
		this.modData('Learnsets', 'basculin').learnset.coil = ['6L1'];
		this.modData('Learnsets', 'basculin').learnset.icefang = ['6L1'];
		this.modData('Learnsets', 'beedrill').learnset.megahorn = ['6L1'];
		this.modData('Learnsets', 'beedrill').learnset.bravebird = ['6L1'];
		this.modData('Learnsets', 'beheeyem').learnset.flashcannon = ['6L1'];
		this.modData('Learnsets', 'bellossom').learnset.quiverdance = ['6L1'];
		this.modData('Learnsets', 'bellossom').learnset.flamethrower = ['6L1'];
		this.modData('Learnsets', 'bellossom').learnset.fireblast = ['6L1'];
		this.modData('Learnsets', 'bellossom').learnset.moonblast = ['6L1'];
		this.modData('Learnsets', 'bellossom').learnset.drainingkiss = ['6L1'];
		this.modData('Learnsets', 'blissey').learnset.moonblast = ['6L1'];
	}
}