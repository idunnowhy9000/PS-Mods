exports.BattleStatuses = {
	confusion: {
		inherit: true,
		onBeforeMove: function (pokemon) {
			pokemon.volatiles.confusion.time--;
			if (!pokemon.volatiles.confusion.time) {
				pokemon.removeVolatile('confusion');
				return;
			}
			this.add('-activate', pokemon, 'confusion');
			if (this.random(3) === 0) {
				return;
			}
			if (pokemon.ability !== 'Magic Guard') {
				this.directDamage(this.getDamage(pokemon, pokemon, 40));
			}
			return false;
		}
	},
	par: {
		inherit: true,
		onModifySpe: null,
		onModifyMove: function (move) {
			move.priority = -8;
		},
	},
	hail: {
		inherit: true,
		onModifyDefPriority: 10,
		onModifyDef: function (def, pokemon) {
			if (pokemon.hasType('Ice') && this.isWeather('hail')) {
				return this.modify(def, 1.5);
			}
		},
	},
	frz: {
		inherit: true,
		onStart: function (target) {
			this.add('-status', target, 'frz');
			this.effectData.startTime = 4;
			this.effectData.time = this.effectData.startTime;
			if (target.species === 'Shaymin-Sky' && target.baseTemplate.species === target.species) {
				var template = this.getTemplate('Shaymin');
				target.formeChange(template);
				target.baseTemplate = template;
				target.setAbility(template.abilities['0']);
				target.baseAbility = target.ability;
				target.details = template.species + (target.level === 100 ? '' : ', L' + target.level) + (target.gender === '' ? '' : ', ' + target.gender) + (target.set.shiny ? ', shiny' : '');
				this.add('detailschange', target, target.details);
				this.add('message', target.species + " has reverted to Land Forme! (placeholder)");
			}
		},
		onBeforeMovePriority: 2,
		onBeforeMove: function (pokemon, target, move) {
			if (move.thawsUser || this.random(5) === 0) {
				pokemon.cureStatus();
				return;
			}
			this.add('cant', pokemon, 'frz');
			return false;
		},
	}
}