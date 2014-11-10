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
	{
		name: "Immunimons",
		section: "Other Metagames",

		ruleset: ['OU'],
		banlist: [],
		onTryHit: function (target, source, move) {
			if (target === source || move.type === '???' || move.id === 'struggle') return;
			if (target.hasType(move.type)) {
				this.add('-debug','immunimons immunity [' + move.id + ']');
				return null;
			}
		},
		onDamage: function (damage, target, source, effect) {
			if ((source.hasType('Rock') && effect.id === 'stealthrock') || (source.hasType('Ground') && effect.id === 'spikes')) {
				this.add('-debug','immunimons immunity [' + effect.id + ']');
				return false;
			}
		},
	},
	{
		name: "Technician Tower",
		section: "Other Metagames",

		mod: "technichiantower",
		ruleset: ['Pokemon', 'Standard', 'Team Preview', 'Swagger Clause', 'Baton Pass Clause'],
		banlist: ['Uber', 'Soul Dew', 'Gengarite', 'Kangaskhanite', 'Lucarionite', 'Mawilite', 'Technician', 'Skill Link'],
		validateSet: function(set) {
			for (var i in set.moves) {
				var move = this.getMove(string(set.moves[i]));
				if (move.basePower && move.basePower >= 90) return ['The move ' + move.name + ' is banned because it has >90 Base Power.'];
				if (move.id === 'frustration' && set.happiness < 105) return ['The move Frustration is banned because Pokemon ' + (set.name || set.species) + ' has less than 105 happiness'];
				if (move.id === 'return' && set.happiness > 150) return ['The move Return is banned because Pokemon ' + (set.name || set.species) + 'has more than 150 happiness'];
				if (move.basePowerCallback && !(move.id in {'frustration':1,'return':1})) return ['The move ' + move.name + ' is banned because it has a variable BP'];
				if (move.basePower && move.basePower > 63 && set.ability in {'Pixilate':1,'Aerilate':1,'Refrigerate':1}) return ['The move ' + move.name + ' is banned for Pokemon with an -ate ability.']
			}
		},
		onBasePowerPriority: 8,
		onBasePower: function (basePower, attacker, defender, move) {
			if (basePower <= 60) {
				this.debug('Technician boost');
				return this.chainModify(1.5);
			}
		},
	},
	// technichian tower's scripts.js file (mods/technichiantower/scripts.js)
	// exports.BattleScripts = {
	// 	init: function() {
	// 	   this.modData('Pokedex', 'scizormega').abilities['0'] = 'Swarm';
	// 	   this.modData('Pokedex', 'heracrossmega').abilities['0'] = 'Swarm';
	//   }
	// }
];