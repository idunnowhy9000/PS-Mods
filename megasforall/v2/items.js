exports.BattleItems = {
	"abomasite": {
		id: "abomasite",
		name: "Abomasite",
		spritenum: 575,
		megaStone: "Abomasnow-Mega",
		megaEvolves: "Abomasnow",
		m4aEvolves: "-Mega",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) {
				if (this.getTemplate(source.baseTemplate.baseSpecies + m4aEvolves).exists) return true;
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
		m4aEvolves: "-Mega-X",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) {
				if (this.getTemplate(source.baseTemplate.baseSpecies + m4aEvolves).exists) return true;
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
		m4aEvolves: "-Mega-Y",
		onTakeItem: function (item, source) {
			if (item.megaEvolves === source.baseTemplate.baseSpecies) {
				if (this.getTemplate(source.baseTemplate.baseSpecies + m4aEvolves).exists) return true;
				return false;
			}
			return true;
		},
		num: 678,
		gen: 6,
		desc: "Mega-evolves Charizard into Mega Charizard Y."
	},
}