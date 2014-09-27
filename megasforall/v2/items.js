exports.BattleItems = {
	"abomasite": {
		id: "abomasite",
		name: "Abomasite",
		spritenum: 575,
		megaStone: "Abomasnow-Mega",
		megaEvolves: "Abomasnow",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) {
				for (var i = 0; i < source.baseTemplate.otherFormes) {
					var megaTemp = this.getTemplate(source.baseTemplate.otherFormes[i]);
					if (megaTemp.forme === 'Mega' && megaTemp.tier === 'M4A') return true;
				}
				return false;
			}
			return true;
		},
		num: 674,
		gen: 6,
		desc: "Mega-evolves Abomasnow or holder (if holder has Mega For All's mega)."
	},
	"charizarditex": {
		id: "charizarditex",
		name: "Charizardite X",
		spritenum: 585,
		megaStone: "Charizard-Mega-X",
		megaEvolves: "Charizard",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) {
				for (var i = 0; i < source.baseTemplate.otherFormes) {
					var megaTemp = this.getTemplate(source.baseTemplate.otherFormes[i]);
					if (megaTemp.forme === 'Mega-X' && megaTemp.tier === 'M4A') return true;
				}
				return false;
			}
			return true;
		},
		num: 660,
		gen: 6,
		desc: "Mega-evolves Charizard into Mega Charizard X."
	},
	"charizarditey": {
		id: "charizarditey",
		name: "Charizardite Y",
		spritenum: 586,
		megaStone: "Charizard-Mega-Y",
		megaEvolves: "Charizard",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) {
				for (var i = 0; i < source.baseTemplate.otherFormes) {
					var megaTemp = this.getTemplate(source.baseTemplate.otherFormes[i]);
					if (megaTemp.forme === 'Mega-Y' && megaTemp.tier === 'M4A') return true;
				}
				return false;
			}
			return true;
		},
		num: 678,
		gen: 6,
		desc: "Mega-evolves Charizard into Mega Charizard Y."
	},
}