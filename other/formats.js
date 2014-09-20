exports.Formats = [
	{
		name: "Level Balance",
		section: "Other Metagames",
		
		ruleset: ['Pokemon', 'Team Preview', 'Swagger Clause', 'Baton Pass Clause'],
		banlist: [],
		validateSet: function (set) {
			var template = this.getTemplate(set.species || set.name);
			if(!template.isMega || this.getItem(set.item).megaStone) template = this.getTemplate(this.getItem(set.item).megaStone);
			var levelScale = {
				LC: 94,
				'LC Uber': 92,
				NFE: 90,
				Limbo: 86,
				NU: 86,
				BL3: 84,
				RU: 82,
				BL2: 80,
				UU: 78,
				BL: 76,
				OU: 74,
				Unreleased: 74,
				Uber: 70
			};
			var customScale = {
				// bad mons
				caterpie:99,metapod:99,weedle:99,kakuna:99,magikarp:99,pichu:99,cleffa:99,igglybuff:99,tyrogue:99,sentret:99,ledyba:99,hoppip:99,sunkern:99,unown:99,azurill:99,ralts:99,zigzagoon:99,wurmple:99,silcoon:99,cascoon:99,slakoth:99,feebas:99,burmy:99,combee:99,mimejr:99,happiny:99,kricketot:99,tynamo:99,
				
				// Eviolite
				Ferroseed: 95, Misdreavus: 95, Munchlax: 95, Murkrow: 95, Natu: 95,
				Gligar: 90, Metang: 90, Monferno: 90, Roselia: 90, Seadra: 90, Togetic: 90, Wartortle: 90, Whirlipede: 90,
				Dusclops: 84, Porygon2: 82, Chansey: 78,

				// Weather or teammate dependent
				Snover: 95, Vulpix: 95, Ninetales: 78, Tentacruel: 78, Toxicroak: 78,
			
				// Banned mega
				"Kangaskhan-Mega": 72, "Gengar-Mega": 72, "Blaziken-Mega": 72, "Lucario-Mega": 72,

				// Holistic judgment
				Carvanha: 90, Genesect: 72, Kyurem: 78, Sigilyph: 74, Xerneas: 68
			};
			var level = levelScale[template.tier] || 90;
			var eviolite = (template.evos.length > 0 && set.item === "Eviolite") ? true : false;
			
			if (customScale[template.name]) level = customScale[template.name];
			
			if (eviolite && !customScale[template.name]) level = levelScale[this.getTemplate(template.evos[0]).tier];
			else if(eviolite) level = 80;
			
			if (set.level) set.forcedLevel = level;
			return [];
		}
	},
];