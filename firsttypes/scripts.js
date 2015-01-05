exports.BattleScripts = {
	init: function () {
		// moves
		for (var i in this.data.Moves) {
			var type = this.data.Moves.type;
			if (this.data.Moves[i].type === "Dark") type = "Ghost";
			if (this.data.Moves[i].type === "Steel") type = "Rock";
			if (this.data.Moves[i].type === "Fairy") type = "Normal";
			this.modData('Moves',i).type = type;
		}
		//fairy
		this.modData('Pokedex','ralts').types = ["Psychic"];
		this.modData('Pokedex','kirlia').types = ["Psychic"];
		this.modData('Pokedex','gardevoir').types = ["Psychic"];
		this.modData('Pokedex','gardevoirmega').types = ["Psychic"];
		this.modData('Pokedex','mimejr').types = ["Psychic"];
		this.modData('Pokedex','mrmime').types = ["Psychic"];
		this.modData('Pokedex','azurill').types = ["Water"];
		this.modData('Pokedex','marill').types = ["Water"];
		this.modData('Pokedex','azumarill').types = ["Water"];
		this.modData('Pokedex','mawile').types = ["Ghost"];
		this.modData('Pokedex','mawilemega').types = ["Ghost"];
		this.modData('Pokedex','flabebe').types = ["Grass"];
		this.modData('Pokedex','floette').types = ["Grass"];
		this.modData('Pokedex','florges').types = ["Grass"];
		this.modData('Pokedex','whimsicott').types = ["Grass"];
		this.modData('Pokedex','spritzee').types = ["Poison"];
		this.modData('Pokedex','aromatisse').types = ["Poison"];
		this.modData('Pokedex','dedenne').types = ["Electric"];
		this.modData('Pokedex','carbink').types = ["Rock"];
		this.modData('Pokedex','diancie').types = ["Rock"];
		//steel
		this.modData('Pokedex','magnezone').types = ["Electric"];
		this.modData('Pokedex','forretress').types = ["Bug"];
		this.modData('Pokedex','scizor').types = ["Bug","Flying"];
		this.modData('Pokedex','beldum').types = ["Electric","Psychic"];
		this.modData('Pokedex','metang').types = ["Electric","Psychic"];
		this.modData('Pokedex','metagross').types = ["Electric","Psychic"];
		this.modData('Pokedex','empoleon').types = ["Water","Ice"];
		this.modData('Pokedex','wormadamtrash').types = ["Bug","Poison"];
		this.modData('Pokedex','bronzong').types = ["Water","Psychic"];
		this.modData('Pokedex','lucario').types = ["Fighting","Psychic"];
		this.modData('Pokedex','durant').types = ["Bug"];
		this.modData('Pokedex','aegislash').types = ["Fighting","Ghost"];
		this.modData('Pokedex','klefki').types = ["Ghost"];
		//dark
		this.modData('Pokedex','gyaradosmega').types = ["Water","Dragon"];
		this.modData('Pokedex','umbreon').types = ["Poison"];
		this.modData('Pokedex','murkrow').types = ["Fighting","Flying"];
		this.modData('Pokedex','honchkrow').types = ["Fighting","Flying"];
		this.modData('Pokedex','weavile').types = ["Ice"];
		this.modData('Pokedex','sneasel').types = ["Ice"];
		this.modData('Pokedex','tyranitar').types = ["Rock","Ground"];
		this.modData('Pokedex','mightyena').types = ["Normal"];
		this.modData('Pokedex','poochyena').types = ["Normal"];
		this.modData('Pokedex','seedot').types = ["Grass"];
		this.modData('Pokedex','nuzleaf').types = ["Grass"];
		this.modData('Pokedex','shiftry').types = ["Grass"];
		this.modData('Pokedex','sharpedo').types = ["Water"];
		this.modData('Pokedex','crawdaunt').types = ["Water","Bug"];
		this.modData('Pokedex','absol').types = ["Psychic"];
		this.modData('Pokedex','stunky').types = ["Poison"];
		this.modData('Pokedex','skuntank').types = ["Poison"];
		this.modData('Pokedex','spiritomb').types = ["Ghost","Rock"];
		this.modData('Pokedex','drapion').types = ["Poison","Bug"];
		this.modData('Pokedex','purrloin').types = ["Normal"];
		this.modData('Pokedex','liepard').types = ["Normal"];
		this.modData('Pokedex','sandile').types = ["Ground"];
		this.modData('Pokedex','krokorok').types = ["Ground"];
		this.modData('Pokedex','krookodile').types = ["Ground"];
		this.modData('Pokedex','scraggy').types = ["Dragon","Fighting"];
		this.modData('Pokedex','scrafty').types = ["Dragon","Fighting"];
		this.modData('Pokedex','vullaby').types = ["Flying"];
		this.modData('Pokedex','mandibuzz').types = ["Flying"];
		this.modData('Pokedex','greninja').types = ["Water"];
		this.modData('Pokedex','deino').types = ["Dragon"];
		this.modData('Pokedex','zweilous').types = ["Dragon"];
		this.modData('Pokedex','hydreigon').types = ["Dragon"];
		this.modData('Pokedex','pangoro').types = ["Fighting"];
		this.modData('Pokedex','inkay').types = ["Water","Psychic"];
		this.modData('Pokedex','malamar').types = ["Water","Psychic"];
	}
};
